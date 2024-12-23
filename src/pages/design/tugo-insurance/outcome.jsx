export default function Outcome() {
  return (
    <div>
      <h3 className="text-xl uppercase">Outcome</h3>
      <div className="md:mx-20 my-3 space-y-5">
        <div>
          <div className="p-5 space-y-3">
            <p>
              Five user flows were tested to ensure smooth navigation and
              usability:
            </p>
            <ul className="space-y-3 list-disc mx-5">
              <li>clear recognition of five different insurance packages.</li>
              <li>awareness of steps required before placing an order.</li>
              <li>
                seamless navigation from package details to the cart page.
              </li>
              <li>easy access to contact information for inquiries.</li>
              <li>
                quick redirection to the internal portal for purchase history
                and expired products.
              </li>
            </ul>
            <div className="py-5 space-y-3">
              <p>
                <span className="text-blue-500">60%</span> of participants{" "}
                <span className="text-blue-500">successfully:</span>
              </p>
              <ul className="space-y-3 list-disc mx-5">
                <li>explored and understood the product offerings.</li>
                <li>learned how to place an order for insurance packages.</li>
                <li>knew how to contact customer service when needed.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
