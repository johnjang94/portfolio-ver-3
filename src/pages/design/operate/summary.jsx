import PropTypes from "prop-types";

export default function Summary({ isNdaLocked = true }) {
  return (
    <div>
      <div className="md:mx-20 my-3 space-y-5">
        <div>
          <p className="font-semibold md:text-xl uppercase">Summary</p>
          <div className="py-5 space-y-3 md:px-8">
            <p>
              This is an operation-support platform - a brand-new B2B SaaS
              platform - for the hospitality industry. Recognizing that existing
              platforms predominantly cater to large hotels, I have participated
              in this project from the ground up to offer tailored support for
              small-scale operators as well.
            </p>
            <p>
              The objective was to simplify reservation, hygiene, and payment
              processes while creating a user-first, scalable solution for
              inventory management, driven by data insights and rapid
              prototyping to meet the needs of diverse operators.
            </p>
          </div>
        </div>
        <div>
          <p className="font-semibold md:mx-8">Outcome</p>
          {/* Desktop view */}
          <div className="flex-col grid-cols-3 my-10 hidden md:block">
            <div className="text-3xl md:text-5xl grid grid-cols-3 text-center">
              <p>80%</p>
              <p>90%</p>
              <p>40%</p>
            </div>
            <div className="grid grid-cols-3 text-sm my-3 text-center space-x-5">
              <p>positive remarks in live updates</p>
              <p>
                of users said that it is smooth and easy to adjust the rates
              </p>
              <p>improvement in operational efficiency (targeted)</p>
            </div>
          </div>
          {/* Mobile view */}
          <div className="my-10 block md:hidden">
            <div>
              <p className="text-3xl md:text-5xl text-center">80%</p>
              <p className="text-center">positive remarks in live updates</p>
            </div>
            <div className="my-10 block md:hidden">
              <p className="text-3xl md:text-5xl text-center">90%</p>
              <p className="text-center">
                of users said that it is smooth and easy to adjust the rates
              </p>
            </div>
            <div className="my-10 block md:hidden">
              <p className="text-3xl md:text-5xl text-center">40%</p>
              <p>improvement in operational efficiency (targeted)</p>
            </div>
          </div>
        </div>
        {isNdaLocked && (
          <p className="my-10 text-center">
            Please note: the information regarding the business model is
            available via <span className="text-red-500">NDA access</span>.
          </p>
        )}
      </div>
    </div>
  );
}

Summary.propTypes = {
  isNdaLocked: PropTypes.bool,
};
