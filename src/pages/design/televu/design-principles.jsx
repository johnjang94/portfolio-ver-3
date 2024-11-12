import { HiOutlineLightBulb } from "react-icons/hi";

export default function Principles() {
  return (
    <div>
      <div className="space-y-5">
        <h3 className="text-xl">DESIGN PRINCIPLES</h3>
        <div className="md:mx-20">
          <div className="space-y-5">
            <div className="flex items-start gap-2">
              <p className="font-semibold">Simplicity is the best</p>
              <HiOutlineLightBulb className="text-yellow-500 text-xl" />
            </div>
            <p className="px-5 text-gray-500">
              Users prefer to achieve tasks within one to two clicks.
            </p>
            <p className="px-5 text-gray-500">
              Users prefer to have less amount of cognitive load with
              technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
