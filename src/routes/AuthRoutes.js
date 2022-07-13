import { lazy } from "react";

// Pages
const AuthPage = lazy(() => import("@/templates/AuthTemplate"));
const LoginPage = lazy(() => import("@/templates/AuthTemplate/Login"));
const SignupPage = lazy(() => import("@/templates/AuthTemplate/Signup"));

const AuthRoutes = {
  path: "auth",
  element: <AuthPage />,
  children: [
    { path: "login", element: <LoginPage /> },
    { path: "signup", element: <SignupPage /> },
  ],
};

export default AuthRoutes;
