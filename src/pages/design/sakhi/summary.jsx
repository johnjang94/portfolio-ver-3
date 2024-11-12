export default function Summary() {
  return (
    <div>
      <h3 className="text-xl uppercase">Summary</h3>
      <div className="md:mx-20 my-3 space-y-5">
        <div>
          <p className="font-semibold">At Issue</p>
          <p className="p-5">
            70% shoppers who visit online shopping platforms such as Zara,
            Prada, H&M, etc. {""}
            <span className="text-red-500">do not</span> find Indian platforms
            as friendly.
          </p>
          <div className="px-8 space-y-3">
            <p>
              Problem 1 | Navigation is{" "}
              <span className="text-red-500">overwhelming</span>
            </p>
            <p>
              Problem 2 | It is hard to catch up with all the holidays in
              connection to the clothes
            </p>
          </div>
        </div>
        <div>
          <p className="font-semibold">Outcome</p>
          <p className="px-8 py-5">
            We have reached <span className="text-blue-500">3.5% CTR</span>{" "}
            during the pilot phase.
          </p>
        </div>
      </div>
    </div>
  );
}
