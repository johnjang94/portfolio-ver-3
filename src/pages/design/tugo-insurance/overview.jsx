export default function Overview() {
  return (
    <div>
      <h3 className="text-xl uppercase">Overview</h3>
      <div className="md:mx-20 my-3">
        <div>
          <p className="font-semibold">Problem</p>
          <div className="p-5 space-y-3">
            <p>
              Travellers who are looking for a travel coverage find the
              insurance products from TuGo Travel{" "}
              <span className="text-red-500">not very comprehensive</span>{" "}
              because...
            </p>
            <ul className="space-y-3 list-disc mx-5">
              <li>
                navigation is <span className="text-red-500">confusing</span>
              </li>
              <li>
                the process to buy an insurance is{" "}
                <span className="text-red-500">overwhelming</span>
              </li>
            </ul>
            <p>
              In this project, I have learned that{" "}
              <span className="underline">TuGo Travel</span> as an insurance
              company intends to reduce the stress of documentation by offering
              competitive packages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
