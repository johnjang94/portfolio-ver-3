import { tugoInsurance } from "../../../utils/tugo-insurance";

export default function Opportunities() {
  return (
    <div>
      <div className="space-y-5">
        <h3 className="text-xl uppercase">Opportunities</h3>
        <div className="md:mx-20 space-y-5">
          <p>
            We investigated where we could possibly bring some changes as
            follows:
          </p>
          <ul className="space-y-3 list-decimal">
            <li className="font-semibold">
              Do users need two different navigation menu layers?
            </li>
            <p className="px-10">
              <span className="text-red-500">It is unclear</span> why travelers
              need to check what kind of insurance options are offered for other
              types of users
            </p>
            <img
              src={tugoInsurance.Opportunity}
              width={900}
              alt="Two menus"
              className="text-3xl rounded-3xl"
            />
            <li className="font-semibold">Information overload</li>
            <p className="px-10">
              With lots of buttons, words, and options, the entire experience is{" "}
              {/* */}
              <span className="text-red-500">overwhelming</span>
            </p>
            <img
              src={tugoInsurance.Original}
              width={900}
              alt="Original Insurance"
              className="text-3xl rounded-3xl"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
