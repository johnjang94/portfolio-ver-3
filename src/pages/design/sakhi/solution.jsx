import { sakhi } from "../../../utils/sakhi";

export default function Solutions() {
  return (
    <div>
      <div className="md:mx-20 my-3 space-y-10">
        <div className="space-y-3">
          <p className="font-semibold">
            Solution 1 | Simplification across the platform
          </p>
          <ul className="md:px-10 space-y-3">
            <p>
              I designed a simple navigation menu and created a few pages
              including home page, product-display page, product detail, etc.
              that reflect the brand&#39;s identity.
            </p>
          </ul>
          <div className="p-5 bg-white rounded-3xl mx-auto">
            <img
              src={sakhi.Solution1}
              alt="Re-imagined home page"
              className="rounded-2xl"
            />
          </div>
          <div className="p-5 bg-white rounded-3xl mx-auto">
            <img
              src={sakhi.NavigationSolution}
              alt="Navigation on home page"
              className="rounded-2xl"
            />
          </div>
        </div>
        <div className="space-y-3">
          <p className="font-semibold">Solution 2 | Friendly Visuals</p>
          <p className="md:px-10">
            I implemented an easy-to-follow layout for the shoppers to scan and
            read briefly.
          </p>
          <div className="bg-white rounded-3xl mx-auto">
            <img
              src={sakhi.Solution2}
              alt="Re-imagined home page"
              className="rounded-2xl w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
