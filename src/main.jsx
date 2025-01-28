import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

function gtag(...args) {
  window.dataLayer.push(args);
}

if (
  import.meta.env.VITE_ENABLE_CLARITY === "true" &&
  import.meta.env.VITE_CLARITY_ID
) {
  (function (c, l, a, r, i, t, y) {
    c[a] =
      c[a] ||
      function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
    t = l.createElement(r);
    t.async = true;
    t.src = `https://www.clarity.ms/tag/${i}`;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window, document, "clarity", "script", import.meta.env.VITE_CLARITY_ID);
}

if (import.meta.env.VITE_ENABLE_GA === "true" && import.meta.env.VITE_GA_ID) {
  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    const f = d.getElementsByTagName(s)[0];
    const j = d.createElement(s);
    j.async = true;
    j.src = `https://www.googletagmanager.com/gtag/js?id=${i}`;
    f.parentNode.insertBefore(j, f);
  })(window, document, "script", "dataLayer", import.meta.env.VITE_GA_ID);

  window.dataLayer = window.dataLayer || [];
  gtag("js", new Date());
  gtag("config", import.meta.env.VITE_GA_ID);
}

if (
  import.meta.env.VITE_ENABLE_HOTJAR === "true" &&
  import.meta.env.VITE_HJID &&
  import.meta.env.VITE_HJSV
) {
  (function (h, o, t, j, a, r) {
    h.hj =
      h.hj ||
      function () {
        (h.hj.q = h.hj.q || []).push(arguments);
      };
    h._hjSettings = {
      hjid: import.meta.env.VITE_HJID,
      hjsv: import.meta.env.VITE_HJSV,
    };
    a = o.getElementsByTagName("head")[0];
    r = o.createElement("script");
    r.async = true;
    r.src = `https://static.hotjar.com/c/hotjar-${h._hjSettings.hjid}.js?sv=${h._hjSettings.hjsv}`;
    a.appendChild(r);
  })(window, document);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
