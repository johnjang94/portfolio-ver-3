import Desktop from "./desktop";
import Mobile from "./mobile";
import useWindowSize from "./window-size";

export default function Navigation() {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  return <div>{isMobile ? <Mobile /> : <Desktop />}</div>;
}
