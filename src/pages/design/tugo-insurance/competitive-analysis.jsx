import { tugoInsurance } from "../../../utils/tugo-insurance";

export default function CompetitiveAnalysis() {
  return (
    <div>
      <h3 className="text-xl uppercase">Competitive Analysis</h3>
      <div className="md:mx-20 my-5 space-y-5">
        <p className="font-semibold">
          Examining three of our competitors, it was easy to note that:
        </p>
        <ul className="px-10 space-y-3">
          <li>Information was well-outlined</li>
          <p className="px-5">simple visuals were catchy</p>
          <li>
            TuGo Travel Insurance was the only brokerage with complicated steps
          </li>
          <p className="px-5">
            no other insurance makes the users to identify province or choose a
            partner insurance
          </p>
        </ul>
        <img
          src={tugoInsurance.CompetitiveAnalysis}
          alt="Competitive analysis"
          width={900}
          className="text-3xl rounded-3xl"
        />
      </div>
    </div>
  );
}
