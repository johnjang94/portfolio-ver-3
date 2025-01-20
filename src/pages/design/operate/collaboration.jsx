import { OperateEase } from "../../../utils/operate";

export default function Collaboration() {
  return (
    <div>
      <h3 className="text-xl uppercase">Development In Progress</h3>
      <p className="md:mx-20 my-5">
        The project is currently being built using technology tools such as
        Next.js, TypeScript, React, and Vite (which are advanced level of
        technology for HTML, CSS, and JavaScript), and I am helping the
        development team to bring the website to the internet{" "}
        <button className="text-blue-500 hover:underline">
          <a href="https://operate-ease-lime.vercel.app/"></a>here
        </button>
        .
      </p>
      <div className="md:mx-20 space-y-5">
        <div className="bg-slate-300 rounded-2xl p-5">
          <img
            src={OperateEase.Developement}
            alt="development"
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
