export default function DataMetrics() {
  return (
    <div className="space-y-5">
      <h3 className="text-xl uppercase">Data & Metrics</h3>
      <div className="md:mx-20 space-y-5">
        <p className="font-semibold">Understanding the User Experience</p>
        <p className="px-10">
          Finding <span className="underline">the right insurance package</span>{" "}
          is <span className="text-blue-500">a huge relief</span> to many
          travelers.
        </p>
        <ul className="px-14 space-y-3 list-disc">
          <li>
            <span className="text-red-500">65% struggles</span> to find the
            appropriate package for themselves
          </li>
          <li>
            <span className="text-red-500">30% does not think</span> that the
            qualify of package matches the value of the price
          </li>
          <li>
            5% thinks that the brokerage{" "}
            <span className="text-red-500">needs a better service</span> (even
            for the customer service)
          </li>
        </ul>
      </div>
    </div>
  );
}
