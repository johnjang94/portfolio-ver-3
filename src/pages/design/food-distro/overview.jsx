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
        </div>
        <div>
          <p className="font-semibold pt-5">Outcome</p>
          <div className="flex items-end">
            <p className="px-5 py-6">
              During the pilot phase, the application has shown the potential to
              match individuals <span className="text-blue-500">up to 30%</span>{" "}
              to encourage the food donations to reduce the amount of food
              waste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
