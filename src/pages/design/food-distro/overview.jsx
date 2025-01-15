export default function Overview() {
  return (
    <div>
      <h3 className="text-xl">OVERVIEW</h3>
      <div className="md:mx-20 my-3">
        <div>
          <p className="font-semibold">At Issue</p>
          <p className="md:p-5 py-5">
            In a city of 1.6 million, 1.3 billion tons of food are{" "}
            <span className="text-red-500">wasted annually</span>, partly
            because{" "}
            <span className="text-red-500">1 in 4 residents struggle</span> to
            find the food they need, leading to{" "}
            <span className="text-red-500">20% fewer donations</span> in just
            two weeks. To increase awareness and promote donations, I enhanced
            the search function to allow locals to find and donate food with
            more accessibility.
          </p>
          <p className="md:p-5 py-5">
            Please note that this project, Food Distro, is currently{" "}
            <span className="underline">on-going</span> and I have participated
            as a UX Designer for a phase.
          </p>
        </div>
        <div className="hidden md:block">
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
        <div className="block md:hidden">
          <p className="font-semibold pt-5">Outcome</p>
          <div className="my-10 space-y-5">
            <div className="text-center">
              <p className="text-3xl">88%</p>
              <p>of users found the filter to be easy-to-use</p>
            </div>
            <div className="text-center">
              <p className="text-3xl">85%</p>
              <p>found review system reliable</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
