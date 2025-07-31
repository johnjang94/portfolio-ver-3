// import { LuThumbsUp } from "react-icons/lu";
import { LuThumbsDown } from "react-icons/lu";

export default function Issue() {
  return (
    <div className="space-y-5 py-5 md:mx-20">
      <h3 className="text-xl uppercase">At Issue</h3>
      <div className="space-y-5 md:mx-8">
        <p className="font-bold text-center">What was the problem?</p>
        {/* <p>
          I conducted the market research using 1:1 interviews with the
          small-medium business owners and managers as well as the
          well-established brands in hotel industry to uncover how they use the
          management platform, what benefits they get from those management
          platforms, and what challenges they face every day despite the
          benefits. I had a chance to discuss on 5 different well-established
          brands with a total of 8 participants (4 from Canada and 4 from the
          United States).
        </p> */}
        <ul className="space-y-3">
          {/* <li className="flex space-x-2 items-start">
            <LuThumbsUp className="text-green-500 shrink-0" />
            <span>
              <span className="font-bold">
                80% of the well-established brands seemed to be satisfied
              </span>{" "}
              with the management platforms they use.
            </span>
          </li> */}
          <li className="flex space-x-2 items-start">
            <LuThumbsDown className="text-red-500 shrink-0" />
            <span>
              <span className="font-bold">
                30% of hotelier managers from the well-established brands said
              </span>{" "}
              that, although it is not necessary, it could have been{" "}
              <span className="font-bold">
                much better if there was a way to communicate with the
                colleagues faster
              </span>{" "}
              within the platform because the changes that everyone makes still
              takes time when it comes to room reservations or tracking the
              supply of catering services.
            </span>
          </li>
          <li className="flex space-x-2 items-start">
            <LuThumbsDown className="text-red-500 shrink-0" />
            <span>
              <span className="font-bold">
                60% of the small-medium business owners / managers already have
                heard
              </span>{" "}
              of the platforms that the well-established hotels use, but{" "}
              <span className="font-bold">
                they were not keen on using the same platform
              </span>{" "}
              that the well-established hotels use because the platforms contain
              unnecessary features and costs a lot to use.
            </span>
          </li>
          <li className="flex space-x-2 items-start">
            <LuThumbsDown className="text-red-500 shrink-0" />
            <span>
              <span className="font-bold">
                45% of the small-medium business owners / managers find the
                platforms they use a bit over-priced
              </span>{" "}
              compared to the features and services the platforms offer — even
              though those management platforms are the alternative solutions to
              the management platforms that the well-established hotel
              managements use.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
