import { OperateEase } from "../../../utils/operate";

export default function Solutions() {
  return (
    <div>
      <div className="md:mx-20 space-y-5 -mt-36 md:-mt-0">
        <p className="font-bold">Solution 1 | Minimalistic Design</p>
        <p className="md:px-10">
          I have designed a specialized dashboard that is simple and focused on
          the turnover for the rooms and room rates, as well as food /
          beverages. Users can also check how much profit is being generated
          every quarter.
        </p>
        <div className="gap-5 space-y-5 bg-slate-300 rounded-3xl p-5">
          <img
            src={OperateEase.Occupancy}
            alt="Room occupancy dashboard sketch"
            className="mx-auto rounded-2xl"
          />
          <img
            src={OperateEase.Food}
            alt="Food dashboard sketch"
            className="mx-auto rounded-2xl"
          />
        </div>
        <p className="font-bold">
          Solution 2 | Display of Essential Information
        </p>
        <p className="md:px-10">
          In addition to the first solution, I have designed additional screens
          to help the users understand the detail of total expenses that they
          spend to keep up with operation.
        </p>
        <div className="bg-slate-300 rounded-3xl space-y-5 p-5">
          <img
            src={OperateEase.Cost}
            width={800}
            alt="Cost on Goods Sold"
            className="rounded-2xl"
          />
          <img
            src={OperateEase.Room}
            width={800}
            alt="Room"
            className="rounded-2xl"
          />
          <img
            src={OperateEase.Statistics}
            width={800}
            alt="Statistics"
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
