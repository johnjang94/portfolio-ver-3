import PropTypes from "prop-types";

export default function Impact() {
  return (
    <div>
      <h3 className="text-xl uppercase">Impact</h3>
      <div className="md:mx-20 my-3 space-y-5">
        <p>Anticipated impacts are as follows:</p>
        <ul className="m-5 space-y-3">
          <li>
            Hoteliers with small businesses can charge late check-out fees to
            the customers to maximize their profit up to{" "}
            <span className="font-bold">15%</span>
          </li>
          <li>
            In terms of the inventory for catering or room availability, the{" "}
            <span className="underline">duration of time</span> for hotel
            managers to check the the status should be reduced from{" "}
            <span className="font-bold">10 minutes to 6 minutes</span>
          </li>
          <li>
            Despite the small number of participants for the testing,{" "}
            <span className="font-bold">90% of users</span> found rate
            adjustments smooth and intuitive
          </li>
        </ul>
      </div>
    </div>
  );
}

Impact.propTypes = {
  isPasswordCorrect: PropTypes.bool.isRequired,
};
