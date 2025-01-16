import { OperateEase } from "../../../utils/operate";

export default function MarketAnalysis() {
  return (
    <div className="space-y-5">
      <h3 className="text-xl uppercase">Market Analysis</h3>
      <div className="md:mx-24 my-5 space-y-3">
        <p>
          Market research revealed{" "}
          <span className="text-blue-500">steady annual growth of 18.16%</span>{" "}
          among leading hotel management platforms, driven by cloud-based
          operations and third-party integrations. This insight shaped
          OperateEase&#39;s strategic focus on offering{" "}
          <span className="underline">
            modular, subscription-based services
          </span>{" "}
          that could scale with the user&#39;s needs, creating a competitive
          advantage in the market.
        </p>
        <img
          src={OperateEase.Market}
          alt="Market Analysis"
          className="rounded-2xl"
        />
      </div>
    </div>
  );
}
