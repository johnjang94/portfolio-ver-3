import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <section>
      <p className="text-center mt-10 md:text-2xl">
        The following is my resume sample.
      </p>
      <div className="my-10">
        <img
          src="/product_designer.png"
          alt="Resume"
          width={1250}
          className="mx-auto rounded-3xl"
        />
      </div>
      <div className="md:flex md:items-center md:text-center md:gap-1 md:justify-center hidden">
        <p>Please reach out to me</p>
        <Link to="/contact">
          <p className="text-blue-500">here</p>
        </Link>
        <p>for the most up-to-date information.</p>
      </div>
      <div className="flex items-center text-center gap-1 justify-center md:hidden">
        <p>Check out the latest version</p>
        <Link to="/contact">
          <p className="text-blue-500">here</p>
        </Link>
      </div>
    </section>
  );
}
