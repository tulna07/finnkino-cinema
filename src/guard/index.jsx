import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks";

const RequireAuth = ({ children }) => {
  const auth = useAuth();

  return auth.user ? children : <Navigate to="/auth/login" />;
};

export default RequireAuth;
