import { OperateEase } from "../../../utils/operate";
import PropTypes from "prop-types";

export default function Solutions({ isNdaLocked = true }) {
  return (
    <div>
      <div className="md:mx-20 space-y-5">
        <p className="font-bold">
          Solution 1 | Design for Specialized Operations
        </p>
        <ul className="md:px-10 space-y-3">
          <div className="md:flex md:items-center md:space-x-5 space-y-3 md:space-y-0">
            <p className="font-bold">Objective:</p>
            <p>Defined MVP to cover the basic needs of the operators</p>
          </div>
          <p className="font-bold">Approach:</p>
          <ul className="md:mx-24 space-y-5">
            <li>
              Conducted extensive 1:1 interviews with independent operators and
              small-business managers to uncover their unique pain points
            </li>
            <li>
              Defined core functionalities — managing reservations, hygiene, and
              payments—tailored to support small-scale operations without
              compromising on scalability
            </li>
            <li>
              Created streamlined workflows to reduce cognitive load and enhance
              daily operational efficiency
            </li>
          </ul>
        </ul>
      </div>
      <img
        src={OperateEase.MVP}
        alt="MVP"
        className="my-5 p-2 rounded-2xl bg-white mx-20"
      />
      {/*  */}
      <div className="space-y-3 md:mx-20 my-10">
        <p className="font-semibold">
          Solution 2 | Intuitive & Tailored Interface
        </p>
        <div className="md:px-8 space-y-3">
          <ul className="space-y-3">
            <li>
              <p className="font-bold">Objective:</p>
              <p className="md:mx-24">
                Ensure the platform is accessible and easy to use for all users,
                specifically regarding small-medium business owners
              </p>
            </li>
            <li>
              <p className="font-bold">Approach:</p>
            </li>
          </ul>
          <ul className="space-y-5 md:mx-24">
            <li>
              Designed a clean, intuitive interface that minimizes complexity
              and guides users effortlessly through key tasks
            </li>
            <li>
              Employed iterative design cycles with data-driven usability
              testing to refine navigation and interaction
            </li>
            <li>
              Integrated feedback from early users to optimize the
              platform&#39;s clarity and responsiveness
            </li>
          </ul>
        </div>
      </div>
      <img
        src={OperateEase.Dashboard}
        alt="MVP"
        className="my-5 p-2 rounded-2xl bg-white mx-20"
      />
      {isNdaLocked && (
        <p className="my-10 text-center">
          Please note: the progress of sketches are available via{" "}
          <span className="text-red-500">NDA access</span>.
        </p>
      )}
    </div>
  );
}

Solutions.propTypes = {
  isNdaLocked: PropTypes.bool,
};
