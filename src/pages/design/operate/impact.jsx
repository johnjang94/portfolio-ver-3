export default function Impact() {
  return (
    <div className="space-y-5 py-5 md:mx-20">
      <h3 className="text-xl uppercase">Impact</h3>
      <div className="md:mx-8 my-3">
        <p className="my-5">
          I conducted usability testing with 3 participants regarding the
          convenience of rate adjustment for room reservation fees, checking on
          room reservation status, allowance of customizations on late check-out
          penalties, and orders on catering services (if requested by the
          client). Here are the outcomes from the testing:
        </p>
        <ul className="space-y-5 md:mx-5">
          <li>
            <span className="font-bold">
              Delivered an intuitive experience to the participants:
            </span>{" "}
            2 out of 3 participants said that it is easy to find an icon for
            room rate adjustment and they like the fact that you can set up
            different prices for different types of rooms.
          </li>
          <li>
            <span className="font-bold">
              Optimistic feedback on specialized dashboards:
            </span>{" "}
            all the participants said that it seems nicer to see two different
            dashboards that serve different purposes — room reservation
            management has its own focused dashboard and so does the catering
            services instead of combining those services in all-in-one.
          </li>
        </ul>
      </div>
    </div>
  );
}
