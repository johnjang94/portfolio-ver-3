import { foodDistro } from "../../../utils/food-distro";

export default function MockUpPrototype() {
  return (
    <div>
      <h3 className="text-xl uppercase">Mock-Up & Prototype</h3>
      <div className="md:mx-20 my-5 space-y-5 list-decimal">
        <img
          src={foodDistro.MockUp}
          alt="Mock Up"
          width={800}
          className="rounded-2xl"
        />
        <img
          src={foodDistro.Prototype}
          alt="Prototype"
          width={800}
          className="rounded-2xl"
        />
      </div>
    </div>
  );
}
