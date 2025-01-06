export default function Overview() {
  return (
    <div>
      <h3 className="text-xl">OVERVIEW</h3>
      <div className="md:mx-20 my-3 space-y-5">
        <div>
          <p className="font-semibold">At Issue</p>
          <p className="p-5">
            Hoteliers who used other management systems (PMS + CMS){" "}
            <span className="text-red-500">did not have flexibility</span> that
            meet their expectations{" "}
            <span className="underline">in rate adjustment</span> for booking
            and catering services faced{" "}
            <span className="text-red-500">
              the loss of potential additional income of 15%
            </span>{" "}
            of their monthly base income and{" "}
            <span className="text-red-500">inventory shortages</span> depending
            on the platform. To recover the loss, I designed new management
            dashboard for booking services with options for price adjustments
            and new management dashboard for catering services along with
            real-time updates and simplicity for both dashboards here at
            OperateEase, an independent SaaS project.
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
