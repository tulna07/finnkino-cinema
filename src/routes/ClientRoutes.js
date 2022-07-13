import { lazy } from "react";

const HomeTemp = lazy(() => import("@/containers/HomeTemplate"));
const HomePage = lazy(() => import("@/containers/HomeTemplate/HomePage"));

const ClientRoutes = {
  path: "/",
  element: <HomeTemp />,
  children: [
    {
      path: "",
      element: <HomePage />,
    },
    { path: "movie-detail", element: <div>Movie Detail</div> },
  ],
};

export default ClientRoutes;
