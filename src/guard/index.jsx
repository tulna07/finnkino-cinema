import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks";

const RequireAuth = ({ children, roles }) => {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/auth/login" />;
  }

  const isAllowed = roles.includes(auth.user?.role);
  if (isAllowed) {
    return children;
  }

  return <Navigate to="/" />;
};

export default RequireAuth;
