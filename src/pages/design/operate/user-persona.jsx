import { OperateEase } from "../../../utils/operate";

export default function UserPersona() {
  return (
    <div className="space-y-5 -mt-10">
      <p className="md:mx-28">
        According to surveys and interviews we have conducted, we have come to
        understand that the hoteliers found the inventory management as the core
        activity of the management system. Specifically, we have identified that{" "}
        <span className="underline">
          the biggest challenge in inventory management
        </span>{" "}
        was{" "}
        <span className="text-red-500">
          the delay in real-time information delivery
        </span>
        .
      </p>
      <div className="bg-slate-300 md:mx-20 p-5 rounded-2xl">
        <img
          src={OperateEase.Persona}
          width={800}
          alt="User Persona Example"
          className="text-2xl rounded-3xl mx-auto"
        />
      </div>
    </div>
  );
}
