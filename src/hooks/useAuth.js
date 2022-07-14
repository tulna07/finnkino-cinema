const useAuth = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const login = (user) => {
    user = { ...user, role: user.maLoaiNguoiDung };
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => localStorage.removeItem("user");

  return { user, login, logout };
};

export default useAuth;
