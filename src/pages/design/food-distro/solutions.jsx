import { foodDistro } from "../../../utils/food-distro";

export default function Solutions() {
  return (
    <div>
      <h3 className="text-xl">SOLUTIONS</h3>
      <div className="md:mx-20 my-3 space-y-10">
        <div className="space-y-3">
          <p className="font-semibold">Solution 1</p>
          <p className="px-10">
            Donation-receivers can quickly look for available food givers around
            the area and get some detail on the item listing that the food giver
            has.
          </p>
          <div className="flex grid-cols-3 w-2/6">
            <img
              src={foodDistro.Search}
              alt="Final design for Search function"
              className="rounded-3xl"
            />
            <img
              src={foodDistro.Map}
              alt="Final design for Map"
              className="rounded-3xl"
            />
            <img
              src={foodDistro.Map2}
              alt="Final design for Map"
              className="rounded-3xl"
            />
          </div>
        </div>
        <div className="space-y-3">
          <p className="font-semibold">Solution 2</p>
          <p className="px-10">
            Both food-givers and donation-receivers can easily schedule a
            meet-up.
          </p>
          <div className="flex grid-cols-3 w-2/6">
            <img
              src={foodDistro.Request}
              alt="Final design for request"
              className="rounded-3xl"
            />
            <img
              src={foodDistro.Request2}
              alt="Final design for request"
              className="rounded-3xl"
            />
            <img
              src={foodDistro.Confirmation}
              alt="Final design for confirmation"
              className="rounded-3xl"
            />
          </div>
        </div>
        <div className="space-y-3">
          <p className="font-semibold">Solution 3</p>
          <p className="px-10">
            Donation-receivers can leave a review on the food-givers to alert
            other donation-receivers about the freshness and the reliability on
            the particular food-giver.
          </p>
          <div className="flex grid-cols-3 w-2/6">
            <img
              src={foodDistro.Review}
              alt="Final design for Review"
              className="rounded-3xl"
            />
            <img
              src={foodDistro.Review2}
              alt="Final design for Review2"
              className="rounded-3xl"
            />
            <img
              src={foodDistro.Report}
              alt="Final design for Report"
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
