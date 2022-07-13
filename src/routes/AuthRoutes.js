import { lazy } from "react";

// Pages
const AuthPage = lazy(() => import("@/containers/AuthTemplate"));
const LoginPage = lazy(() => import("@/containers/AuthTemplate/Login"));
const SignupPage = lazy(() => import("@/containers/AuthTemplate/Signup"));

const AuthRoutes = {
  path: "auth",
  element: <AuthPage />,
  children: [
    { path: "login", element: <LoginPage /> },
    { path: "signup", element: <SignupPage /> },
  ],
};

export default AuthRoutes;
