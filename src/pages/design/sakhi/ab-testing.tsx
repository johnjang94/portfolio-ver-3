import React from "react";
import { sakhi } from "../../../utils/sakhi";

export default function ABTesting() {
  return (
    <div>
      <h3 className="text-xl uppercase">A/B Testing</h3>
      <div className="md:grid md:grid-cols-2 md:gap-5 my-5 space-y-5 md:space-y-0">
        <img src={sakhi.Version1} alt="version 1" className="rounded-2xl" />
        <img src={sakhi.Version2} alt="version 2" className="rounded-2xl" />
      </div>
      <p className="text-xl font-semibold text-center my-5">
        What have we learnt?
      </p>
      <p>80% of shoppers chose version 2 home page design because</p>
      <ul className="list-disc md:mx-10 mx-5 space-y-3 mt-3">
        <li>the navigation menu was well-spotted without scrolling</li>
        <li>
          both versions indicated that there are more information to check out,
          but the shoppers thought that the second version had buttons that
          align to the overall design
        </li>
        <li>
          the graphics seemed more attractive and elegant in the second version
        </li>
      </ul>
    </div>
  );
}
