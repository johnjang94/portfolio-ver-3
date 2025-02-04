import { sakhi } from "../../../utils/sakhi";

export default function InitialSketch() {
  return (
    <div className="space-y-5 py-5 md:mx-20">
      <h3 className="text-xl uppercase">Sketch</h3>
      <p className="md:text-xl font-semibold text-center my-3">
        How do you attract the eyes?
      </p>
      <div className="md:mx-20 my-5 space-y-5">
        <p>
          The stakeholders, the colleagues, and I came to an agreement that The
          Sakhi needs an attractive website to increase the traffic and to be
          spotted. To make sure that the design is clear and intuitive, I came
          up with three different types of sketches for different pages.
        </p>
        <p>
          One of the examples is home page. The idea is that the shoppers are
          supposed to understand that they will either a&#41; be redirected to
          view the detail of a certain product or b&#41; be directed to a
          collection page that shows all kinds of products in one specific
          category. Some examples are shown as below:
        </p>
      </div>
      <div className="md:mx-20 md:grid md:grid-cols-3 md:gap-5 space-y-5 md:space-y-0">
        <div className="p-5 bg-white rounded-2xl">
          <img
            src={sakhi.HomeVersionOne}
            alt="Home Version 1"
            className="rounded-2xl mx-auto"
          />
        </div>
        <div className="p-5 bg-white rounded-2xl">
          <img
            src={sakhi.HomeVersionTwo}
            alt="Home Version 1"
            className="rounded-2xl mx-auto"
          />
        </div>
        <div className="p-5 bg-white rounded-2xl">
          <img
            src={sakhi.HomeVersionThree}
            alt="Home Version 1"
            className="rounded-2xl mx-auto"
          />
        </div>
      </div>
      <div className="md:mx-20 my-5 space-y-5">
        <p>
          While taking the input from the stakeholder, I also worked on
          navigation component in a separate component, trying to think how I
          can come up with a simple menu that has consistency in categorization
          and being relevant to the products.
        </p>
        <div className="md:grid md:grid-cols-2 md:gap-5 space-y-5 md:space-y-0">
          <div className="p-5 bg-white rounded-2xl">
            <img
              src={sakhi.Stakeholder}
              alt="Stakeholder"
              className="rounded-2xl mx-auto"
            />
          </div>
          <div className="p-5 bg-white rounded-2xl">
            <img
              src={sakhi.Navigation}
              alt="Navigation"
              className="rounded-2xl mx-auto"
            />
          </div>
          <div className="p-5 bg-white rounded-2xl">
            <img
              src={sakhi.Navigation2}
              alt="Navigation 2"
              className="rounded-2xl mx-auto"
            />
          </div>
          <div className="p-5 bg-white rounded-2xl">
            <img
              src={sakhi.Navigation3}
              alt="Navigation 3"
              className="rounded-2xl mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
