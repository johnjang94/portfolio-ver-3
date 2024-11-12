import { sakhi } from "../../../utils/sakhi";

export default function Solutions() {
  return (
    <div>
      <h3 className="text-xl uppercase">Solution</h3>
      <div className="md:mx-20 my-3 space-y-10">
        <div className="space-y-3">
          <p className="font-semibold">Iteration 1 | Re-imagined Elegance</p>
          <ul className="px-10 space-y-3">
            <p>
              We simplified navigation menu and created a few pages including
              home page, product-display page, product detail, etc. that reflect
              the brand&#39;s colors.
            </p>
          </ul>
          <div className="p-3 bg-white rounded-3xl w-fit mx-auto space-y-5">
            <img
              src={sakhi.Solution1}
              alt="Re-imagined home page"
              width={800}
            />
            <img
              src={sakhi.NavigationSolution}
              alt="Navigation on home page"
              width={800}
              className="rounded-2xl"
            />
          </div>
        </div>
        <div className="space-y-3">
          <p className="font-semibold">Iteration 2 | Friendly Visuals</p>
          <p className="px-10">
            Since we are inviting shoppers unfamiliar with Indian products as
            well, we tried to implement simple layouts that is easy-to-follow.
          </p>
          <div className="p-3 bg-white rounded-3xl w-fit mx-auto">
            <img src={sakhi.Solution2} alt="Re-imagined home page" />
          </div>
        </div>
      </div>
    </div>
  );
}
