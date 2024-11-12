import { OperateEase } from "../../../utils/operate";

export default function InitialSketch() {
  return (
    <div>
      <h3 className="text-xl uppercase">Initial Sketch</h3>
      <div className="md:mx-20 my-5 space-y-5 list-decimal">
        <p className="px-10">
          During my initial sketch, I was primarily focused on displaying the
          key metrics first because this allows the hoteliers, as users, to be
          able to quickly track the activities.
        </p>
        <div className="md:grid md:grid-cols-2 items-center gap-5">
          <img
            src={OperateEase.InitialDrawing}
            alt="Initial Sketch"
            width={500}
            className="rounded-2xl"
          />
          <img
            src={OperateEase.Pricing}
            alt="Initial Sketch"
            width={500}
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
