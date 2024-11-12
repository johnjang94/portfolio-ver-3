import { OperateEase } from "../../../utils/operate";

export default function StyleGuide() {
  return (
    <div>
      <h3 className="text-xl uppercase">Style Guide</h3>
      <ul className="md:mx-20 my-5 space-y-5 list-decimal">
        <p className="px-10">
          We created the fonts, the colors, the buttons and other interactive
          assets for OperateEase.
        </p>
        <img
          src={OperateEase.STYLE_GUIDE}
          alt="OperateEase Style Guide"
          width={600}
          className="rounded-2xl mx-auto"
        />
      </ul>
    </div>
  );
}
