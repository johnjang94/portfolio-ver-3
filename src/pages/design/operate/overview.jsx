export default function Overview() {
  return (
    <div>
      <h3 className="text-xl">OVERVIEW</h3>
      <div className="md:mx-20 my-3 space-y-5">
        <div>
          <p className="font-semibold">At Issue</p>
          <p className="p-5">
            Many hotelier managers find the existing inventory management from
            other brands{" "}
            <span className="text-red-500">difficult to control</span>.
          </p>
          <div className="px-8 space-y-3">
            <p>
              Problem 1 | Navigation is{" "}
              <span className="text-red-500">not straight-forward</span>
            </p>
            <p>
              Problem 2 | Suspected irrelevant content{" "}
              <span className="text-red-500">slows</span> users
            </p>
          </div>
          <p className="p-5">
            In this project, <span className="underline">OperateEase</span>, as
            a SaaS project intends to simplify the workflow of the operation.
          </p>
        </div>
        <div>
          <p className="font-semibold">Outcome</p>
          <p className="px-8 py-5">
            <span className="underline">3 out of 5 participants</span> were{" "}
            <span className="text-blue-500">optimistic</span> with new content
            displays.
          </p>
        </div>
      </div>
    </div>
  );
}
