import { FaPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Received() {
  return (
    <div className="my-28 w-5/6 mx-auto border-green-400 border-2 p-5 rounded-2xl">
      <FaPaperPlane className="text-5xl mx-auto text-green-400" />
      <div className="my-10 space-y-10">
        <h1 className="text-3xl text-center">Thank you!</h1>
        <div className="md:flex md:items-center md:space-x-1 md:justify-center">
          <p className="text-start md:text-center">
            I have received your inquiry !
          </p>
          <p>I will get back to you as soon as possible.</p>
        </div>
        <div className="my-1 text-center">
          <Link to="/">
            <button className="p-3 rounded-2xl bg-slate-300 hover:bg-green-300 w-full md:w-3/6">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
