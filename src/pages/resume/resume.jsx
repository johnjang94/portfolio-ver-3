import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <section>
      <p className="text-center mt-10 md:text-2xl">
        The following is my resume sample.
      </p>
      <div className="my-10">
        <img
          src="/product_designer.jpg"
          alt="Resume"
          width={1250}
          className="mx-auto rounded-3xl"
        />
      </div>
      <div className="flex items-center text-center gap-1 justify-center">
        <p>Please reach out to me</p>
        <Link to="/contact">
          <p className="text-blue-500">here</p>
        </Link>
        <p>for the most up-to-date information.</p>
      </div>
    </section>
  );
}
