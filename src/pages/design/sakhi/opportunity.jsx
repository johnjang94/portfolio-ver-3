export default function Opportunity() {
  return (
    <div>
      <h3 className="text-xl uppercase">Opportunity</h3>
      <p className="md:text-xl font-semibold text-center my-3">
        What strategy did The Sakhi choose?
      </p>
      <ul className="md:mx-20 my-5 space-y-5 list-decimal">
        <li>Friendliness</li>
        <p className="px-5">
          I walked through other brands with participants, whose ages range
          between 18 and 35 and reside in India, Canada, and the US, in
          interviews and they suggested that &#39;friendliness&#39; is defined
          by <span className="underline">clarity</span>, {""}
          <span className="underline">sufficient information</span>, and{" "}
          <span className="underline">effective guidance</span> that minimizes
          the need for support.
        </p>
        <p className="px-10 text-sm">
          For example, the shoppers are attracted to{" "}
          <span className="text-blue-500">clear and catchy names</span>,{" "}
          <span className="text-blue-500">visual detail of clothes</span>, or{" "}
          <span className="text-blue-500">description</span> of when to wear
          such clothes. It could be indeed a bonus if there was a short but
          clear explanation on the connection between the clothes and the
          holidays.
        </p>
        <li>Affordability</li>
        <p className="px-5">
          The Sakhi decided to enter the premium market with cheaper options
          while maintaining the similar or better quality of clothes or
          jewelries.
        </p>
        <li>Return Policy</li>
        <p className="px-5">
          Regardless of defectiveness, The Sakhi has decided to allow{" "}
          <span className="text-blue-500">the return policy of 14 days</span> as
          long as the product is well-maintained.
        </p>
        <li>The First Direct Store in Canada</li>
        <p className="px-5">
          Most of the established brands are all located in India or operates as
          an online store. The Sakhi is one of the first stores that opens in
          Canada, allowing the shoppers to try clothes in-store. In other words,
          The Sakhi takes care of imports directly from India and reduces the
          hassle of customs for any shopper who is interested in getting Indian
          premium clothes and jewelries.
        </p>
      </ul>
    </div>
  );
}
