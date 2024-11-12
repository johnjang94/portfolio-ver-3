import { sakhi } from "../../../utils/sakhi";

export default function CompetitiveAnalysis() {
  return (
    <div className="space-y-5 py-5">
      <p className="text-xl font-semibold text-center">
        What would make them come back and shop again?
      </p>
      <div className="md:mx-20 space-y-5">
        <p>
          We have decided to benchmark 7 brands that are currently
          well-established for The Sakhi:
        </p>
        <img
          src={sakhi.competition}
          alt="Competitive analysis"
          width={1000}
          className="rounded-2xl mx-auto"
        />
      </div>
    </div>
  );
}
