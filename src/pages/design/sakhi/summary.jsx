export default function Summary() {
  return (
    <div>
      <div className="md:mx-20 my-3 space-y-5">
        <div>
          <p className="font-semibold">At Issue</p>
          <p className="py-5 px-8">
            Many e-commerce platforms targeting Indian customers{" "}
            <span className="text-red-500">struggle</span> with shoppers not
            recognizing the connection between menu options and traditional
            holidays. This causes{" "}
            <span className="text-red-500">confusion</span> among shoppers when{" "}
            <span className="underline">selecting appropriate clothing</span>.
            The Sakhi aims to solve this by{" "}
            <span className="underline">
              clearly linking menu items to specific holidays
            </span>
            , enabling shoppers to quickly identify and select clothing suitable
            for the occasion.
          </p>
        </div>
        <div>
          <p className="font-semibold">Outcome</p>
          <p className="px-8 py-5">
            Usability testing showed that shoppers navigating at The Sakhi&#39;s
            newly designed menu{" "}
            <span className="underline">were able to select</span> appropriate
            clothing{" "}
            <span className="text-blue-500">
              20% faster and with fewer errors
            </span>{" "}
            compared to similar e-commerce platforms. This led to a smoother
            shopping experience and higher engagement.
          </p>
        </div>
      </div>
    </div>
  );
}
