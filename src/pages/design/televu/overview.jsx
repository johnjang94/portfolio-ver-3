export default function Overview() {
  return (
    <div>
      <h3 className="text-xl uppercase">Overview</h3>
      <div className="md:mx-20 my-3 space-y-5">
        <div>
          <p className="font-semibold">At Issue</p>
          <p className="px-8 py-5">
            TeleVU was created during the COVID-19 era to alleviate the burden
            of travel for doctors and patients by providing a video-call
            solution for remote medical consultations. While the platform aimed
            to simplify healthcare delivery,{" "}
            <span className="text-red-500">65% of users</span> reported{" "}
            <span className="text-red-500">
              difficulties navigating the interface
            </span>
            , and many{" "}
            <span className="text-red-500">missed critical notifications</span>{" "}
            due to the system&#39;s inefficiencies. These usability challenges
            not only disrupted seamless medical sessions but also led to a{" "}
            <span className="text-red-500">
              30% decrease in service engagement
            </span>{" "}
            and <span className="underline">growing dissatisfaction</span> among
            both clinicians and patients. This highlighted an urgent need for
            targeted design improvements to make the platform more user-friendly
            and effective.
          </p>
        </div>
        <div>
          <p className="font-semibold">Outcome</p>
          <p className="px-8 py-5">
            TeleVU Innovation resolved these issues with targeted updates:
          </p>
          <ul className="space-y-3 mx-10">
            <li>
              <span className="text-blue-500">simplified notifications</span> to
              make call statuses <span className="underline">clearer</span>.
            </li>
            <li>
              <span className="text-blue-500">separated</span> video sharing and
              personal screen controls to{" "}
              <span className="underline">reduce confusion.</span>
            </li>
            <li>
              optimized smart glasses navigation to meet industry standards.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
