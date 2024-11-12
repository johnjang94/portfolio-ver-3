export default function Impact() {
  return (
    <div>
      <h3 className="text-xl uppercase">Impact</h3>
      <div className="md:mx-20 my-3 space-y-5">
        <p className="font-semibold">Based on the usability testing:</p>
        <ul className="px-5">
          <li>Task success rate</li>
          <p className="px-5">
            <span className="text-blue-500">60%</span> of participants{" "}
            <span className="text-blue-500">have successfully navigated</span>{" "}
            themselves from the home page to ordering an insurance package.
          </p>
        </ul>
      </div>
    </div>
  );
}
