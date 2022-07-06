import { lazy } from "react";

const AuthRoutes = {
  path: "auth",
  element: <div>Auth</div>,
  children: [
    { path: "login", element: <div>Login</div> },
    { path: "signup", element: <div>Signup</div> },
  ],
};

export default AuthRoutes;
