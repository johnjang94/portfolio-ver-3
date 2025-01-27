import Logo from "/logo-512.png";

export const registeredPaths = [
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

const allowedReferrers = [
  "linkedin.com",
  "indeed.com",
  "portfolio-ver-3-n474q0s6d-johnjang94s-projects.vercel.app",
];

export const canAccessResume = () => {
  const referrer = document.referrer;
  const params = new URLSearchParams(window.location.search);
  const token = params.get("token");

  if (
    token === "secure-token" ||
    (referrer && allowedReferrers.some((url) => referrer.includes(url)))
  ) {
    return true;
  }

  return false;
};

export const isNotRegistered = (pathname) =>
  !registeredPaths.includes(pathname);
export const getLogoSrc = () => Logo;
export const getTextColor = () => "text-black";
