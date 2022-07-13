import { lazy } from "react";

const NotFoundPage = lazy(() => import("@/templates/NotFoundPage"));

const NotFoundRoute = {
  path: "*",
  element: <NotFoundPage />,
};

export default NotFoundRoute;
