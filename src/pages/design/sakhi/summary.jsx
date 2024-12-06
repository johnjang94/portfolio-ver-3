export default function Summary() {
  return (
    <div>
      <div className="md:mx-20 my-3 space-y-5">
        <div>
          <p className="font-semibold">At Issue</p>
          <p className="p-5">
            70% shoppers who visit online shopping platforms such as Zara,
            Prada, H&M, etc. {""}
            <span className="text-red-500">do not</span> find Indian platforms
            as friendly because...
          </p>
          <div className="px-8 space-y-3">
            <p>
              Cause 1 | There are{" "}
              <span className="text-red-500">too many menus</span> in navigation
            </p>
            <p>
              Cause 2 | It is{" "}
              <span className="text-red-500">yet difficult</span> to make a
              connection between holidays and different types of clothes for
              most shoppers
            </p>
          </div>
        </div>
        <div>
          <p className="font-semibold">Outcome</p>
          <p className="px-8 py-5">
            After we focused on onboarding experience and product detail page,
            we have reached <span className="text-blue-500">3.5% CTR</span>{" "}
            during the pilot phase.
          </p>
        </div>
      </div>
    </div>
  );
}
