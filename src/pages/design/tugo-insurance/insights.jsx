export default function Insights() {
  return (
    <div>
      <h3 className="text-xl uppercase">Insights</h3>
      <ul className="md:mx-20 my-5 space-y-3">
        <p>
          After initial survey and interview, we were able to narrow down to the
          following two biggest pain points:
        </p>
        <li className="font-semibold">Optimize the user flow</li>
        <p className="px-10">
          Too many steps resulted in{" "}
          <span className="text-red-500">high bounce-off rate</span>
        </p>
        <p className="px-10">
          A handful of users thoroughly went through all the steps,
          understanding how to place an order. On the other hand, many users
          bounced off once they reached the step that they needed to choose the
          travel dates because they were expecting to be redirected to the cart
          page.
        </p>
        <li className="font-semibold">Improve simplicity</li>
        <p className="px-10">
          Many users prefer{" "}
          <span className="text-blue-500">to be directed</span> to relevant
          information
        </p>
        <p className="px-10">
          The structure of the UI is heavily crammed with information, leaving
          the users feeling uncertain that if they need to know everything.
        </p>
      </ul>
    </div>
  );
}
