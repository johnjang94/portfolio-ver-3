import { OperateEase } from "../../../utils/operate";
import PropTypes from "prop-types";

export default function Solutions({ isPasswordCorrect }) {
  return (
    <div>
      <div className="md:mx-20 space-y-5">
        <p className="font-bold">Solution 1 | Minimalistic Design</p>
        <p className="md:px-10">
          {isPasswordCorrect ? (
            <>
              I have designed two specialized dashboards for room management and
              catering service management to reduce time spent tracking key
              metrics and enable hoteliers to make faster, data-driven
              decisions. This directly supports the business goal of improving
              inventory turnover by{" "}
              <span className="text-blue-500">15% within six months</span> by
              giving managers real-time insights into room rates and
              food/beverage profitability.
            </>
          ) : (
            <>
              I designed specialized dashboards for room and catering
              management, enabling hoteliers to make faster, data-driven
              decisions. This approach supported our goal of improving inventory
              turnover by 15% in six months through real-time insights into room
              rates and profitability.
            </>
          )}
        </p>
      </div>
      <div className="md:mx-20 md:-space-y-96 md:-mt-36">
        <img
          src={OperateEase.Occupancy}
          alt="Room occupancy dashboard sketch"
          className="mx-auto rounded-2xl w-full"
        />
        <img
          src={OperateEase.Food}
          alt="Food dashboard sketch"
          className="mx-auto rounded-2xl w-full"
        />
      </div>
    </div>
  );
}

Solutions.propTypes = {
  isPasswordCorrect: PropTypes.bool.isRequired,
};
