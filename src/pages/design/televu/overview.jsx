export default function Overview() {
  return (
    <div>
      <h3 className="text-xl uppercase">Overview</h3>
      <div className="md:mx-20 my-3 space-y-5">
        <div>
          <p className="font-semibold">At Issue</p>
          <div className="px-8 space-y-3 py-5">
            <p>
              Problem 1 | Navigation is{" "}
              <span className="text-red-500">not straight-forward</span>
            </p>
            <p>
              Problem 2 | The platform is{" "}
              <span className="text-red-500">not interactive</span> with
              clinicians or patients in general
            </p>
          </div>
        </div>
        <div>
          <p className="font-semibold">Outcome</p>
          <p className="px-8 py-5">
            <span className="text-blue-500">80% </span>of participants have been
            able to successfully use the video call, increasing the duration of
            the call by <span className="text-blue-500">60%</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
