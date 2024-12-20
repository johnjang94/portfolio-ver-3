import { foodDistro } from "../../../utils/food-distro";

export default function CompetitiveAnalysis() {
  return (
    <div>
      <h3 className="text-xl uppercase">Competitive Analysis</h3>
      <div className="md:mx-20 my-5 space-y-5">
        <p>
          We have compared about four different existing platforms and came to
          realize that...
        </p>
        <ul className="text-red-500 list-disc space-y-3 mx-3">
          <li>not every platform has verified users</li>
          <li>not every platform has a strengthened security system</li>
          <li>not every platform offers an easy solution for arrangements</li>
        </ul>
        <img
          src={foodDistro.CompetitiveAnalysis}
          alt="Competitive analysis"
          width={900}
          className="text-3xl rounded-3xl"
        />
      </div>
    </div>
  );
}
