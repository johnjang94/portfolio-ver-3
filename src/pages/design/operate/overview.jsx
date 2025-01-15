export default function Overview() {
  return (
    <div>
      <div className="md:mx-20 my-3 space-y-5">
        <div>
          <p className="font-semibold">Business Goal and Product Vision</p>
          <p className="md:p-5 py-5">
            OperateEase, a B2B SaaS, cloud-based Enterprise project, aims to be
            the go-to management solution for hoteliers ranging from
            self-employed individuals, such as those who use Airbnb services, to
            7-star hotels in terms of room management and catering services.
          </p>
          <p className="md:px-5">
            The project targets{" "}
            <span className="text-blue-500">a 20% reduction</span> in stock-outs
            and <span className="text-blue-500">a 15% improvement</span> in
            inventory turnover within six months. The platform combines
            intuitive design with advanced forecasting to enhance operational
            efficiency.
          </p>
        </div>
        <div className="py-10 md:py-0">
          <p className="font-semibold">Outcome</p>
          <div className="flex-col grid-cols-2 my-10">
            <div className="text-3xl md:text-5xl flex items-center space-x-20 md:justify-center md:space-x-96">
              <p>80%</p>
              <p>90%</p>
            </div>
            <div className="flex items-center gap-5 text-sm md:mx-auto md:gap-0 md:space-x-48 md:justify-center my-3">
              <p>positive remarks in live updates</p>
              <p className="md:w-2/6">
                of users said that it is smooth and easy to adjust the rates
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
