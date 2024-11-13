import { useForm } from "react-hook-form";
import { MdOutlineSend } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        navigate("/received");
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="md:my-5 my-28 md:py-4 px-10">
      <h1 className="md:text-3xl text-lg md:my-5 my-20 text-center">
        Stay in touch with me!
      </h1>
      <div className="w-full max-w-lg mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name">Name</label>
            <br />
            <input
              {...register("name", { required: "Name is required" })}
              id="name"
              type="text"
              className="w-full rounded-lg p-1"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <br />
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              id="email"
              type="email"
              className="w-full rounded-lg p-1"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="inquiry">What would you like to talk about?</label>
            <br />
            <input
              {...register("inquiry", { required: "This field is required" })}
              type="text"
              id="inquiry"
              className="w-full rounded-lg p-1"
            />
            {errors.inquiry && (
              <p className="text-red-500 text-sm mt-1">
                {errors.inquiry.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="message">Your Message</label>
            <br />
            <textarea
              {...register("message", { required: "Message is required" })}
              id="message"
              className="w-full h-[30vh] rounded-lg p-1"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="p-2 bg-blue-400 rounded-xl text-center flex items-center gap-2"
            >
              Send <MdOutlineSend />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
