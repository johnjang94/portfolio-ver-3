import { OperateEase } from "../../../utils/operate";

export default function MarketAnalysis() {
  return (
    <div className="space-y-5">
      <h3 className="text-xl uppercase">Market Analysis</h3>
      <div className="md:mx-24 my-5 space-y-3">
        <p>
          I conducted a general investigation on the revenue growth of a few
          established hotel management platforms and found out that they grew up
          approximately <span className="text-blue-500">18.16%</span> in average
          every year for the past 5 years.
        </p>
        <img
          src={OperateEase.Market}
          alt="Market Analysis"
          className="rounded-2xl"
        />
        <p>
          During the research, I have discovered that many of them had diverse
          business affiliations with third-party platforms and some of them were
          even operating 100% cloud-based.
        </p>
      </div>
    </div>
  );
}
