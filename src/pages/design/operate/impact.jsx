import PropTypes from "prop-types";

export default function Impact({ isPasswordCorrect }) {
  return (
    <div>
      <h3 className="text-xl uppercase">Impact</h3>
      <div className="md:mx-20 my-3 space-y-5">
        {isPasswordCorrect ? (
          <ul>
            <li>
              Hoteliers spend{" "}
              <span className="text-red-500 underline">
                an average of 10 minutes
              </span>{" "}
              to manually check the inventory status for catering services and
              face the lack of options for accommodation fees in many platforms.
              By automating the real-time updates and allowing some flexibility
              in rate adjustments, we estimate{" "}
              <span className="text-blue-500">up to 40% reduction</span> in{" "}
              <span className="underline">missed-out orders</span> in catering
              management and <span className="text-blue-500">the recovery</span>{" "}
              of the{" "}
              <span className="underline">
                approximated loss of <span className="text-red-500">15%</span>
              </span>{" "}
              that comes from the room services.
            </li>
          </ul>
        ) : (
          <ul className="m-5 space-y-3">
            <li>
              <span className="font-bold">40% reduction</span> in missed
              catering orders
            </li>
            <li>
              <span className="font-bold">15% recovery of losses</span> from
              late check-outs
            </li>
            <li>
              Duration of time for managers checking the inventory has reduced
              from <span className="font-bold">10 minutes to 6 minutes</span>
            </li>
            <li>
              <span className="font-bold">90% of users</span> found rate
              adjustments smooth and intuitive
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

Impact.propTypes = {
  isPasswordCorrect: PropTypes.bool.isRequired,
};
