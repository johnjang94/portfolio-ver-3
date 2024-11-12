export default function CompetitiveAnalysis() {
  return (
    <div>
      <h3 className="text-xl uppercase">Looking for inspirations...</h3>
      <div className="md:mx-20 my-5 space-y-5">
        <p className="font-semibold">
          We benchmarked two other brands for their products
        </p>
        <ul className="px-5 list-disc space-y-3">
          <li>
            <span className="text-blue-500">Google Meet</span> had specialized
            sounds for notifications
          </li>
          <p className="px-5">
            They did not have a particular pop-up message that the video-screen
            was loading, but they had a sound when users joined a video-call and
            had another sound for them leaving the call
          </p>
          <li>
            <span className="text-blue-500">Microsoft Teams</span> had loading
            interaction and leaving notifications
          </li>
          <p className="px-5">
            The users were notified when they were joining a new video call and
            when they left a video-call
          </p>
        </ul>
      </div>
    </div>
  );
}
