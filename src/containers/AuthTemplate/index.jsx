import { Outlet } from "react-router-dom";

const AuthTemplate = () => {
  return (
    <div style={{ backgroundColor: "#141414", minHeight: "100vh" }}>
      <div>AuthTemplate</div>
      <Outlet />
    </div>
  );
};

export default AuthTemplate;
