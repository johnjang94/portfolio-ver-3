export default function Summary() {
  return (
    <div>
      <div className="md:mx-20 my-3 space-y-5">
        <div>
          <p className="font-semibold md:text-xl uppercase">Summary</p>
          <div className="py-5 space-y-3 md:px-8">
            <p>
              In this project, I crafted onboarding experience for an e-commerce
              platform called The Sakhi which was in beta phase. The Sakhi is an
              Indian e-commerce platform that ships Indian traditional clothes
              and jewelries directly from the manufacturers in India to the
              customers here in Canada — resolving the complex issue of customs
              and lifting off the heavy expenses that the shoppers usually need
              to pay for the logistics.
            </p>
            <p>
              Despite the platform in beta version, the usability testing showed
              that 8 out of 11 participants{" "}
              <span className="text-red-500">
                were not willing to purchase anything
              </span>{" "}
              from the client&#39;s website. Having said that, I aimed to
              simplify the complexity of the menus as a part of contribution to
              the client&#39;s objective:{" "}
              <span className="font-bold">20% conversion lift</span>. After the
              first round of research, sketching, and producing high-fidelity
              designs, I conducted the usability testing on the new design which
              returned me the following improved outcomes:
            </p>
          </div>
        </div>
        <div>
          <p className="font-semibold md:mx-8">Outcome</p>
          <div className="flex-col grid-cols-2 my-10 hidden md:block">
            <div className="text-3xl md:text-5xl grid grid-cols-2 text-center">
              <p>20%</p>
              <p>80%</p>
            </div>
            <div className="grid grid-cols-2 text-sm my-3 text-center space-x-32">
              <p>targeted lift</p>
              <p className="md:w-2/6">
                of users understand the brand&#39;s unique identity
              </p>
            </div>
          </div>
          {/*  */}
          <div className="my-10 block md:hidden">
            <div>
              <p className="text-3xl md:text-5xl text-center">20%</p>
              <p className="text-center">targeted lift</p>
            </div>
            <div className="my-10 block md:hidden">
              <p className="text-3xl md:text-5xl text-center">80%</p>
              <p className="text-center">
                of users understand the brand&#39;s unique identity
              </p>
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
