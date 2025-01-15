export default function Summary() {
  return (
    <div>
      <div className="md:mx-20 my-3 space-y-5">
        <div>
          <p className="font-semibold md:text-xl">
            Business Goals and Product Vision
          </p>
          <div className="py-5 space-y-3 md:px-8">
            <p>
              The vision for <span className="font-bold">The Sakhi</span> was to
              establish itself as a leading e-commerce platform for premium
              Indian clothes by delivering a seamless, user-first shopping
              experience for the age group between Gen Z and Millenials. The
              business aimed to achieve a{" "}
              <span className="underline">20% click-through rate</span> and{" "}
              <span className="underline">increase revenue by 15% </span> within
              six months post-launch. To accomplish this, the vision was to
              deliver a user-centric platform that bridges elegant brand
              identity with functional usability, catering to both domestic and
              international shoppers.
            </p>
          </div>
        </div>
        <div>
          <p className="font-semibold">Outcome</p>
          <div className="flex-col grid-cols-2 my-10 hidden md:block">
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
          <div className="my-10 block md:hidden">
            <div>
              <p className="text-3xl md:text-5xl text-center">20%</p>
              <p className="text-center">optimized clothing search</p>
            </div>
            <div className="my-10 block md:hidden">
              <p className="text-3xl md:text-5xl text-center">80%</p>
              <p className="text-center">of users understand the branding</p>
            </div>
          </div>
          {/*  */}
          <div className="flex-col grid-cols-2 my-10 hidden md:block">
            <div className="text-3xl md:text-5xl grid grid-cols-2 text-center">
              <p>75%</p>
              <p>20%</p>
            </div>
            <div className="grid grid-cols-2 text-sm my-3 text-center space-x-32">
              <p>of new users found descriptions helpful</p>
              <p className="md:w-2/6">CTR anticipated</p>
            </div>
          </div>
          {/*  */}
          <div className="my-10 block md:hidden">
            <div>
              <p className="text-3xl md:text-5xl text-center">75%</p>
              <p className="text-center">
                of new users found descriptions helpful
              </p>
            </div>
            <div className="my-10 block md:hidden">
              <p className="text-3xl md:text-5xl text-center">20%</p>
              <p className="text-center">CTR anticipated</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
