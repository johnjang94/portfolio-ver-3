export default function Overview() {
  return (
    <div>
      <h3 className="text-xl uppercase">Overview</h3>
      <div className="md:mx-20 my-3">
        <div>
          <p className="font-semibold">Problem</p>
          <div className="p-5 space-y-3">
            <p>
              Travelers often feel overwhelmed to explore insurance packages at
              TuGo Travel Insurance company due to{" "}
              <span className="text-red-500">confusing navigation</span> and{" "}
              <span className="text-red-500">a lack of clear information</span>.
              The process of selecting the right package is not only{" "}
              <span className="underline">time-consuming</span> but also{" "}
              <span className="text-red-500 underliner">frustrating</span>,
              leading to{" "}
              <span className="text-red-500">a higher drop-off rate</span>{" "}
              before purchase.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
