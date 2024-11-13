import { OperateEase } from "../../../utils/operate";

export default function Insight() {
  return (
    <div className="space-y-5">
      <h3 className="text-xl uppercase">Insight</h3>
      <div className="md:mx-20 my-5 space-y-3">
        <p>We needed to know...</p>
        <p className="px-10">
          Q. What kind of management software do they use and does the software
          suit their needs?
        </p>
        <p className="px-10">
          Q. In what ways do they utilize the management software?
        </p>
        <p className="px-10">
          Q. In what areas does the management software useful?
        </p>
      </div>
      <div className="md:mx-20 space-y-5 py-10">
        <p className="px-10">
          According to surveys, most hoteliers prefer an integrative Property
          Management System (PMS).
        </p>
        <div className="bg-slate-300 p-5 rounded-2xl">
          <img
            src={OperateEase.Insights}
            alt="Insights"
            className="text-2xl rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}
