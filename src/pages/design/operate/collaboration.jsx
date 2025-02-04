import { OperateEase } from "../../../utils/operate";

export default function Collaboration() {
  return (
    <div>
      <h3 className="text-xl uppercase">For Developers</h3>
      <p className="md:mx-20 my-5 space-y-5 md:space-y-0">
        Along with my colleagues, I created the navigation and the buttons in
        the{" "}
        <button className="text-blue-500 hover:underline">
          <a href="https://www.figma.com/design/j6UcWtRXq01Scyer3E7ph8/Design-Phase?node-id=566-9734&t=gbhCAuStxWnU0eOj-0">
            style guide
          </a>
        </button>
        , and we transferred the design file over to{" "}
        <button className="text-blue-500 hover:underline">
          <a href="https://app.zeplin.io/project/67129d2e034b96e06cdd762e/dashboard">
            Zeplin
          </a>
        </button>{" "}
        to help web developers to build the product with less amount of
        challenges.
      </p>
      <div className="md:grid md:grid-cols-2 gap-10">
        <div className="bg-slate-300 rounded-2xl p-5">
          <img
            src={OperateEase.Navigation}
            alt="navigation"
            className="rounded-2xl"
          />
        </div>
        <div className="bg-slate-300 rounded-2xl p-5">
          <img
            src={OperateEase.Buttons}
            alt="buttons"
            className="rounded-2xl"
          />
        </div>
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
