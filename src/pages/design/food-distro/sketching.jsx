import { foodDistro } from "../../../utils/food-distro";

export default function Sketching() {
  return (
    <div>
      <h3 className="text-xl uppercase">Sketching</h3>
      <div className="md:mx-20 my-5 space-y-5">
        <div>
          <p>
            Out of all possible new solutions, I have stepped up to come up with
            a new search functionality.
          </p>
          <p>For this, I focused on three core features:</p>
        </div>
        <ul className="px-10 list-disc space-y-5">
          <li>Distance</li>
          <p className="px-5">
            I have designed the ranges of distance in 20 miles of radius.
          </p>
          <li>Filter</li>
          <p className="px-5">
            I have provided the users the ability to select and filter different
            types of food givers, different types of food categories, etc.
          </p>
          <li>Exploration</li>
          <p className="px-5">
            Inspired by Google Maps, I have indicated any available local food
            givers on the map as long as they were under the radar.
          </p>
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-10">
        <img
          src={foodDistro.Filter}
          width={900}
          alt="Filter"
          className="text-3xl rounded-3xl"
        />
        <img
          src={foodDistro.Rating}
          width={900}
          alt="Rating"
          className="text-3xl rounded-3xl"
        />
      </div>
    </div>
  );
}
