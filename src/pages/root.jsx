import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, useLocation } from "react-router-dom";
import Banner from "../components/banner";
import Navigation from "../components/navigation";

const queryClient = new QueryClient();

export default function Root() {
  const { pathname } = useLocation();

  return (
    <div>
      {pathname != "/received" ||
        (pathname != "/email-template" && <Navigation pathname={pathname} />)}
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
      {pathname != "/received" || (pathname != "/email-template" && <Banner />)}
    </div>
  );
}
