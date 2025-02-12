import PropTypes from "prop-types";

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
      {isNdaLocked && (
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
