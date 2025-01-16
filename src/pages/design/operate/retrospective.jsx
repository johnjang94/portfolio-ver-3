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
            In this project, all the services were offered as a subscription
            basis. As I am not a business-person yet, it was a good opportunity
            to find out what a business model looks like and how it works in
            reality.
          </p>
          <li className="text-blue-500">Best Lesson 2 | The Pivot</li>
          <p className="px-5">
            Earlier, I mentioned that I made some changes in my design during
            mid-fidelity. The reason for the change was that we came to realize
            how complex the service becomes when we combine accommodation of the
            rooms and the catering services. The pivot was a good choice because
            we were able to stay true to our commitment to simplicity and ease
            of use. If we decided to combine everything in all-in-one solution,
            I think that we might not have been able to have the users clearly
            understand how things work.
          </p>
        </ul>
      </div>
    </div>
  );
}
