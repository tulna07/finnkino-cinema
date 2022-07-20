import { lazy } from "react";
import { Navigate } from "react-router-dom";

// Pages
const AuthPage = lazy(() => import("@/containers/AuthTemplate"));
const LoginPage = lazy(() => import("@/containers/AuthTemplate/Login"));
const SignupPage = lazy(() => import("@/containers/AuthTemplate/Signup"));

const AuthRoutes = {
  path: "auth",
  element: <AuthPage />,
  children: [
    { path: "", element: <Navigate to="login" replace /> },
    { path: "login", element: <LoginPage /> },
    { path: "signup", element: <SignupPage /> },
  ],
};

export default AuthRoutes;
