export default function Overview() {
  return (
    <div>
      <h3 className="text-xl">OVERVIEW</h3>
      <div className="md:mx-20 my-3">
        <div>
          <p className="font-semibold">At Issue</p>
          <p className="p-5">
            In a city with approximately 1.6 million residents, the annual food
            waste problem amounts to about{" "}
            <span className="text-red-500">1.3 billion tons</span>. This issue
            arises due to nearly 1 out of 4 residents are not successful in
            finding the right food they need, resulting in{" "}
            <span className="text-red-500">20% fewer donations</span> over a
            2-week period. To increase awareness regarding where residents can
            find or donate the food on-demand, I updated the search function to{" "}
            <span className="underline text-blue-500">help them find</span> the
            food they were looking for in an easier way.
          </p>
          <p className="p-5">
            Please note that this project, Food Distro, is currently{" "}
            <span className="underline">on-going</span> and I have participated
            as a UX Designer for a phase.
          </p>
        </div>
        <div>
          <p className="font-semibold pt-5">Outcome</p>
          <div className="flex-col grid-cols-2 my-10">
            <div className="text-3xl md:text-5xl grid grid-cols-2 text-center">
              <p>88%</p>
              <p>85%</p>
            </div>
            <div className="text-sm grid grid-cols-2 my-3 text-center space-x-32">
              <p>of users found the filter to be easy-to-use</p>
              <p className="md:w-2/6">found review system reliable</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <p className="font-semibold pt-5">Outcome</p>
          <div className="space-y-3 py-3">
            <p className="px-5">
              From the usability testing,{" "}
              <span className="text-blue-500">16 out of 18 participants</span>,{" "}
              as a donation-receiver, were able to{" "}
              <span className="text-blue-500">
                successfully use the filter function
              </span>{" "}
              and{" "}
              <span className="text-blue-500">
                were able to find the products
              </span>{" "}
              they were looking for on the map in addition to learning about the
              food-giver. They were able to find out{" "}
              <span className="underline">
                the freshness of the donated item
              </span>
              ,{" "}
              <span className="underline">
                the distance between the food-giver and themselves
              </span>
              , and <span className="underline">explore for more options</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
