import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Detail() {
  const { register, handleSubmit, watch, setValue } = useForm();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [userRole, setUserRole] = useState("");

  const foundWhatLookingFor = watch("foundWhatLookingFor");

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/feedback`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userRole: data.userRole,
            otherRole: data.otherRole || "",
            foundWhatLookingFor: data.foundWhatLookingFor,
            whatLookingFor: data.discoveryDescription || "",
            improvementSuggestions: data.improvementSuggestion || "",
            reachSource: data.websiteSource,
          }),
          credentials: "include",
        }
      );

      if (response.ok) {
        navigate("/sent");
      } else {
        throw new Error("Failed to submit data");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setError("Something went wrong. Please try again.");
      navigate("/return");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-[500px] p-6">
        <h2 className="text-xl font-semibold my-4 text-center">
          Feedback on John&#39;s Portfolio
        </h2>

        {error && <p className="text-red-500">{error}</p>}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 overflow-y-scroll"
        >
          <p>Q. Could you please introduce yourself?</p>
          <select
            className="w-full p-2 border rounded"
            {...register("userRole", { required: true })}
            onChange={(e) => {
              setUserRole(e.target.value);
              setValue("userRole", e.target.value);
            }}
          >
            <option value="">Select an option</option>
            <option value="recruiter_company">
              I am a recruiter from a company
            </option>
            <option value="recruiter_agency">
              I am a recruiter from an agency
            </option>
            <option value="designer">I am a designer</option>
            <option value="developer">I am a developer</option>
            <option value="freelancer">I am a freelancer</option>
            <option value="other">Other</option>
          </select>

          {userRole === "other" && (
            <input
              type="text"
              className="w-full p-2 border rounded mt-2"
              placeholder="Please specify your role"
              {...register("otherRole", { required: true })}
            />
          )}

          <p>Q. Have you found what you were looking for?</p>
          <div className="gap-4 grid grid-cols-2 justify-center mx-auto w-3/6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="yes"
                {...register("foundWhatLookingFor", { required: true })}
              />
              Yes
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="no"
                {...register("foundWhatLookingFor", { required: true })}
              />
              No
            </label>
          </div>

          {foundWhatLookingFor === "yes" && (
            <div>
              <p className="p-2">
                I am happy to hear that! <br />
                May I kindly ask you to describe your discovery?
              </p>
              <textarea
                className="w-full p-2 border rounded"
                {...register("discoveryDescription", { required: true })}
                placeholder="I was looking for..."
                rows="3"
              />
            </div>
          )}

          {foundWhatLookingFor === "no" && (
            <div>
              <p className="p-2">
                I am sorry to hear that! <br />
                What do you wish had been done better?
              </p>
              <textarea
                className="w-full p-2 border rounded"
                {...register("improvementSuggestion", { required: true })}
                placeholder="I wish..."
                rows="3"
              />
            </div>
          )}

          <p>Q. How did you get to know my website?</p>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="e.g., Google, Social Media, Friend"
            {...register("websiteSource", { required: true })}
          />

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
