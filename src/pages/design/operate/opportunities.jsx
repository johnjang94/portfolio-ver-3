export default function Opportunity() {
  return (
    <div>
      <h3 className="text-xl uppercase">Opportunity</h3>
      <p className="md:text-xl font-semibold text-center my-3">
        What strategy did OperateEase choose?
      </p>
      <p className="px-20">
        Part of the research included interviewing some hotelier managers who
        are currently using a management system platform while operating their
        businesses in Canada, the US, and Australia, and during this course, I
        came up with different strategies along with OperateEase according to
        the lessons we learnt as follows:
      </p>
      <ul className="md:mx-20 my-5 space-y-5">
        <li className="font-bold">Flexible customizations on pricing</li>
        <ul className="px-20 space-y-2">
          <li>
            OperateEase focused on flexible pricing customizations, allowing
            hotel managers to adjust room rates, late check-out fees, and other
            charges. This adaptability catered to both small Airbnb hosts and
            luxury hotels, ensuring competitiveness. It also positioned the
            platform for scalability to support future needs.
          </li>
        </ul>

        <li className="font-bold">Cheaper Services</li>
        <p className="px-20">
          OperateEase offers cheaper subscription offers to many hotelier
          managers whose business sizes are considered as small-scale to ensure
          the accessibility for small-scale hoteliers, broadening the
          platform&#39;s market reach while maintaining profitability.
        </p>

        <li className="font-bold">Friendly to Beginners</li>
        <p className="px-20">
          OperateEase offers a simplified user interface to start-up business
          owners and ensures that they clearly understand how each part of the
          program works.
        </p>
      </ul>
    </div>
  );
}
