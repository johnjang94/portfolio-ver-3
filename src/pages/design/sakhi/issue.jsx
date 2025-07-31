// import { LuThumbsUp } from "react-icons/lu";
import { LuThumbsDown } from "react-icons/lu";

export default function Issue() {
  return (
    <div className="space-y-5 py-5 md:mx-20">
      <h3 className="text-xl uppercase">At Issue</h3>
      <div className="md:mx-8 space-y-5">
        <p className="font-bold text-center">What was the problem?</p>
        {/* <p>
          I conducted an initial usability test on the client&#39;s e-commerce
          website (which was a beta version), along with the UX Research team,
          to assess how friendly it is and if the website contains a structure
          that is familiar to shoppers who are already familiar with existing
          platforms such as H&M, Dior, Gucci, etc. I had a total of 11
          participants for this round of testing (3 from Canada, 5 from the
          United States, and 3 from Italy).
        </p> */}
        <ul className="space-y-3">
          {/* <li className="flex space-x-2 items-start">
            <LuThumbsUp className="text-green-500 shrink-0" />
            <span>
              <span className="font-bold">
                All the participants loved the visual photos from the website.
              </span>{" "}
              They all said that they wanted to try the clothes.
            </span>
          </li> */}
          <li className="flex space-x-2 items-start">
            <LuThumbsDown className="text-red-500 shrink-0" />
            <span>
              <span className="font-bold">
                None of the users were able to understand the menu structure of
                this Indian e-commerce platform called The Sakhi.
              </span>{" "}
              For example, they understood the menu buttons called “Women,”
              “Kids,” and “Accessories” as each menu indicates different types
              of products that the client&#39;s website sells. On the other
              hand, they could not understand how the subcategories of each menu
              had any special connection or reason to be displayed as a
              drop-down view from each menu.
            </span>
          </li>
          <li className="flex space-x-2 items-start">
            <LuThumbsDown className="text-red-500 shrink-0" />
            <span>
              <span className="font-bold">
                60% of the participants said that they are not interested in
                exploring further
              </span>{" "}
              when they see product images with inconsistent backgrounds because
              they do not reflect the branding of the client&#39;s company.
            </span>
          </li>
          <li className="flex space-x-2 items-start">
            <LuThumbsDown className="text-red-500 shrink-0" />
            <span>
              <span className="font-bold">
                30% of the participants said that they might not purchase
                clothes from the client&#39;s website
              </span>{" "}
              because the product names are lengthy and difficult to remember,
              even though they understand that those names are unique to the
              products themselves.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
