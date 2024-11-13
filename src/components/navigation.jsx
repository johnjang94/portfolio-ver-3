import Desktop from "./desktop";
import Mobile from "./mobile";
import useWindowSize from "./window-size";
import { useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();
  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <div>
      {isMobile ? (
        <Mobile pathname={location.pathname} />
      ) : (
        <Desktop pathname={location.pathname} />
      )}
    </div>
  );
}
