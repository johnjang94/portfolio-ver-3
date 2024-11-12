export default function Opportunity() {
  return (
    <div>
      <h3 className="text-xl uppercase">Opportunity</h3>
      <ul className="md:mx-20 my-5 space-y-5 list-decimal">
        <li>Friendliness</li>
        <p className="px-5">
          Research suggests that &#39;friendliness&#39; is defined by{" "}
          <span className="underline">clarity</span>, {""}
          <span className="underline">sufficient information</span>, and{" "}
          <span className="underline">effective guidance</span> that minimizes
          the need for support. For example, the shoppers are attracted to{" "}
          <span className="text-blue-500">clear and catchy names</span>,{" "}
          <span className="text-blue-500">visual detail of clothes</span>, or{" "}
          <span className="text-blue-500">description</span> of when to wear
          such clothes. It could be indeed a bonus if there was a short but
          clear explanation on the connection between the clothes and the
          holidays.
        </p>
        <li>Affordability</li>
        <p className="px-5">
          We aimed to balance the premium cost with broader appeal, adjusting
          the price to feel fair to more shoppers.
        </p>
      </ul>
    </div>
  );
}
