import { lazy } from "react";
import { Navigate } from "react-router-dom";

// Authentication Guard
import RequireAuth from "@/guard";

// Pages
const AdminTemplate = lazy(() => import("@/containers/AdminTemplate"));

// Constants
import { ROLE } from "@/constants";

const AdminRoutes = {
  path: "admin",
  element: (
    <RequireAuth roles={[ROLE.ADMIN]}>
      <AdminTemplate />
    </RequireAuth>
  ),
  children: [
    { path: "", element: <Navigate replace to="/admin/manage-user" /> },
    { path: "user-management", element: <div>User Management</div> },
    { path: "movie-management", element: <div>Movie Management </div> },
  ],
};

export default AdminRoutes;
