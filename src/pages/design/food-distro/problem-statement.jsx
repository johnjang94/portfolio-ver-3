import { foodDistro } from "../../../utils/food-distro";

export default function ProblemStatement() {
  return (
    <div>
      <p className="text-xl text-center mt-5 text-red-500">
        OKAY?
        <br />
        How come was the rate of food waste so high?
      </p>
      <div className="md:mx-20 my-5">
        <p>
          Young generation tends to over-purchase food items and ends-up
          throwing away relatively more food to the trash compared to the older
          generations. In fact, they could be one of the main contributors to{" "}
          <span className="text-red-500">37.2% of all the waste</span>, which
          comes from the households.
        </p>
        <img
          src={foodDistro.FoodWaste}
          alt="Food Waste"
          width={900}
          className="my-5 rounded-3xl"
        />
        <p>
          Fun fact is that, despite the high rate of food waste, they were aware
          that the food waste is not good. It is only that they{" "}
          <span className="text-red-500">were not aware of</span>{" "}
          <span className="underline">
            how to handle the food waste properly
          </span>
          .
        </p>
        <img
          src={foodDistro.Barriers}
          alt="Food Waste"
          width={900}
          className="my-5 rounded-3xl"
        />
      </div>
    </div>
  );
}
