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

export const isNotRegistered = (pathname) =>
  !registeredPaths.includes(pathname);

export const getLogoSrc = () => Logo;

export const getTextColor = () => "text-black";
