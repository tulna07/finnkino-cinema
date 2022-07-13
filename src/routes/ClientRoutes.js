import { lazy } from "react";

// Authentication Guard
import RequireAuth from "@/guard";

// Pages
const HomeTemp = lazy(() => import("@/containers/HomeTemplate"));
const HomePage = lazy(() => import("@/containers/HomeTemplate/HomePage"));

// Constants
import { ROLE } from "@/constants";

const ClientRoutes = {
  path: "/",
  element: <HomeTemp />,
  children: [
    {
      path: "",
      element: <HomePage />,
    },
    { path: "movie-detail", element: <div>Movie Detail</div> },
    {
      path: "ticket-booking",
      element: (
        <RequireAuth roles={[ROLE.ADMIN, ROLE.CLIENT]}>
          <div>Ticket Booking</div>
        </RequireAuth>
      ),
    },
    {
      path: "profile",
      element: (
        <RequireAuth roles={[ROLE.ADMIN, ROLE.CLIENT]}>
          <div>Profile</div>
        </RequireAuth>
      ),
    },
  ],
};

export default ClientRoutes;
