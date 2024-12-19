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
            In this SaaS project, <span className="underline">OperateEase</span>
            , intends to simplify the workflow of the operation.
          </p>
        </div>
        <div>
          <p className="font-semibold">Outcome</p>
          <p className="px-8 py-5">
            In the first round of usability testing, the participated hoteliers
            have been able to carry out the following tasks:
          </p>
          <ul className="space-y-3 mx-10 list-disc">
            <li>
              checked reports for the budget, room rates, catering services,
              etc.
            </li>
            <li>adjusted the room rates</li>
            <li>
              found the partner business contacts and understood how to reach
              out to the representatives
            </li>
            <li>
              understood how to manually check-in and check-out if necessary
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
