import { OperateEase } from "../../../utils/operate";

export default function Business() {
  return (
    <div className="space-y-5 py-5 md:mx-20">
      <h3 className="text-xl uppercase">Business Model</h3>
      <div className="space-y-5 md:mx-8">
        <p className="font-bold">
          What was the business model the project pursued?
        </p>
        <p>
          This platform carries an idea of integrated SaaS platform that
          automates hotel management tasks across lodging, restaurant, and
          finance operations. It offers tiered subscription plans (Basic, Pro,
          and Enterprise) tailored for individual hotels and hotel chains. The
          focus is on boosting operational efficiency and enhancing guest
          experiences, with an MVP strategy aimed at early adoption and
          iterative improvement.
        </p>
        <img src={OperateEase.Business} alt="Business model canvas" />
      </div>
    </div>
  );
}
