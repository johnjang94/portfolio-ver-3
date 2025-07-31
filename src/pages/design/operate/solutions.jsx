import { OperateEase } from "../../../utils/operate";

export default function Solutions() {
  return (
    <div>
      <div className="space-y-3 md:mx-20 my-10">
        <p className="font-semibold">
          Solution | Intuitive & Tailored Interface
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
        width={850}
        className="my-5 md:p-2 rounded-2xl bg-white mx-20"
      />
    </div>
  );
}
