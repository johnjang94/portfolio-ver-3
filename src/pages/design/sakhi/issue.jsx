export default function Issue() {
  return (
    <div className="space-y-5 py-5 md:mx-20">
      <h3 className="text-xl uppercase">At Issue</h3>
      <div className="md:mx-20 space-y-5">
        <p className="font-bold">What was the problem?</p>
        <p>
          The Sakhi&#39;s beta website, although offering premium Indian apparel
          and jewelry, suffered from an over-complex menu structure and long
          product names. This complexity made it{" "}
          <span className="text-red-500">difficult</span> for non-Indian users
          to quickly understand{" "}
          <span className="underline">
            the cultural value and differentiation of the products
          </span>
          , ultimately hindering engagement and obstructing a seamless shopping
          experience.
        </p>
      </div>
    </div>
  );
}
