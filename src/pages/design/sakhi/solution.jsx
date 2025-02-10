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
            <div className="flex items-center space-x-5">
              <p className="font-bold">Objective:</p>
              <p>
                Reduce cognitive load and guide users effortlessly through the
                platform
              </p>
            </div>
            <p className="font-bold">Approach:</p>
            <ul className="md:mx-24 space-y-5">
              <li>
                Redesigned the navigation menu based on UX research insights
                (i.e. usability testing)
              </li>
              <li>
                Developed key pages (home, product display, product detail) that
                clearly reflect the brand&#39;s identity while emphasizing
                simplicity
              </li>
            </ul>
          </ul>
          <div className="p-5 bg-white rounded-3xl mx-auto text-center space-y-3">
            <span>Original</span>
            <div className="overflow-hidden h-[100vh]">
              <img
                src={sakhi.OriginalHome}
                alt="Original home page"
                className="rounded-2xl object-top"
              />
            </div>
          </div>
          <div className="p-5 bg-white rounded-3xl mx-auto text-center space-y-3">
            <span>New Solution</span>
            <div className="overflow-hidden h-[200vh]">
              <img
                src={sakhi.Solution1}
                alt="New home page"
                className="rounded-2xl w-full"
              />
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <p className="font-semibold">Solution 2 | Friendly Visuals</p>
          <ul className="md:px-8 space-y-3">
            <div className="flex items-center space-x-5">
              <p className="font-bold">Objective:</p>
              <p>
                Enhance usability by creating a layout that is both inviting and
                easy to scan
              </p>
            </div>
            <p className="font-bold">Approach:</p>
            <ul className="space-y-5 md:mx-24">
              <li>
                Implemented an easy-to-follow layout that highlights product
                descriptions and contextual imagery
              </li>
              <li>
                Reinforced the cultural narrative through visual elements,
                enabling users to quickly connect with the brand story
              </li>
            </ul>
          </ul>
          <div className="p-5 bg-white rounded-3xl mx-auto text-center space-y-3">
            <span>New Solution</span>
            <div className="overflow-hidden">
              <img
                src={sakhi.NewProduct}
                alt="New Product"
                className="rounded-2xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
