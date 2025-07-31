export default function Business() {
  return (
    <div className="space-y-5 py-5 md:mx-20">
      <h3 className="text-xl uppercase">Business Model</h3>
      <div className="space-y-5 md:mx-8">
        <p className="font-bold text-center">
          How was this management platform different from other existing brands?
        </p>
        {/* <p>
          Reflecting how management tools do not really provide the needs of the
          small-medium hotel owners or managers, I collaborated with the founder
          of this independent B2B SaaS Enterprise project to come up with a new
          business model that automates hotel management tasks across room
          reservation, catering services, and financial operations to focus on
          accommodating the small-medium business owners / managers.
        </p> */}
        <ul className="space-y-3">
          <li>
            Feature 1: the model offers flexible customization on reservation
            fees and late check-out penalties for the management.
          </li>
          <li>
            Feature 2: the model offers tiered subscription plans between Basic,
            Pro, and Enterprise depending on the number of services that each
            client needs.
          </li>
        </ul>
      </div>
    </div>
  );
}
