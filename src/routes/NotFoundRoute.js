import { lazy } from "react";

// Pages
const NotFoundPage = lazy(() => import("@/containers/NotFoundPage"));

const NotFoundRoute = {
  path: "*",
  element: <NotFoundPage />,
};

export default NotFoundRoute;
