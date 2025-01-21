import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`px-10 flex md:hidden justify-between w-full py-5 items-center ${textColor}`}
    >
      <button onClick={toggleMenu}>
        <RxHamburgerMenu className={`text-2xl ${textColor}`} />
      </button>

      <div
        className={`fixed inset-y-0 left-0 w-[80vw] max-h-screen bg-slate-100 shadow overflow-y-scroll z-50 transition-transform duration-300 ease-in-out rounded-2xl box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px; ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button className="float-right px-10 pt-10" onClick={closeMenu}>
          <RxCross1 className={`text-2xl ${textColor}`} />
        </button>
        <ul className="py-24 px-10 space-y-5">
          <li
            className={`text-xl sm:text-base transition-transform duration-500 ease-in-out ${
              isMenuOpen
                ? "translate-x-0 delay-200"
                : "-translate-x-full delay-[800ms]"
            }`}
          >
            <Link to="/home" onClick={closeMenu}>
              <button className="p-2">home</button>
            </Link>
          </li>
          <li
            className={`text-xl sm:text-base transition-transform duration-500 ease-in-out ${
              isMenuOpen
                ? "translate-x-0 delay-[400ms]"
                : "-translate-x-full delay-[600ms]"
            }`}
          >
            <Link to="/about" onClick={closeMenu}>
              <button className="p-2">about</button>
            </Link>
          </li>
          <li
            className={`text-xl sm:text-base transition-transform duration-500 ease-in-out ${
              isMenuOpen
                ? "translate-x-0 delay-[600ms]"
                : "-translate-x-full delay-[400ms]"
            }`}
          >
            <Link to="/contact" onClick={closeMenu}>
              <button className="p-2">contact</button>
            </Link>
          </li>
        </ul>
      </div>

      <Link to="/home">
        <img src={logoSrc} alt="Logo" width={30} />
      </Link>
      <Link to="/contact">
        <button>Contact</button>
      </Link>
    </div>
  );
}
