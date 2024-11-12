export default function Surveys() {
  return (
    <div>
      <h3 className="text-xl uppercase">Surveys</h3>
      <div className="md:mx-20 my-5 space-y-3">
        <p className="font-semibold">
          We wanted to see what assumptions we had were valid:
        </p>
        <ul className="list-decimal px-3 space-y-3">
          <li>
            Do users need to know different types of services that are offered
            based on their status here in Canada?
          </li>
          <p className="px-5">
            It turns out that the users do not really care about this part.
          </p>
          <li>
            Would it be convenient if the users were able to place an order with
            simple-clicks?
          </li>
          <p className="px-5">
            Many potential travelers rather wanted to be informed about what
            they are signing up for and whether it was necessary than how
            convenient it is to sign up for an insurance instantly.
          </p>
        </ul>
      </div>
    </div>
  );
}
