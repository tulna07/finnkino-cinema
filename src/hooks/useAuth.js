import { useContext } from "react";

const useAuth = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const login = (user) => localStorage.setItem("user", JSON.stringify(user));
  const logout = () => localStorage.removeItem("user");

  return { user, login, logout };
};

export default useAuth;
