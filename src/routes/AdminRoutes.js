import { lazy } from "react";

import { Navigate } from "react-router-dom";

// Authentication Guard
import RequireAuth from "@/guard";

// Pages
const AdminTemplate = lazy(() => import("@/templates/AdminTemplate"));

const AdminRoutes = {
  path: "admin",
  element: (
    <RequireAuth>
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
