import { lazy } from "react";

const AdminRoutes = {
  path: "admin",
  element: <div>Admin</div>,
  children: [
    { path: "dashboard", element: <div>Dashboard</div> },
    { path: "add-user", element: <div>Add User</div> },
  ],
};

export default AdminRoutes;
