import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getLogoSrc, getTextColor } from "../utils/nav-utils";

Desktop.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default function Desktop({ pathname }) {
  const logoSrc = getLogoSrc(pathname);
  const textColor = getTextColor(pathname);

  return (
    <div
      className={`px-10 justify-between hidden md:flex w-full py-5 items-center ${textColor}`}
    >
      <div>
        <Link to="/home" className="flex items-center space-x-5">
          <img src={logoSrc} alt="Logo" width={30} />
          {pathname !== "/" && pathname !== "/home" && (
            <p className="hover:text-blue-500">I am John Jang</p>
          )}
        </Link>
      </div>
      <div className="flex space-x-5 items-center">
        {["/about", "/contact"].map((path, index) => (
          <div key={index} className="block">
            <Link to={path}>
              <button>{path.slice(1).replace("-", " ")}</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
