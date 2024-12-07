import { tugoInsurance } from "../../../utils/tugo-insurance";

export default function Solutions() {
  return (
    <div>
      <div className="md:mx-20 my-3 space-y-5">
        <p className="px-5 space-y-3">
          We renovated each page to show only relevant information, helping
          travelers learn about packages faster, and moved customer service
          inquiries for quicker access.
        </p>
        <img
          src={tugoInsurance.Home}
          width={900}
          alt="Home"
          className="rounded-3xl"
        />
        <img
          src={tugoInsurance.Insurance}
          width={900}
          alt="Insurance"
          className="rounded-3xl"
        />
      </div>
    </div>
  );
}
