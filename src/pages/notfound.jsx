import { Link } from "react-router-dom";
import { useEffect } from "react";
// CSS
import "./notfound.css";

// Photos
import DesignHome from "../assets/footer-pictures/design-home.jpeg";
import Profile from "../assets/accessory/profile.png";
import Development from "../assets/footer-pictures/development.png";

export default function NotFound() {
  useEffect(() => {
    const lost = document.getElementById("lost");
    const redirect = document.getElementById("redirect");
    lost.style.display = "block";
    redirect.style.display = "none";

    setTimeout(() => {
      if (lost) {
        lost.classList.add("fade-out");
      }
    }, 1000);

    setTimeout(() => {
      if (lost) {
        lost.style.display = "none";
      }
      redirect.style.display = "block";
    }, 2000);

    setTimeout(() => {
      if (lost.style.display === "none") {
        redirect.classList.add("fade-in-bottom");
      }
    }, 4000);
  }, []);

  const getSize = () => {
    if (window.innerWidth < 768) {
      return 220;
    } else {
      return 250;
    }
  };

  return (
    <div>
      <h1
        id="lost"
        className="text-center md:my-56 my-80 md:text-5xl text-5xl font-bold text-white transition-all duration-3000"
      >
        Are you lost?
      </h1>
      <div
        id="redirect"
        className="transition-opacity duration-1000 opacity-100 animate-fade-in-bottom h-screen overflow-y-scroll"
      >
        <h1 className="text-center md:my-20 my-20 md:text-5xl text-2xl font-bold text-white">
          Where would you like to explore?
        </h1>
        <div className="md:grid-cols-3 md:gap-16 md:flex my-8 mx-16 md:mx-10 text-white md:justify-center">
          <Link to="/design">
            <button className="hover:bg-gray-200 hover:text-black rounded-xl hover:brightness-125">
              <img
                src={DesignHome}
                alt="Design Home"
                width={220}
                className="rounded-xl h-48 md:mx-0"
              />
              <h3 className="mx-10 my-5">Design Home</h3>
            </button>
          </Link>
          <Link to="/about">
            <button className="hover:bg-gray-200 hover:text-black rounded-xl hover:brightness-125 my-5 md:my-0">
              <img
                src={Profile}
                alt="My profile"
                width={220}
                className="rounded-xl md:mx-0"
              />
              <h3 className="mx-10 my-5">About me</h3>
            </button>
          </Link>
          <Link to="/development">
            <button className="hover:bg-gray-200 hover:text-black rounded-xl hover:brightness-125">
              <img
                src={Development}
                alt="Development"
                width={getSize()}
                className="rounded-xl md:mx-0"
              />
              <h3 className="mx-10 my-5">Software Development</h3>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
