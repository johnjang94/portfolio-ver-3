import { foodDistro } from "../../../utils/food-distro";

export default function Sketching() {
  return (
    <div>
      <h3 className="text-xl uppercase">Sketching</h3>
      <div className="md:mx-20 my-5 space-y-5">
        <div>
          <p>
            After a few rounds of surveys and interviews, my colleagues and I
            have come up with a few different solutions. I have stepped up to
            come up with a new search functionality.
          </p>
          <p>For this, I focused on three core features:</p>
        </div>
        <ul className="px-10 list-disc space-y-5">
          <li>Distance</li>
          <p className="px-5">
            I have designed the ranges of distance in 20 miles of radius. This
            feature helps residents to quickly identify local sources, saving
            them time and improving efficiency in the donation process.
          </p>
          <li>Filter</li>
          <p className="px-5">
            I implemented a filtering system to help the residents to narrow
            down their search by food types (i.e. perishable, non-perishable),
            food categories (i.e. grains, fruits), and the type of food giver
            (i.e. local restaurants, grocery stores). This helps the residents
            to quickly find donations that match their specific needs, whether
            they are looking for fresh produce from local restaurants or
            long-lasting items like grains.
          </p>
          <li>Exploration</li>
          <p className="px-5">
            Inspired by Google Maps, I integrated a map feature that shows
            available local food givers. Residents can easily explore options in
            real-time, ensuring they have access to a wide variety of sources
            under the radar, increasing both convenience and the likelihood of
            successful donations.
          </p>
        </ul>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-10 space-y-5 md:space-y-0">
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
