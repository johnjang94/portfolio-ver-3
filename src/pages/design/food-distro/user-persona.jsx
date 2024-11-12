import { foodDistro } from "../../../utils/food-distro";

export default function UserPersona() {
  return (
    <div className="space-y-5">
      <p className="text-xl my-5 md:mx-20 text-red-500">
        What is stopping them?
      </p>
      <div className="md:mx-20 space-y-5">
        <div className="space-y-3">
          <p>
            To specifically find out what they need, we have decided to talk to
            them directly and realized that they were facing the same problem
            whether they were food-givers or donation-receivers:
          </p>
          <p className="text-red-500 text-center py-10 text-2xl">
            It is challenging to reach out.
          </p>
          <img
            src={foodDistro.FoodGiver}
            width={900}
            alt="Food Giver"
            className="text-3xl rounded-3xl"
          />
          <img
            src={foodDistro.FoodTaker}
            width={900}
            alt="Food Taker"
            className="text-3xl rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}
