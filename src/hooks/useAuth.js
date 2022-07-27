import { useState, useEffect } from "react";

const useAuth = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const login = (user) => setUser({ ...user, role: user.maLoaiNguoiDung });

  const logout = () => setUser(null);

  return { user, login, logout };
};

export default useAuth;
