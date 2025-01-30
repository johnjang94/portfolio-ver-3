import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Detail() {
  const { register, handleSubmit, watch } = useForm();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const foundWhatLookingFor = watch("foundWhatLookingFor");

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://your-backend-api.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

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
        <h2 className="text-xl font-semibold mb-4">
          Feedback on John&#39;s Portfolio
        </h2>

        {error && <p className="text-red-500">{error}</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <p>Have you found what you were looking for?</p>
          <div className="flex gap-4">
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
              <p>
                I am happy to hear that! May I kindly ask you to describe your
                discovery?
              </p>
              <textarea
                className="w-full p-2 border rounded"
                {...register("discoveryDescription", { required: true })}
                placeholder="Your response..."
                rows="3"
              />
            </div>
          )}

          {foundWhatLookingFor === "no" && (
            <div>
              <p>
                I am sorry to hear that! What do you wish had been done better?
              </p>
              <textarea
                className="w-full p-2 border rounded"
                {...register("improvementSuggestion", { required: true })}
                placeholder="Your response..."
                rows="3"
              />
            </div>
          )}

          <p>How did you get to know my website?</p>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="e.g., Google, Social Media, Friend"
            {...register("websiteSource", { required: true })}
          />

          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
