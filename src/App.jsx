import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/root";

// Home page & About Me
import Home from "./pages/home/home";
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
      { path: "/home", element: <Home /> },
      { path: "/about", element: <About /> },
      // Design section
      { path: "/televu", element: <TeleVU /> },
      { path: "/food-distro", element: <Food /> },
      { path: "/tugo-insurance", element: <TuGo /> },
      { path: "/sakhi", element: <SAKHI /> },
      { path: "/operate", element: <OPERATE /> },
      // Other
      { path: "/contact", element: <Contact /> },
      { path: "/resume", element: <Resume /> },
      { path: "/received", element: <Received /> },
      // For any wrong URL, redirect to:
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
