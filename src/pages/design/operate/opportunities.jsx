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
            OperateEase offers more customizations in pricing for the owners or
            managers and to charge late check-out fees (with different types of
            percentage limits).
          </li>
        </ul>

        <li className="font-bold">Cheaper Services</li>
        <p className="px-20">
          OperateEase offers cheaper subscription offers to many hotelier
          managers as their business sizes are not big.
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
