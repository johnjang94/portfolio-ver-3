import { OperateEase } from "../../../utils/operate";

export default function UserPersona() {
  return (
    <div>
      <p className="md:mx-28 mt-5">
        Regardless of the hotel size and rating, many hotelier managers have the
        similar voice:
      </p>
      <p className="my-5 text-center text-red-500">
        &#34;Inventory management is difficult to control.&#34;
      </p>
      <img
        src={OperateEase.Persona}
        width={800}
        alt="User Persona Example"
        className="text-3xl rounded-3xl mx-auto"
      />
    </div>
  );
}
