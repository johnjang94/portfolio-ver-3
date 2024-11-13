import { useForm, ValidationError } from "@formspree/react";
import { MdOutlineSend } from "react-icons/md";
import { Link } from "react-router-dom";
import Received from "./received";

export default function Contact() {
  const [state, handleSubmit] = useForm("mqakbdwj");

  if (state.succeeded) {
    return <Received />;
  }
  return (
    <div className="md:my-5 my-28 md:py-4 px-10">
      <h1 className="md:text-3xl text-lg md:my-5 my-20 text-center">
        Stay in touch with me!
      </h1>
      <div className="w-full max-w-lg mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name">Name</label>
            <br />
            <input
              id="name"
              type="text"
              name="name"
              className="w-full rounded-lg p-1"
            />
          </div>
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <br />
            <input
              id="email"
              type="email"
              name="email"
              className="w-full rounded-lg p-1"
            />
          </div>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <div className="mb-4">
            <label htmlFor="inquiry">What would you like to talk about?</label>
            <br />
            <input type="text" id="inquiry" className="w-full rounded-lg p-1" />
          </div>
          <div className="mb-4">
            <label htmlFor="message">Your Message</label>
            <br />
            <textarea
              id="message"
              name="message"
              className="w-full h-[30vh] rounded-lg p-1"
            />
          </div>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <div className="flex justify-end">
            <Link to="/received">
              <button
                type="submit"
                disabled={state.submitting}
                className="p-2 bg-blue-400 rounded-xl text-center flex items-center gap-2"
              >
                Send <MdOutlineSend />
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
