export default function Overview() {
  return (
    <div>
      <div className="md:mx-20 my-3 space-y-5">
        <div>
          <p className="font-semibold">Business Goal and Product Vision</p>
          <p className="md:p-5 py-5">
            OperateEase, as a B2B SaaS cloud-based enterprise project, aims to
            revolutionize hotel management with scalability, user-friendly UI
            for room management (room rate + room status) and for catering
            services. Targeting a{" "}
            <span className="underline">20% stock-out reduction</span> and a{" "}
            <span className="underline">15% improvement</span> in turnover, it
            combined advanced forecasting with a minimalistic interface to
            address inefficiencies and improve user satisfaction.
          </p>
        </div>
        <div className="py-10 md:py-0">
          <p className="font-semibold">Outcome</p>
          <div className="flex-col grid-cols-2 my-10">
            <div className="text-3xl md:text-5xl flex items-center space-x-20 md:justify-center md:space-x-96">
              <p>80%</p>
              <p>90%</p>
            </div>
            <div className="flex items-center gap-5 text-sm md:mx-auto md:gap-0 md:space-x-48 md:justify-center my-3">
              <p>positive remarks in live updates</p>
              <p className="md:w-2/6">
                of users said that it is smooth and easy to adjust the rates
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
