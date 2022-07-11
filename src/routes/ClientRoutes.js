import { lazy } from "react";
import HomeTemplate from "@/containers/HomeTemplate";
import HomePage from "@/containers/HomeTemplate/HomePage";

const HomeTemp = lazy(() => import("@/containers/HomeTemplate"));
const ClientRoutes = {
  path: "/",
  element: <HomeTemp />,
  children: [
    {
      path: "home",
      element: <HomePage />,
    },
    { path: "movie-detail", element: <div>Movie Detail</div> },
  ],
};

export default ClientRoutes;
