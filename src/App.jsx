import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<NotFound />}>
      {/* Main Routes */}
      <Route index element={<Home />} />
      <Route path="ho-me" element={<Home2 />} />
      <Route path="about" element={<About />} />

      {/* Design Section */}
      <Route path="televu" element={<TeleVU />} />
      <Route path="food-distro" element={<Food />} />
      <Route path="tugo-insurance" element={<TuGo />} />
      <Route path="sakhi" element={<SAKHI />} />
      <Route path="operate" element={<OPERATE />} />

      {/* Contact & Extra */}
      <Route path="contact" element={<Contact />} />
      <Route path="sending" element={<Sending />} />
      <Route path="received" element={<Received />} />
      <Route path="retry" element={<Retry />} />
      <Route path="resume" element={<Resume />} />
      <Route path="email-template" element={<Template />} />
      <Route path="access" element={<Access />} />

      {/* Survey - Modal 방식으로 변경 */}
      <Route path="landing" element={<Landing />} modal />
      <Route path="detail" element={<Detail />} modal />
      <Route path="sent" element={<Sent />} modal />
      <Route path="return" element={<Return />} modal />

      {/* Fallback */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router}>
        <Analytics />
      </RouterProvider>
    </HelmetProvider>
  );
}

export default App;
