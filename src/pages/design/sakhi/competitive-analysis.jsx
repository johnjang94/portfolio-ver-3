import { sakhi } from "../../../utils/sakhi";

export default function CompetitiveAnalysis() {
  return (
    <div className="space-y-5 py-5">
      <h3 className="text-xl uppercase">Insight</h3>
      <div className="md:mx-20 space-y-5">
        <p>Along with my colleagues, I found out the following facts:</p>
        <ul className="list-disc md:mx-14 mx-5 space-y-3">
          <li>
            As of 2023,{" "}
            <span className="text-blue-400">
              80% of the established Indian brands
            </span>{" "}
            have the revenue of CAD $270M
          </li>
          <li>
            At the same time, Western brands such as Dior and Gucci have
            increased their revenue to CAD $121B and CAD $13.9B respectively
          </li>
          <li>
            Indian brands have the average growth rate for the revenue among
            these brands is approximately{" "}
            <span className="text-blue-500">27%</span>
          </li>
          <li>
            Among Indian brands, none of them had headquarters here in Canada.
            All of them were reaching out to Canadians under business
            affiliations with third-party stores in Canada
          </li>
        </ul>
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
