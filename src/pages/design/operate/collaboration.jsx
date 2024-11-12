import { OperateEase } from "../../../utils/operate";

export default function Collaboration() {
  return (
    <div>
      <h3 className="text-xl uppercase">Development In Progress</h3>
      <p className="md:mx-20 my-5">
        As I am familiar with Full-Stack Development (to a certain extent), I
        helped the team to leave a good web design annotation note and I also
        initiated development environment setup. In fact, we also used Zeplin to
        indicate the specifications for the development team.
      </p>
      <img
        src={OperateEase.Zeplin}
        alt="Zeplin"
        width={800}
        className="rounded-3xl mx-auto my-5"
      />
      <img
        src={OperateEase.Color}
        alt="Color to CSS"
        width={800}
        className="rounded-3xl mx-auto"
      />
      <img
        src={OperateEase.Developers}
        alt="CSS Example"
        width={800}
        className="rounded-3xl mx-auto my-5"
      />
    </div>
  );
}
