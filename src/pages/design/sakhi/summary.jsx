export default function Summary() {
  return (
    <div>
      <div className="md:mx-20 my-3 space-y-5">
        <div>
          <p className="font-semibold">At Issue</p>
          <p className="py-5 px-8">
            The Sakhi drives engagement and boosts CTR about 20% by linking menu
            options to traditional holidays, helping shoppers find and purchase
            occasion-specific clothing effortlessly.
          </p>
        </div>
        <div>
          <p className="font-semibold">Outcome</p>
          <div className="flex-col grid-cols-2 my-10">
            <div className="text-3xl md:text-5xl grid grid-cols-2 text-center">
              <p>20%</p>
              <p>80%</p>
            </div>
            <div className="grid grid-cols-2 text-sm my-3 text-center space-x-32">
              <p>optimized clothing search</p>
              <p className="md:w-2/6">of users understand the branding</p>
            </div>
          </div>
          {/*  */}
          <div className="flex-col grid-cols-2 my-10">
            <div className="text-3xl md:text-5xl grid grid-cols-2 text-center">
              <p>75%</p>
              <p>20%</p>
            </div>
            <div className="grid grid-cols-2 text-sm my-3 text-center space-x-32">
              <p>of new users found descriptions helpful</p>
              <p className="md:w-2/6">CTR anticipated</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
