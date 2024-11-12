export default function Overview() {
  return (
    <div>
      <h3 className="text-xl uppercase">Overview</h3>
      <div className="md:mx-20 my-3">
        <div>
          <p className="font-semibold">Problem</p>
          <div className="p-5">
            <p>
              The retention and the conversion rates for TuGo Insurance have
              been continuously dropping for the last quarter.
            </p>
          </div>
        </div>
        <div>
          <p className="font-semibold">Outcome</p>
          <div className="p-5 space-y-3">
            <p>
              About{" "}
              <span className="text-blue-500">
                3 out of 5 potential travelers
              </span>{" "}
              have successfully explored the insurance products and got a chance
              to know what services TuGo Insurance offers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
