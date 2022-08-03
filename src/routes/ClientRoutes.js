import { lazy } from "react";

// Route Guard
import RequireAuth from "@/guard";

// Constants
import { ROLE } from "@/constants";

// Pages
const HomeTemp = lazy(() => import("@/containers/HomeTemplate"));
const HomePage = lazy(() => import("@/containers/HomeTemplate/HomePage"));
const MovieDetailPage = lazy(() => import("@/containers/HomeTemplate/MovieDetailsPage"));
const TicketBookingPage = lazy(() => import("@/containers/HomeTemplate/TicketBookingPage"));
const ProfilePage = lazy(() => import("@/containers/HomeTemplate/ProfilePage"));

const ClientRoutes = {
  path: "/",
  element: <HomeTemp />,
  children: [
    {
      path: "",
      element: <HomePage />,
    },
    { path: "movie-detail/:id", element: <MovieDetailPage /> },
    {
      path: "ticket-booking/:scheduleId",
      element: (
        <RequireAuth roles={[ROLE.ADMIN, ROLE.CLIENT]}>
          <TicketBookingPage />
        </RequireAuth>
      ),
    },
    {
      path: "profile",
      element: (
        <RequireAuth roles={[ROLE.ADMIN, ROLE.CLIENT]}>
          <ProfilePage />
        </RequireAuth>
      ),
    },
  ],
};

export default ClientRoutes;
