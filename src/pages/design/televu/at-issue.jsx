import { televu } from "../../../utils/televu";

export default function AtIssue() {
  return (
    <div>
      <p className="text-xl text-center mt-5 text-red-500">
        What led the clinicians feel confused?
      </p>
      <div className="md:mx-20 my-5 space-y-3">
        <p>
          For video-call sessions, provided by TeleVU Innovation platform, there
          were two different navigation menu layers. On the other hand, it was
          clear that the clinicians{" "}
          <span className="text-red-500">were not able to recognize</span> the
          difference.
        </p>
        <div className="p-3 bg-white rounded-3xl">
          <img
            src={televu.TwoNavigations}
            alt="Two navigation menus"
            width={900}
            className=" text-3xl"
          />
        </div>
        <div className="py-3">
          <p>
            It was good that the video-call window acknowledged the clinicians
            that the session was being recorded (if the clinician decided to
            record the call), but there were the following odds we could detect:
          </p>
          <ul className="list-disc text-sm space-y-3 md:mx-3 py-3">
            <li>
              the platform{" "}
              <span className="text-red-500">was not interactive</span> enough
              (i.e. inform the users where they can find the recording after it
              is finished)
            </li>
            <li>
              the platform had{" "}
              <span className="underline">a small screen size</span> to indicate
              the mobile-view when the clinicians were{" "}
              <span className="underline">
                looking at the view from their desktop
              </span>
            </li>
            <li>
              the size of tag that says &#34;recording&#34; on the screen seemed{" "}
              <span className="text-red-500">unnecessarily big</span> compared
              to any other element that existed on the screen
            </li>
            <li>
              the icons that the platform was using{" "}
              <span className="text-red-500">were not following</span> the
              industry-standard
            </li>
          </ul>
          <div className="p-3 bg-white rounded-3xl">
            <img
              src={televu.OriginalVideo}
              alt="Original Video"
              width={900}
              className=" text-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
