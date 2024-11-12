export default function Impact() {
  return (
    <div>
      <h3 className="text-xl uppercase">Usability Testing</h3>
      <div className="md:mx-20 my-3">
        <p>For testing, we had a few tasks on mind:</p>
        <ul className="list-disc space-y-3 text-base md:mx-3 py-3">
          <li>
            users should be able to click a button from main portal to initiate
            a video-call
          </li>
          <li>
            users who are not hosts should be able to join the video-call after
            being notified to join
          </li>
          <li>
            users should be able to adjust the size of a screen that is used for
            screen sharing
          </li>
          <li>
            the host should be able to record the session at their own will or
            with permission from others
          </li>
          <li>
            users should be able to indicate drawing mark on the shared screen
            as this is the main feature of TeleVU platform
          </li>
        </ul>
      </div>
      <div className="md:mx-20">
        <p>
          We had about 5 participants for a moderated usability testing and 3
          participants for an unmoderated usability testing using Maze. This
          test showed <span className="text-blue-500">80% success</span> in...{" "}
        </p>
        <ul className="list-disc space-y-3 text-base md:mx-3 py-3">
          <li>initiating the call or join a new call</li>
          <li>adjust the screen size</li>
          <li>interact with others using drawing marker</li>
          <li>record call</li>
          <li>
            terminate the call and properly navigate themselves to the history
            page to find the recorded call
          </li>
        </ul>
      </div>
    </div>
  );
}
