export default function Opportunity() {
  return (
    <div>
      <h3 className="text-xl uppercase">Opportunity</h3>
      <ul className="md:mx-20 my-5 space-y-5">
        <li className="font-bold">Simplification</li>
        <p className="px-10">
          After the tutorial from Pet Pooja (as shown above), I rather ended up
          having some doubts such as...
        </p>
        <p className="px-18 py-3 text-red-500">
          If the design was straight-forward and intuitive, would the tutorial
          have been necessary at all?
        </p>
        <div className="space-y-3">
          <p className="px-10 font-semibold">
            Possible Improvement 1 | Display only the essential information
          </p>
          <p className="px-20">
            From the research process, we learned that the users want to be able
            to <span className="underline">manage room prices</span>, check on{" "}
            <span className="underline">
              the ratio of room availability vs occupied
            </span>
            , and <span className="underline">the record of sales</span> on
            quarterly-basis (as the primary option) for hotel room management
          </p>
          <p className="px-20">
            When it comes to the food / beverage inventory management, we found
            out that they want to be{" "}
            <span className="underline">automatically notified</span> on
            low-stocks, ability to{" "}
            <span className="underline">contact the partner business</span>, and{" "}
            <span className="underline">adjust</span> the selling products{" "}
            <span className="underline">based on the conversion rate</span>
          </p>
          <p className="px-10 font-semibold">
            Possible Improvement 2 | Keep the minimalistic design
          </p>
          <p className="px-20">
            I thought of grid system while utilizing white spaces as much as I
            can. In addition, I wanted to keep everything accessible with just
            <span className="underline">one simple-click</span> from the
            dashboard because I was keeping in mind that this is a fast-paced
            working environment
          </p>
        </div>
      </ul>
    </div>
  );
}
