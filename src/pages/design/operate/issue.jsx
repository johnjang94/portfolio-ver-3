import PropTypes from "prop-types";
import { OperateEase } from "../../../utils/operate";

export default function Issue({ isNdaLocked = true }) {
  return (
    <div className="space-y-5 py-5 md:mx-20">
      <h3 className="text-xl uppercase">At Issue</h3>
      <div className="space-y-5 md:mx-8">
        <p className="font-bold">What was the problem?</p>
        <p>
          The hospitality industry <span className="text-red-500">lacked</span>{" "}
          a comprehensive, user-friendly platform that served all operators.
          Existing solutions are designed with large hotels in mind, leaving
          independent and small-scale operators to cope with{" "}
          <span className="text-red-500">cumbersome, inefficient systems</span>.
          This misalignment created operational challenges in managing everyday
          tasks such as reservations, hygiene monitoring, and payment
          processing.
        </p>
      </div>

      {!isNdaLocked ? (
        <>
          <div className="space-y-5 md:mx-8 pt-5">
            <p className="font-bold">Interviewee Demographics</p>
            <p>
              In this project, I liaised with UX Researchers and have
              interviewed a total of 10 participants. 80% of them were currently
              or previously occupied in the field of hospitality. Among the
              participants, 70% of the interviewees were from North America (the
              US & Canada).
            </p>
            <img
              src={OperateEase.Interviewees}
              alt="Interviewees"
              className="p-2 bg-white rounded-2xl"
            />
          </div>
          <div className="space-y-5 md:mx-8 pt-5">
            <p className="font-bold">Identified Issues</p>
            <p>
              From the research process (including one-on-one interviews), I
              have learned the following issues:
            </p>
            <div className="space-y-3">
              <ul>
                <li className="text-base text-red-500">Late Check-outs</li>
                <li>
                  For some small hospitality businesses, they face{" "}
                  <span className="text-red-500">
                    the late check-outs about 15%
                  </span>{" "}
                  during the peak seasons. These occasions cause financial and
                  operational issues because the owners cannot order for a
                  clean-up for the next guest on-time, leading to poor
                  perception on their business. Having said that, these owners
                  wish that they were able to penalize the late check-outs.
                </li>
              </ul>
              <ul>
                <li className="text-base text-red-500">
                  Platform for the Experienced
                </li>
                <li>
                  In average, at least 50% of the interviewees said that they
                  have tried about 4 different management applications. They
                  said that many of them are specialized to support the
                  operation of bigger sized companies.
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <p className="text-sm">
          Please note: additional operational metrics and user-specific
          performance data are available via{" "}
          <span className="text-red-500">NDA access</span>.
        </p>
      )}
    </div>
  );
}

Issue.propTypes = {
  isNdaLocked: PropTypes.bool,
};
