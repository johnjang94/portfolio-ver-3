import { OperateEase } from "../../../utils/operate";

export default function MidFi() {
  return (
    <div>
      <h3 className="text-xl uppercase">Mid-Fi</h3>
      <div className="md:mx-20 my-5 space-y-5 list-decimal">
        <p className="md:px-10">
          Mid-fidelity testing revealed that combining all features into one
          dashboard created <span className="text-red-500">confusion</span> and{" "}
          <span className="text-red-500">increased cognitive load</span> for
          users. I have decided to pivot to specialized dashboards, ensuring
          that each interface remained{" "}
          <span className="text-blue-500">simple and intuitive</span>. This
          decision aligned with the business goal of the project to reduce
          operational inefficiencies while maintaining ease of use.
        </p>
        <div className="bg-slate-300 p-5 rounded-2xl">
          <img
            src={OperateEase.RoomDashboard}
            alt="Room Dashboard"
            className="rounded-2xl mx-auto"
          />
        </div>
        <div className="bg-slate-300 p-5 rounded-2xl">
          <img
            src={OperateEase.FoodDashboard}
            alt="Food Dashboard"
            className="rounded-2xl mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
