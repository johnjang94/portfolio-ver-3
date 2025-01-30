import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, useLocation } from "react-router-dom";
import Banner from "../components/banner";
import Navigation from "../components/navigation";
import Home2 from "../pages/home/ho-me";

const queryClient = new QueryClient();

export default function Root() {
  const { pathname } = useLocation();
  const modalRoutes = ["/landing", "/detail", "/sent", "/return"];
  const isModalRoute = modalRoutes.includes(pathname);

  return (
    <div className="relative">
      {pathname !== "/received" && pathname !== "/email-template" && (
        <Navigation pathname={pathname} />
      )}

      <QueryClientProvider client={queryClient}>
        {isModalRoute && <Home2 />}
        <div
          className={
            isModalRoute
              ? "fixed inset-0 flex items-center justify-center z-50"
              : ""
          }
        >
          <Outlet />
        </div>
      </QueryClientProvider>

      {pathname !== "/received" && pathname !== "/email-template" && <Banner />}
    </div>
  );
}
