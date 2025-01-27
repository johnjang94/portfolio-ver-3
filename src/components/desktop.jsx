import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getLogoSrc, getTextColor } from "../../utils/nav-utils";

Desktop.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default function Desktop({ pathname }) {
  const logoSrc = getLogoSrc();
  const textColor = getTextColor();
  const [showResume, setShowResume] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const allowedReferrers = [
      "linkedin.com",
      "indeed.com",
      "portfolio-ver-3-n474q0s6d-johnjang94s-projects.vercel.app",
    ];

    const referrer = document.referrer;
    const token = searchParams.get("token");

    if (
      token === "secure-token" ||
      (referrer && allowedReferrers.some((url) => referrer.includes(url)))
    ) {
      setShowResume(true);
    }
  }, [searchParams]);

  return (
    <div
      className={`px-10 justify-between hidden md:flex w-full py-5 items-center ${textColor}`}
    >
      <div>
        <Link
          to="/home"
          className="flex items-center space-x-5 hover:cursor-pointer"
        >
          <img src={logoSrc} alt="Logo" width={30} />
          {pathname !== "/" && pathname !== "/home" && (
            <p className="hover:text-blue-500">I am John Jang</p>
          )}
        </Link>
      </div>
      <div className="flex space-x-5 items-center">
        {["/about", ...(showResume ? ["/resume"] : []), "/contact"].map(
          (path, index) => (
            <div key={index} className="block">
              <Link to={path}>
                <button className="hover:cursor-pointer hover:text-blue-500">
                  {path.slice(1).replace("-", " ")}
                </button>
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
}
