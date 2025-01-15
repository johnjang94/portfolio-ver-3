import { HiMiniArrowRight } from "react-icons/hi2";
import { HiMiniArrowLongLeft } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function OtherMenu() {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex items-center md:space-x-40 justify-center mx-8 md:mx-0">
      <div>
        <Link to="/">
          <div className="flex items-center p-5 rounded-2xl gap-2 text-blue-500 bg-transparent hover:text-white hover:bg-gradient-to-br hover:from-blue-400 hover:to-transparent transition-all duration-2000 ease-in-out">
            <button>
              <HiMiniArrowLongLeft />
            </button>
            <button>{isMobile ? "Home" : "Check out other projects"}</button>
          </div>
        </Link>
      </div>
      {location.pathname !== "/operate" && (
        <div>
          <Link to="/contact">
            <div className="flex items-center p-5 rounded-2xl gap-2 text-blue-500 bg-transparent hover:text-white hover:bg-gradient-to-br hover:from-blue-400 hover:to-transparent transition-all duration-2000 ease-in-out">
              <button>
                {isMobile
                  ? "Contact"
                  : "Contact me for the full detail of the project"}
              </button>
              <button>
                <HiMiniArrowRight />
              </button>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
