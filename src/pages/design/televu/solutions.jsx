import { televu } from "../../../utils/televu";

export default function Solutions() {
  return (
    <div>
      <div className="md:mx-20 space-y-10 -mt-16">
        <div className="space-y-3">
          <p className="px-8 font-semibold">
            Solution 1 | Navigation menu relocation
          </p>
          <p className="px-8">
            Redesigned navigation with distinct visual cues for mobile and
            desktop controls, ensuring clarity and intuitive use.
          </p>
          <div className="p-3 bg-white rounded-3xl">
            <img
              src={televu.Video}
              alt="Final design for new video-call page"
              className="text-3xl rounded-2xl"
            />
          </div>
        </div>
        <div className="space-y-3">
          <p className="px-8 font-semibold">
            Solution 2 | Improved Interaction
          </p>
          <p className="px-8">
            I updated the UI to clearly indicate contacts that are available for
            calls and added a notification to inform users when a call is
            initiated after clicking the call CTA
          </p>
          <div className="p-3 bg-white rounded-3xl">
            <img
              src={televu.Call}
              alt="Final design for new calling list page"
              className="text-3xl rounded-2xl"
            />
          </div>
          <div className="p-3 bg-white rounded-3xl">
            <img
              src={televu.Initiated}
              alt="Final design for calling interaction"
              className="text-3xl rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
