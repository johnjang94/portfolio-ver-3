export default function Summary() {
  return (
    <div>
      <div className="md:mx-20 my-3 space-y-5">
        <div>
          <p className="font-semibold md:text-xl uppercase">Summary</p>
          <div className="py-5 space-y-3 md:px-8">
            <p>
              In this project, I led a data-driven menu overhaul for the
              client&#39;s e-commerce platform, aiming to simplify complexity
              and target a{" "}
              <span className="font-bold">20% conversion lift</span>. By
              redesigning the navigation and key pages, we sought to create a
              user-first experience that clarified the brand&#39;s premium
              identity and cultural narrative. Early usability testing confirmed
              improved engagement metrics — demonstrating the impact of a
              simplified interface on user behavior.
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
