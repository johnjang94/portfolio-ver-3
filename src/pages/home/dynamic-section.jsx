import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DynamicSection = ({ item }) => {
  const isSpecialId = item.id === 1;

  const containerClass = isSpecialId
    ? "md:mx-36 mx-12 space-y-3"
    : "transition-transform duration-300 ease-in-out hover:-translate-y-2 space-y-3 p-2 rounded-xl w-full";

  const innerContainerClass = isSpecialId
    ? "bg-[#311D60] md:px-40 md:py-3 rounded-3xl"
    : `p-3 rounded-xl hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,rgba(0,0,0,0.3)_0px_3px_7px_-3px] ${
        item.id === 1
          ? "bg-[#d1b2a1] rounded-3xl"
          : item.id === 2
          ? "bg-[radial-gradient(circle_311px_at_8.6%_27.9%,rgba(62,147,252,0.57)_12.9%,rgba(239,183,192,0.44)_91.2%)]"
          : item.id === 3
          ? "bg-[radial-gradient(_circle_farthest-corner_at_10%_20%,rgba(255,209,67,1)_0%,rgba(255,145,83,1)_90%_)]"
          : item.id === 4
          ? "bg-[radial-gradient(_circle_farthest-corner_at_48.4%_47.5%,rgba(122,183,255,1)_0%,rgba(21,83,161,1)_90%_)]"
          : "bg-slate-400"
      }`;

  return (
    <div className={containerClass}>
      <div className={innerContainerClass}>
        <Link to={item.link} state={{ fromId: item.id }}>
          <img
            src={isSpecialId ? item.imgSrc : item.imgSrc}
            alt={isSpecialId ? "OperateEase cover" : item.imgAlt}
            className="rounded-xl mx-auto md:h-[300px]"
          />
        </Link>
      </div>
      <p className="font-bold">
        {isSpecialId
          ? "🔒 Reimagined Hospitality Management Service - OperateEase | 2024"
          : `${item.icon} ${item.title}`}
      </p>
      <div className="flex md:space-x-5 space-x-1">
        {(isSpecialId ? ["Product Design", "SaaS Product"] : item.category).map(
          (category, index) => (
            <span
              key={index}
              className="bg-slate-400 rounded-lg md:px-2 px-1 py-1 text-white text-xs md:text-sm"
            >
              {category}
            </span>
          )
        )}
      </div>
    </div>
  );
};

DynamicSection.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string.isRequired,
    category: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default DynamicSection;
