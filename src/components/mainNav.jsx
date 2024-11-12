import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import "./mainNav.css";
import { useState } from "react";
import PropTypes from "prop-types";

import Logo from "/logo-512.png";
import Logo2 from "/logo--white.png";

Nav.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default function Nav({ pathname }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isNotRegistered = () => {
    const registeredPaths = [
      "/",
      "/home",
      "/about",
      "/resume",
      "/televu",
      "/food-distro",
      "/tugo",
      "/tugo-insurance",
      "/sakhi",
      "/operate",
      "/contact",
      "/lock",
    ];
    return !registeredPaths.includes(pathname);
  };

  const logoSrc = pathname === "/lock" || isNotRegistered() ? Logo2 : Logo;

  const textColor =
    pathname === "/lock" || isNotRegistered() ? "text-white" : "text-black";

  return (
    <>
      <div
        className={`px-10 flex md:hidden justify-between w-full py-5 items-center ${textColor}`}
      >
        <div>
          <button onClick={toggleMenu}>
            <RxHamburgerMenu className={`text-2xl ${textColor}`} />
          </button>
        </div>
        {/* Menu */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50"
            onClick={closeMenu}
          >
            <div
              className={`fixed inset-y-0 left-0 md:max-w-xs w-full max-h-screen bg-emerald-200 shadow overflow-y-scroll md:overflow-auto ${
                isMenuOpen ? "slide-in" : "slide-out"
              }`}
            >
              <button className="float-right px-10 pt-10" onClick={closeMenu}>
                &#10060;
              </button>
              <ul className="py-24 px-10 space-y-5">
                <div
                  className={`${
                    isMenuOpen ? "home-slide-in" : ""
                  } text-3xl text-end sm:text-base sm:text-start border-white-2 hover:bg-slate-300 sm:hover:bg-transparent sm:hover:text-blue-400 hover:cursor-pointer rounded-3xl`}
                >
                  <Link to="/home">
                    <button className="p-2">Home</button>
                  </Link>
                </div>
                <div
                  className={`${
                    isMenuOpen ? "about-slide-in" : ""
                  } text-3xl text-end sm:text-base sm:text-start border-white-2 hover:bg-slate-300 sm:hover:bg-transparent sm:hover:text-blue-400 hover:cursor-pointer rounded-3xl`}
                >
                  <Link to="/about">
                    <button className="p-2">About Me</button>
                  </Link>
                </div>
                <div
                  className={`${
                    isMenuOpen ? "resume-slide-in" : ""
                  } text-3xl text-end sm:text-base sm:text-start border-white-2 hover:bg-slate-300 sm:hover:bg-transparent sm:hover:text-blue-400 hover:cursor-pointer rounded-3xl`}
                >
                  <Link to="/resume">
                    <button className="p-2">Resume</button>
                  </Link>
                </div>
                <div
                  className={`${
                    isMenuOpen ? "design-slide-in" : ""
                  } text-3xl text-end sm:text-base sm:text-start border-white-2 hover:bg-slate-300 sm:hover:bg-transparent sm:hover:text-blue-400 hover:cursor-pointer rounded-3xl`}
                ></div>
              </ul>
            </div>
          </div>
        )}
        {/* Menu */}
        <div>
          <Link to="/home">
            <img src={logoSrc} alt="Logo" width={30} />
          </Link>
        </div>
        <div>
          <Link to="/contact">
            <button>Contact</button>
          </Link>
        </div>
      </div>
      <div
        className={`px-10 justify-between hidden md:flex py-5 items-center ${textColor}`}
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
          <div className="block">
            <Link to="/about">
              <button>About Me</button>
            </Link>
          </div>
          <div className="block">
            <Link to="/resume">
              <button>Resume</button>
            </Link>
          </div>
          <div>
            <Link to="/contact">
              <button>Contact</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
