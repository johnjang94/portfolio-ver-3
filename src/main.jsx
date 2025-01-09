import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

if (
  import.meta.env.VITE_ENABLE_GTAG === "true" &&
  import.meta.env.VITE_GTAG_ID
) {
  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    const f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l !== "dataLayer" ? `&l=${l}` : "";
    j.async = true;
    j.src = `https://www.googletagmanager.com/gtag/js?id=${i}${dl}`;
    f.parentNode.insertBefore(j, f);

    w.gtag =
      w.gtag ||
      function () {
        w.dataLayer.push(arguments);
      };
    w.gtag("js", new Date());
    w.gtag("config", i);
  })(window, document, "script", "dataLayer", import.meta.env.VITE_GTAG_ID);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
