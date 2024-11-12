export default function Retrospective() {
  return (
    <div>
      <h3 className="text-xl uppercase">Looking back...</h3>
      <div className="md:mx-20 my-3 space-y-5">
        <ul className="px-5 space-y-3">
          <li className="text-blue-500">
            Best Lesson 1 | The Subscription Model
          </li>
          <p className="px-5">
            In this project, all the services were offered as a package. As I am
            not a business-person yet, it was a good opportunity to find out
            what a business model looks like and how it works in reality.
          </p>
          <li className="text-blue-500">Best Lesson 2 | The Pivot</li>
          <p className="px-5">
            The pivot was a good choice because we were able to keeping our own
            statement that we will keep the product easy-to-use. If we decided
            to combine everything in all-in-one solution, I think that we might
            have ended up complicating activities.
          </p>
        </ul>
      </div>
    </div>
  );
}
