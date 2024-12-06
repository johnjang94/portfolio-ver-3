import { sakhi } from "../../../utils/sakhi";

export default function UserPersona() {
  return (
    <div className="space-y-5">
      <p className="text-xl font-semibold text-center">
        What really drew them away then?
      </p>
      <div className="md:mx-20 space-y-5">
        <div className="space-y-3">
          <ul className="text-red-500 text-center py-10 space-y-3">
            <li>
              &#34;Many Indian platforms have a complex navigation menu or
              filter.&#34;
            </li>
            <li>
              &#34;Not many Indian brands offer comparison among products.&#34;
            </li>
            <li>
              &#34;Visuals that they have do not speak enough messages.&#34;
            </li>
          </ul>
          <div className="p-5 bg-white rounded-3xl">
            <img
              src={sakhi.Caterina}
              width={900}
              alt="Caterina"
              className="text-3xl rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
