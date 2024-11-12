import { OperateEase } from "../../../utils/operate";
import { FaArrowDown } from "react-icons/fa";

export default function MidFi() {
  return (
    <div>
      <h3 className="text-xl uppercase">Mid-Fi</h3>
      <div className="md:mx-20 my-5 space-y-5 list-decimal">
        <p className="px-10">
          The direction of the project changed during my iteration:
        </p>
        <div className="space-y-3 text-center">
          <p>one dashboard for all-in-one service</p>
          <FaArrowDown className="mx-auto" />
          <p>multiple dashboards to specialize in each type of service</p>
        </div>
        <img
          src={OperateEase.RoomDashboard}
          alt="Room Dashboard"
          width={800}
          className="rounded-2xl"
        />
        <img
          src={OperateEase.FoodDashboard}
          alt="Food Dashboard"
          width={800}
          className="rounded-2xl"
        />
      </div>
    </div>
  );
}
