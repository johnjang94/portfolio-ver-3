import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Root from "./pages/root";

// Home page & About Me
import Home from "./pages/home/home";
import Home2 from "./pages/home/ho-me";
import About from "./pages/about/about";

// Design section
import TeleVU from "./pages/design/televu";
import Food from "./pages/design/food-distro";
import TuGo from "./pages/design/tugo";
import SAKHI from "./pages/design/the-sakhi";
import OPERATE from "./pages/design/operate-ease";

// Contact & Extra
import Contact from "./pages/contact";
import Received from "./pages/received";
import Sending from "./pages/sending";
import Retry from "./pages/retry";
import Template from "./pages/email/template";
import Access from "./components/access";

// Survey
import Landing from "./components/feedback/landing";
import Detail from "./components/feedback/detail";
import Sent from "./components/feedback/sent";
import Return from "./components/feedback/return";

// Wrong link
import NotFound from "./pages/notfound";
import Resume from "./pages/resume/resume";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/ho-me", element: <Home2 /> },
      { path: "/about", element: <About /> },
      // Design section
      { path: "/televu", element: <TeleVU /> },
      { path: "/food-distro", element: <Food /> },
      { path: "/tugo-insurance", element: <TuGo /> },
      { path: "/sakhi", element: <SAKHI /> },
      { path: "/operate", element: <OPERATE /> },
      // Other
      { path: "/contact", element: <Contact /> },
      { path: "/sending", element: <Sending /> },
      { path: "/received", element: <Received /> },
      { path: "/retry", element: <Retry /> },
      // Accessory
      { path: "/resume", element: <Resume /> },
      { path: "/email-template", element: <Template /> },
      { path: "/access", element: <Access /> },
      // Survey
      { path: "/landing", element: <Landing /> },
      { path: "/detail", element: <Detail /> },
      { path: "/sent", element: <Sent /> },
      { path: "/return", element: <Return /> },
      // For any wrong URL, redirect to:
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <Analytics />
    </RouterProvider>
  );
}

export default App;
