export default function Summary() {
  return (
    <div>
      <div className="md:mx-20 my-3 space-y-5">
        <div>
          <p className="font-semibold">At Issue</p>
          <p className="p-5">
            70% shoppers who visit online shopping platforms such as Zara,
            Prada, H&M, etc. {""}
            <span className="text-red-500">do not</span> find Indian platforms
            as friendly because...
          </p>
          <div className="px-8 space-y-3">
            <p>
              Cause 1 | There are{" "}
              <span className="text-red-500">too many menus</span> in navigation
            </p>
            <p>
              Cause 2 | It is{" "}
              <span className="text-red-500">yet difficult</span> to make a
              connection between holidays and different types of clothes for
              most shoppers
            </p>
          </div>
        </div>
        <div>
          <p className="font-semibold">Outcome</p>
          <p className="px-8 py-5">The usability testing showed that</p>
          <ul className="px-10 mx-3 list-disc">
            <li>
              <span className="text-blue-500">75% shoppers</span> found that the
              design is <span className="text-blue-500">intuitive</span>
            </li>
            <li>
              <span className="text-blue-500">80% shoppers</span> were able to{" "}
              <span className="text-blue-500">identify</span> different types of
              clothes and its proper usage
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
