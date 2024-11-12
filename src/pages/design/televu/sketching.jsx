import { televu } from "../../../utils/televu";

export default function Sketching() {
  return (
    <div>
      <h3 className="text-xl uppercase">Sketching & Mock-Ups</h3>
      <div className="md:mx-20 my-5 space-y-5">
        <ul className="px-10 list-disc space-y-5">
          <li>Distinguish Menus</li>
          <p className="px-5">
            In the initial sketch, we placed the desktop menu bigger and
            highlighted at the bottom of the screen to indicate that it is for
            the desktop. For the mobile, we indicated more menus inside the
            mobile screen instead.
          </p>
          <img
            src={televu.VideoSketch}
            width={900}
            alt="Filter"
            className="text-3xl rounded-3xl"
          />
          <li>Utilize the space</li>
          <p className="px-5">
            In the original screen, there are too much white gaps that are left
            unused. We have decided to use up the space as much as we can.
          </p>
          <li>Interaction</li>
          <p className="px-5">
            We created new design to make sure that the users are getting
            notified whether they are joining a video session, recording the
            session or leaving the video-call.
          </p>
        </ul>
        <img
          src={televu.MockUp}
          width={900}
          alt="Rating"
          className="text-3xl rounded-3xl"
        />
      </div>
    </div>
  );
}
