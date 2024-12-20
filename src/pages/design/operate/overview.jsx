export default function Overview() {
  return (
    <div>
      <h3 className="text-xl">OVERVIEW</h3>
      <div className="md:mx-20 my-3 space-y-5">
        <div>
          <p className="font-semibold">At Issue</p>
          <p className="p-5">
            Hoteliers <span className="text-red-500">missed</span>{" "}
            <span className="underline">real-time updates</span>, leading to{" "}
            <span className="text-red-500">booking errors</span> and{" "}
            <span className="text-red-500">inventory shortages</span>. To
            address this, I designed a dashboard with real-time updates and
            notifications here in OperateEase.
          </p>
        </div>
        <div>
          <p className="font-semibold">Outcome</p>
          <p className="px-8 py-5">
            During the first round of usability testing, participating hoteliers
            successfully:
          </p>
          <ul className="space-y-3 mx-12 list-disc">
            <li>
              Checked reports for budgets, room rates, and catering services.
            </li>
            <li>Adjusted room rates effortlessly.</li>
            <li>
              Located partner business contacts and understood how to
              communicate with representatives.
            </li>
            <li>
              Learned how to manually process check-ins and check-outs when
              needed.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
