import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "../components/mainNav";
import Banner from "../components/banner";

const queryClient = new QueryClient();

export default function Root() {
  const { pathname } = useLocation();

  return (
    <div className="bg-slate-100">
      <Nav pathname={pathname} />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
      <Banner />
    </div>
  );
}
