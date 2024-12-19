export default function Impact() {
  return (
    <div>
      <h3 className="text-xl uppercase">Outcome</h3>
      <div className="md:mx-20 my-3 space-y-5">
        <div>
          <div className="p-5 space-y-3">
            <p>Usability Testing had five different user flow tests:</p>
            <ul className="space-y-3 list-disc mx-5">
              <li>
                travellers should be able to read and recognize five different
                types of insurance packages as they explore the new website
              </li>
              <li>
                travellers should be acknowledged regarding the steps they need
                to go through before they place an order
              </li>
              <li>
                travellers should be able to direct themselves from the detail
                page for each type of package to the cart page where they can
                buy the insurance
              </li>
              <li>
                from any screen, travellers should be able to find the contact
                information and make an inquiry to TuGo Travel Insurance
              </li>
              <li>
                from any screen, travellers should be able to redirect
                themselves to the internal portal where they can view the
                history of the purchase, the list of places that they have
                traveled, and the expired products
              </li>
            </ul>
            <div className="py-5 space-y-3">
              <p>
                In general,{" "}
                <span className="text-blue-500">60% of participants</span> have
                been able to...
              </p>
              <ul className="space-y-3 list-disc mx-5">
                <li>explore the products and understand the offer</li>
                <li>
                  understand how to place an order for the insurance package
                </li>
                <li>aware of how to reach out for the customer service</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
