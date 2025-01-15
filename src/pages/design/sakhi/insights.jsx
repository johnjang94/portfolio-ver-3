export default function Insight() {
  return (
    <div className="space-y-5">
      <h3 className="text-xl uppercase">Insight</h3>
      <div className="md:mx-20 space-y-5">
        <p className="font-semibold">
          The price range for the traditional clothing{" "}
          <span className="text-red-500">is not resonating</span> with shoppers.
        </p>
        <p className="px-10">
          <span className="text-red-500">65% of shoppers doubt</span> the
          products&#39; value, especially for one-time events like weddings or
          festivals at other brands.
        </p>
        <p className="font-semibold">
          Due to the challenges non-Indian shoppers face, they may{" "}
          <span className="text-red-500">mistakenly perceive</span> Indian
          products as unfriendly.
        </p>
        <p className="px-10">
          <span className="text-red-500">70% of non-Indian shoppers</span> found
          the journey of exploring Indian brands interesting but still felt{" "}
          <span className="text-red-500">lost or overwhelmed, unsure</span> of
          what they were getting
        </p>
      </div>
    </div>
  );
}
