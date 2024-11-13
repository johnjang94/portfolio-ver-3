import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import { getLogoSrc, getTextColor } from "../utils/nav-utils";

Mobile.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default function Mobile({ pathname }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoSrc = getLogoSrc(pathname);
  const textColor = getTextColor(pathname);

  return (
    <div
      className={`px-10 flex md:hidden justify-between w-full py-5 items-center ${textColor}`}
    >
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <RxHamburgerMenu className={`text-2xl ${textColor}`} />
      </button>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="fixed inset-y-0 left-0 w-full max-h-screen bg-emerald-200 shadow overflow-y-scroll">
            <button
              className="float-right px-10 pt-10"
              onClick={() => setIsMenuOpen(false)}
            >
              &#10060;
            </button>
            <ul className="py-24 px-10 space-y-5">
              {["/home", "/about", "/resume"].map((path, index) => (
                <li
                  key={index}
                  className="text-3xl sm:text-base hover:bg-slate-300 hover:cursor-pointer rounded-3xl"
                >
                  <Link to={path}>
                    <button className="p-2">
                      {path.slice(1).replace("-", " ")}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <Link to="/home">
        <img src={logoSrc} alt="Logo" width={30} />
      </Link>
      <Link to="/contact">
        <button>Contact</button>
      </Link>
    </div>
  );
}
