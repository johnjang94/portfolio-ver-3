import { OperateEase } from "../../../utils/operate";

export default function Developers() {
  return (
    <div className="space-y-5 py-5 md:mx-20">
      <h3 className="text-xl uppercase">For the Engineering Team</h3>
      <p className="md:mx-8 my-3">
        Along with my design colleagues, I created the design system file that
        can be converted into coding language for the developers to get started.
        I share some of the samples below such as
        <button className="text-blue-500 hover:underline">
          <a href="https://www.figma.com/design/j6UcWtRXq01Scyer3E7ph8/Design-Phase?node-id=566-9734&t=gbhCAuStxWnU0eOj-0">
            style guide
          </a>
        </button>
        and the tool called{" "}
        <button className="text-blue-500 hover:underline">
          <a href="https://app.zeplin.io/project/67129d2e034b96e06cdd762e/dashboard">
            Zeplin
          </a>
        </button>{" "}
        which supports full indication of CSS.
      </p>
      <div className="space-y-5">
        <div className="bg-slate-300 rounded-2xl p-5">
          <img src={OperateEase.Colour} alt="colour" className="rounded-2xl" />
        </div>
        <div className="bg-slate-300 rounded-2xl p-5">
          <img src={OperateEase.CSS} alt="css" className="rounded-2xl" />
        </div>
      </div>
    </div>
  );
}
