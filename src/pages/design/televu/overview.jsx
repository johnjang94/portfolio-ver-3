import { televu } from "../../../utils/televu";

export default function Overview() {
  return (
    <div>
      <h3 className="text-xl uppercase">Overview</h3>
      <div className="md:mx-20 mt-3 space-y-5">
        <div>
          <p className="font-semibold">At Issue</p>
          <p className="px-8 py-5">
            TeleVU, created to simplify remote medical consultations during
            COVID-19, faces{" "}
            <span className="text-red-500">usability issues</span>, with{" "}
            <span className="text-red-500">65%</span> of users{" "}
            <span className="underline">struggling with navigation</span> and{" "}
            <span className="underline">missed notifications</span>, leading to{" "}
            <span className="text-red-500">
              reduced engagement and dissatisfaction
            </span>
            .
          </p>
          <div className="space-y-5 text-center">
            <div>
              <span>Previous video-call screen design</span>
              <img
                src={televu.VIDEO}
                alt="Original Video"
                width={1200}
                className="mx-auto rounded-2xl"
              />
            </div>
            <div className="text-center">
              <span>Previous contact list design</span>
              <img
                src={televu.CONTACT}
                alt="Original contact list"
                className="mx-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
        <div>
          <p className="font-semibold">Outcome</p>
          <p className="px-8 pt-5">
            Clear navigation distinctions improved usability and reduced
            confusion for medical professionals across devices
          </p>
        </div>
      </div>
    </div>
  );
}
