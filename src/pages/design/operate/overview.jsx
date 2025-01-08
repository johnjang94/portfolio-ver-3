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
            OperateEase, an independent B2B SaaS project.
          </p>
        </div>
        <div>
          <p className="font-semibold">Outcome</p>
          <div className="px-8 mt-10 py-5 flex items-center text-3xl justify-center space-x-64">
            <p>80%</p>
            <p>90%</p>
          </div>
          <div className="px-8 flex items-center mx-24 space-x-52 text-sm">
            <p className="md:ml-20">positive remarks in live updates</p>
            <p>of users said that it is smooth and easy to adjust the rates</p>
          </div>
        </div>
      </div>
    </div>
  );
}
