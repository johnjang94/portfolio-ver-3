import { televu } from "../../../utils/televu";

export default function Solutions() {
  return (
    <div>
      <div className="md:mx-20 my-3 space-y-10">
        <div className="space-y-3">
          <p className="font-semibold">
            Solution 1 | Navigation menu relocation
          </p>
          <p className="px-10">
            We have decided to relocate the menu for the smart glass to be
            included in the smaller video-sharing screen and keep the menu for
            the desktop browser at the bottom of the browser window to follow
            the industry-standard
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
          <p className="font-semibold">Solution 2 | Improved Interaction</p>
          <p className="px-10">
            We have changed the UI to indicate who is available for a call and
            added a notification to users that a call is initiated once the user
            clicks call CTA
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
