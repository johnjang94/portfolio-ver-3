import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const portfolioKeywords = [
  "data",
  "design",
  "innovation",
  "creativity",
  "strategy",
  "efficiency",
];

export default function QuickFeedback() {
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    getValues,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [transition, setTransition] = useState("incoming");
  const professionalRole = watch("professionalRole");
  const rating = watch("candidateProfileRating");
  const candidateDesiredType = watch("candidateDesiredType") || "";

  const nextStep = (next) => {
    setTransition("outgoing");
    setTimeout(() => {
      setCurrentStep(next);
      setTransition("incoming-start");
      setTimeout(() => {
        setTransition("incoming");
      }, 50);
    }, 500);
  };

  const handleQ2Additional = async () => {
    const valid = await trigger("candidateDesiredType");
    if (!valid) return;
    const answer = getValues("candidateDesiredType").toLowerCase();
    const matchesKeyword = portfolioKeywords.some((keyword) =>
      answer.includes(keyword)
    );
    if (!matchesKeyword) {
      navigate("/return");
    } else {
      nextStep(2.2);
    }
  };

  const handleQ2FollowUp = async () => {
    const valid = await trigger("candidateLackingFeedback");
    if (!valid) return;
    navigate("/return");
  };

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/feedback`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        navigate("/sent");
      } else {
        throw new Error("Failed to submit data");
      }
    } catch (err) {
      console.error(err);
      navigate("/return");
    }
  };

  let animationClasses = "";
  if (transition === "outgoing") {
    animationClasses = "-translate-y-full opacity-0";
  } else if (transition === "incoming-start") {
    animationClasses = "translate-y-full opacity-0";
  } else if (transition === "incoming") {
    animationClasses = "translate-y-0 opacity-100";
  }

  const baseClasses = `transition-transform duration-500 ${animationClasses}`;

  // survey 취소 함수 (검은색 배경 클릭 시 호출)
  const cancelSurvey = () => {
    navigate("/return");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className={baseClasses}>
            <p>
              1. What is your current role, and if applicable, which
              organization (company or school) are you affiliated with?
            </p>
            <select
              className="w-full p-2 border rounded"
              {...register("professionalRole", {
                required: "Please select your role",
              })}
            >
              <option value="">Select your role</option>
              <option value="recruiter">Recruiter</option>
              <option value="mentor">Mentor</option>
              <option value="full_time">Full-time Professional</option>
              <option value="other">Other (e.g., Freelancer or Student)</option>
            </select>
            {errors.professionalRole && (
              <p className="text-red-500">{errors.professionalRole.message}</p>
            )}
            {professionalRole === "other" && (
              <>
                <input
                  type="text"
                  className="w-full p-2 border rounded mt-2"
                  placeholder="If Freelancer, specify your expertise; if Student, specify your school."
                  {...register("otherRole", {
                    required: "This field is required",
                  })}
                />
                {errors.otherRole && (
                  <p className="text-red-500">{errors.otherRole.message}</p>
                )}
              </>
            )}
            <input
              type="text"
              className="w-full p-2 border rounded mt-2"
              placeholder="If affiliated with a specific organization, enter its name (optional)."
              {...register("organization")}
            />
            <button
              type="button"
              onClick={async () => {
                const valid = await trigger(["professionalRole", "otherRole"]);
                if (valid) nextStep(2);
              }}
              className="mt-4 w-full py-2 text-white bg-blue-500 hover:bg-blue-600 rounded"
            >
              Next
            </button>
          </div>
        );
      case 2:
        return (
          <div className={baseClasses}>
            <p>
              2. How well does my portfolio match your ideal candidate profile?
            </p>
            <div className="flex gap-4">
              {["excellent", "good", "average", "poor"].map((val) => (
                <label key={val} className="flex items-center gap-2">
                  <input
                    type="radio"
                    value={val}
                    {...register("candidateProfileRating", {
                      required: "Please select an option",
                    })}
                  />
                  {val.charAt(0).toUpperCase() + val.slice(1)}
                </label>
              ))}
            </div>
            {errors.candidateProfileRating && (
              <p className="text-red-500">
                {errors.candidateProfileRating.message}
              </p>
            )}
            {["average", "poor"].includes(rating) && (
              <div className="mt-4">
                <p>Please describe the candidate profile you were targeting.</p>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Your answer here..."
                  {...register("candidateDesiredType", {
                    required: "This field is required",
                  })}
                />
                {errors.candidateDesiredType && (
                  <p className="text-red-500">
                    {errors.candidateDesiredType.message}
                  </p>
                )}
                {portfolioKeywords.some((keyword) =>
                  candidateDesiredType.toLowerCase().includes(keyword)
                ) && (
                  <div className="mt-4">
                    <p>
                      Based on your previous answer, please indicate which
                      aspect of my portfolio you feel remains insufficient.
                    </p>
                    <input
                      type="text"
                      className="w-full p-2 border rounded"
                      placeholder="Your feedback here..."
                      {...register("candidateLackingFeedback", {
                        required: "This field is required",
                      })}
                    />
                    {errors.candidateLackingFeedback && (
                      <p className="text-red-500">
                        {errors.candidateLackingFeedback.message}
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}
            <button
              type="button"
              onClick={async () => {
                if (
                  ["excellent", "good"].includes(
                    getValues("candidateProfileRating")
                  )
                ) {
                  const valid = await trigger("candidateProfileRating");
                  if (!valid) return;
                  nextStep(3);
                } else {
                  const valid = await trigger([
                    "candidateProfileRating",
                    "candidateDesiredType",
                  ]);
                  if (!valid) return;
                  const answer = getValues(
                    "candidateDesiredType"
                  ).toLowerCase();
                  const matches = portfolioKeywords.some((keyword) =>
                    answer.includes(keyword)
                  );
                  if (matches) {
                    const validFeedback = await trigger(
                      "candidateLackingFeedback"
                    );
                    if (!validFeedback) return;
                  }
                  navigate("/return");
                }
              }}
              className="mt-4 w-full py-2 text-white bg-blue-500 hover:bg-blue-600 rounded"
            >
              Next
            </button>
          </div>
        );
      case 2.1:
        return (
          <div className={baseClasses}>
            <p>Please describe the candidate profile you were targeting.</p>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Your answer here..."
              {...register("candidateDesiredType", {
                required: "This field is required",
              })}
            />
            {errors.candidateDesiredType && (
              <p className="text-red-500">
                {errors.candidateDesiredType.message}
              </p>
            )}
            <button
              type="button"
              onClick={handleQ2Additional}
              className="mt-4 w-full py-2 text-white bg-blue-500 hover:bg-blue-600 rounded"
            >
              Next
            </button>
          </div>
        );
      case 2.2:
        return (
          <div className={baseClasses}>
            <p>
              Based on your previous answer, please indicate which aspect of my
              portfolio you feel remains insufficient.
            </p>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Your feedback here..."
              {...register("candidateLackingFeedback", {
                required: "This field is required",
              })}
            />
            {errors.candidateLackingFeedback && (
              <p className="text-red-500">
                {errors.candidateLackingFeedback.message}
              </p>
            )}
            <button
              type="button"
              onClick={handleQ2FollowUp}
              className="mt-4 w-full py-2 text-white bg-blue-500 hover:bg-blue-600 rounded"
            >
              Next
            </button>
          </div>
        );
      case 3:
        return (
          <div className={baseClasses}>
            <p>
              3. How well do my projects reflect the cultural values you
              prioritize?
            </p>
            <div className="flex gap-4">
              {["very_well", "somewhat", "not_really"].map((val) => (
                <label key={val} className="flex items-center gap-2">
                  <input
                    type="radio"
                    value={val}
                    {...register("culturalFit", {
                      required: "Please select an option",
                    })}
                  />
                  {val === "very_well"
                    ? "Very Well"
                    : val === "somewhat"
                    ? "Somewhat"
                    : "Not Really"}
                </label>
              ))}
            </div>
            {errors.culturalFit && (
              <p className="text-red-500">{errors.culturalFit.message}</p>
            )}
            <button
              type="button"
              onClick={async () => {
                const valid = await trigger("culturalFit");
                if (valid) nextStep(4);
              }}
              className="mt-4 w-full py-2 text-white bg-blue-500 hover:bg-blue-600 rounded"
            >
              Next
            </button>
          </div>
        );
      case 4:
        return (
          <div className={baseClasses}>
            <p>4. Which project did you like the most? (Select one)</p>
            <select
              className="w-full p-2 border rounded"
              {...register("likedProject", {
                required: "Please select a project",
              })}
            >
              <option value="">Select a project</option>
              <option value="Project Food-Distro">
                Non-profit - Project Food-Distro
              </option>
              <option value="The Sakhi">E-commerce - The Sakhi</option>
              <option value="OperateEase">
                B2B SaaS Enterprise - OperateEase
              </option>
            </select>
            {errors.likedProject && (
              <p className="text-red-500">{errors.likedProject.message}</p>
            )}
            <button
              type="button"
              onClick={async () => {
                const valid = await trigger("likedProject");
                if (valid) nextStep(5);
              }}
              className="mt-4 w-full py-2 text-white bg-blue-500 hover:bg-blue-600 rounded"
            >
              Next
            </button>
          </div>
        );
      case 5:
        return (
          <div className={baseClasses}>
            <p>
              5. Which project could be improved? (Select a project and specify
              what was unclear or raised questions, and why)
            </p>
            <select
              className="w-full p-2 border rounded"
              {...register("improvableProject", {
                required: "Please select a project",
              })}
            >
              <option value="">Select a project</option>
              <option value="Project Food-Distro">
                Non-profit - Project Food-Distro
              </option>
              <option value="The Sakhi">E-commerce - The Sakhi</option>
              <option value="OperateEase">
                B2B SaaS Enterprise - OperateEase
              </option>
            </select>
            {errors.improvableProject && (
              <p className="text-red-500">{errors.improvableProject.message}</p>
            )}
            <textarea
              className="w-full p-2 border rounded mt-2"
              placeholder="Explain which part was unclear or raised questions, and why."
              {...register("improvementDetails", {
                required: "This field is required",
              })}
              rows="2"
            />
            {errors.improvementDetails && (
              <p className="text-red-500">
                {errors.improvementDetails.message}
              </p>
            )}
            <button
              type="button"
              onClick={async () => {
                const valid = await trigger([
                  "improvableProject",
                  "improvementDetails",
                ]);
                if (valid) nextStep(6);
              }}
              className="mt-4 w-full py-2 text-white bg-blue-500 hover:bg-blue-600 rounded"
            >
              Next
            </button>
          </div>
        );
      case 6:
        return (
          <div className={baseClasses}>
            <p>6. Any additional materials you’d recommend including?</p>
            <textarea
              className="w-full p-2 border rounded"
              placeholder="Optional suggestions..."
              {...register("additionalMaterials", {
                required: "This field is required",
              })}
              rows="2"
            />
            {errors.additionalMaterials && (
              <p className="text-red-500">
                {errors.additionalMaterials.message}
              </p>
            )}
            <button
              type="button"
              onClick={() => nextStep(7)}
              className="mt-4 w-full py-2 text-white bg-blue-500 hover:bg-blue-600 rounded"
            >
              Next
            </button>
          </div>
        );
      case 7:
        return (
          <div className={baseClasses}>
            <p>
              Please enter your name and email address so we can send you a
              thank you email for completing the survey.
            </p>
            <input
              type="text"
              className="w-full p-2 border rounded mt-2"
              placeholder="Your Name"
              {...register("userName", { required: "Please enter your name" })}
            />
            {errors.userName && (
              <p className="text-red-500">{errors.userName.message}</p>
            )}
            <input
              type="email"
              className="w-full p-2 border rounded mt-2"
              placeholder="Your Email"
              {...register("userEmail", {
                required: "Please enter your email",
              })}
            />
            {errors.userEmail && (
              <p className="text-red-500">{errors.userEmail.message}</p>
            )}
            <button
              type="button"
              onClick={handleSubmit(onSubmit)}
              className="mt-4 w-full py-2 text-white bg-blue-500 hover:bg-blue-600 rounded"
            >
              Submit
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={cancelSurvey}
    >
      <div
        className="bg-white rounded-lg shadow-lg w-[500px] max-h-[80vh] p-6 flex flex-col overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold my-10 text-center">
          Quick Feedback on John&#39;s Portfolio
        </h2>
        <div className="flex-1">{renderStep()}</div>
      </div>
    </div>
  );
}
