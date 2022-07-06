import { lazy } from "react";

const ClientRoutes = {
  path: "/",
  element: <div>Home</div>,
  children: [
    { path: "home", element: <div>Home</div> },
    { path: "movie-detail", element: <div>Movie Detail</div> },
  ],
};

export default ClientRoutes;
