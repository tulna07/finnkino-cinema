import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks";

const RequireAuth = ({ children, role }) => {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/auth/login" />;
  }

  return auth.user ? children : <Navigate to="/auth/login" />;
};

export default RequireAuth;
