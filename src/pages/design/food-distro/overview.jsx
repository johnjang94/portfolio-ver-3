export default function Overview() {
  return (
    <div>
      <h3 className="text-xl">OVERVIEW</h3>
      <div className="md:mx-20 my-3">
        <div>
          <p className="font-semibold">At Issue</p>
          <p className="p-5">
            Research indicates that{" "}
            <span className="text-red-500">
              roughly 1.3 billion tons of food
            </span>{" "}
            (which is about 1/3 of all kinds of food that is produced) is{" "}
            <span className="text-red-500">wasted every year</span>. In terms of
            budget, 1.3 billion tons is equivalent to the value of approximately{" "}
            <span className="underline">USD $1 trillion</span>, which is enough
            to feed about 3 billion people.
          </p>
          <p className="px-5">
            In this project, <span className="underline">Food Distro</span>, the
            state government intends to promote food donations among locals and
            reduce the pollution, caused due to the food waste, as well as
            lowering the additional tax to process the waste.
          </p>
          <p className="p-5">
            Please note that this project is currently{" "}
            <span className="underline">on-going</span> and I have participated
            as a UX Designer for a phase.
          </p>
        </div>
        <div>
          <p className="font-semibold pt-5">Outcome</p>
          <div className="space-y-3 py-3">
            <p className="px-5">
              From the usability testing,{" "}
              <span className="text-blue-500">16 out of 18 participants</span>{" "}
              were able to{" "}
              <span className="text-blue-500">
                successfully use the filter function
              </span>{" "}
              and be able to see a smaller list of providers on the map.
            </p>
            <p className="px-5">
              The participants were{" "}
              <span className="text-blue-500">able to check</span> the distance
              from their location.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
