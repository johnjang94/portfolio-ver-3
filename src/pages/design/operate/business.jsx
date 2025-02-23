import { OperateEase } from "../../../utils/operate";
import PropTypes from "prop-types";

export default function Business({ isNdaLocked = true }) {
  return (
    <div className="space-y-5 py-5 md:mx-20">
      <h3 className="text-xl uppercase">Business Model</h3>
      <div className="space-y-5 md:mx-8">
        <p className="font-bold text-center">
          What was the business model the project pursued?
        </p>
        <p>
          Reflecting how management tools do not really provide the needs of the
          small-medium hotel owners or managers, I collaborated with the founder
          of this independent B2B SaaS Enterprise project to come up with a new
          business model that automates hotel management tasks across room
          reservation, catering services, and financial operations to focus on
          accommodating the small-medium business owners / managers.
        </p>
        <ul className="space-y-3">
          <li>
            Feature 1: the model offers flexible customization on reservation
            fees and late check-out penalties for the management.
          </li>
          <li>
            Feature 2: the model offers tiered subscription plans between Basic,
            Pro, and Enterprise depending on the number of services that each
            client needs.
          </li>
        </ul>
        {!isNdaLocked && (
          <img src={OperateEase.Business} alt="Business model canvas" />
        )}
        {isNdaLocked && (
          <p className="py-16 text-center">
            Please note: the detailed diagram of the new business model is
            available via <span className="text-red-500">NDA access</span>.
          </p>
        )}
      </div>
    </div>
  );
}

Business.propTypes = {
  isNdaLocked: PropTypes.bool,
};
