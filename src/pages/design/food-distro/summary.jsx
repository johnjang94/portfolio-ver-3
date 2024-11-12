export default function Summary() {
  return (
    <div>
      <h3 className="text-xl">SUMMARY</h3>
      <div className="md:mx-20 my-5 space-y-5">
        <div className="flex gap-[5.5rem]">
          <p className="font-semibold">Role</p>
          <p>UX/UI Designer, Prototyper</p>
        </div>
        <div className="flex gap-20">
          <p className="font-semibold">Team</p>
          <ul>
            <li>6 UX Designers</li>
            <li>6 UX Researchers</li>
            <li>6 Product Strategists</li>
            <li>3 Project Management Associates</li>
          </ul>
        </div>
        <div className="flex gap-14">
          <p className="font-semibold">Timeline</p>
          <p>8 weeks</p>
        </div>
      </div>
    </div>
  );
}
