import { OperateEase } from "../../../utils/operate";

export default function InitialSketch() {
  return (
    <div>
      <h3 className="text-xl uppercase">Initial Sketch</h3>
      <div className="md:mx-20 my-5 space-y-5 list-decimal">
        <p className="md:px-10">
          Having said that, I have pulled up my sleeves to help the design team
          (specifically focused on) for the inventory dashboard. I have decided
          to cover room availability, room rates, turnover ratio for the rooms,
          stock status for the packaged food and beverage, and showing the
          contacts for partner companies when stocks go low.
        </p>
        <p className="md:px-10">
          During my initial sketch, I was primarily focused on displaying the
          key metrics first because this allows the hoteliers, as users, to be
          able to quickly track the activities.
        </p>
        <p className="md:px-10">
          In addition, I considered technical aspects to ensure the data
          visualization method aligned seamlessly with the backend architecture
          and enhanced overall system efficiency during this process.
        </p>
        <div className="md:grid md:grid-cols-2 items-center gap-5 space-y-5 md:space-y-0">
          <div className="bg-slate-300 p-5 rounded-2xl">
            <img
              src={OperateEase.InitialDrawing}
              alt="Initial Sketch"
              className="rounded-2xl"
            />
          </div>
          <div className="bg-slate-300 p-5 rounded-2xl">
            <img
              src={OperateEase.Pricing}
              alt="Initial Sketch"
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
