import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Photos
import DesignHome from "../assets/footer-pictures/design-home.jpeg";
import Profile from "../assets/accessory/profile.png";

export default function Footer() {
  const [opacity, setOpacity] = useState(0);
  const footerRef = useRef(null);

  useEffect(() => {
    const footerNode = footerRef.current;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const ratio = entry.intersectionRatio;
          setOpacity(ratio >= 0.3 ? 1 : ratio * 2);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: Array.from({ length: 101 }, (_, i) => i / 100),
    });

    if (footerNode) {
      observer.observe(footerNode);
    }

    return () => {
      if (footerNode) {
        observer.unobserve(footerNode);
      }
    };
  }, []);

  return (
    <div
      ref={footerRef}
      className="text-white mt-20 pt-12 pb-5 transition-opacity duration-500"
      style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}
    >
      <section className="text-center">
        <h3 className="text-center text-3xl my-5">Explore Further</h3>
        <p className="text-center">CONTINUE YOUR JOURNEY</p>
        <div className="md: grid md:grid-cols-2 md:gap-16 justify-center md:flex my-5">
          <Link to="/ho-me">
            <button className="hover:bg-gray-200 hover:text-black rounded-xl hover:brightness-125 p-3">
              <img
                src={DesignHome}
                alt="Design Home"
                width={400}
                className="rounded-xl h-80"
              />
              <h3 className="mx-10 my-5">Home</h3>
            </button>
          </Link>
          <Link to="/about">
            <button className="hover:bg-gray-200 hover:text-black rounded-xl hover:brightness-125 my-5 md:my-0 p-3">
              <img
                src={Profile}
                alt="My profile"
                width={375}
                className="rounded-xl"
              />
              <h3 className="mx-10 my-5">About me</h3>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
