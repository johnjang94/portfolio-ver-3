export default function Retrospective() {
  return (
    <div>
      <h3 className="text-xl uppercase">Looking back...</h3>
      <div className="md:mx-20 my-3 space-y-5">
        <p className="font-semibold">
          My love for travel motivated me to join this project, but I hadn&#39;t
          realized how daunting signing up for insurance could be, despite its
          potential benefits.
        </p>
        <ul className="px-5 space-y-3">
          <li className="text-blue-500">
            Best Lesson 1 | Simplistic designs could be engaging
          </li>
          <p className="px-5">
            I had this crazy urge to revamp the entire web application. Though,
            it turns out that the value of redesign could be equivalent to the
            existing design unless you have clearly identified the MVP.
          </p>
          <li className="text-blue-500">
            Best Lesson 2 | Business is business
          </li>
          <p className="px-5">
            No matter how great a design comes out, if it does not lead into
            sales, it may be difficult to say that the new design is practically
            a valuable (or useful) design.
          </p>
        </ul>
      </div>
    </div>
  );
}
