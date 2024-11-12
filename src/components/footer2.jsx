import { HiMiniArrowRight } from "react-icons/hi2";
import { HiMiniArrowLongLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function OtherMenu() {
  return (
    <div className="md:flex md:items-center md:space-x-40 justify-center space-y-10 md:space-y-0 mx-8 md:mx-0">
      <Link to="/">
        <div className="flex items-center p-5 rounded-2xl gap-2 text-blue-500 bg-transparent hover:text-white hover:bg-gradient-to-br hover:from-blue-400 hover:to-transparent transition-all duration-2000 ease-in-out">
          <button>
            <HiMiniArrowLongLeft />
          </button>
          <button>Check out other projects</button>
        </div>
      </Link>
      <a href="mailto:jscolbe9675@gmail.com">
        <div className="flex items-center p-5 rounded-2xl gap-2 text-blue-500 bg-transparent hover:text-white hover:bg-gradient-to-br hover:from-blue-400 hover:to-transparent transition-all duration-2000 ease-in-out">
          <button>Contact me for the full detail of the project</button>
          <button>
            <HiMiniArrowRight />
          </button>
        </div>
      </a>
    </div>
  );
}
