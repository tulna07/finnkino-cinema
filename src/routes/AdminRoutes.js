import { lazy } from "react";
import { Navigate } from "react-router-dom";

// Route Guard
import RequireAuth from "@/guard";

// Constants
import { ROLE } from "@/constants";

// Pages
const AdminTemplate = lazy(() => import("@/containers/AdminTemplate"));
const MovieDashboard = lazy(() => import("@/containers/AdminTemplate/MovieDashBoard"));
const UserDashboard = lazy(() => import("@/containers/AdminTemplate/UserDashBoard"));

const AdminRoutes = {
  path: "admin",
  element: (
    <RequireAuth roles={[ROLE.ADMIN]}>
      <AdminTemplate />
    </RequireAuth>
  ),
  children: [
    { path: "", element: <Navigate to="user-management" /> },
    { path: "user-management", element: <UserDashboard /> },
    { path: "movie-management", element: <MovieDashboard /> },
  ],
};

export default AdminRoutes;
