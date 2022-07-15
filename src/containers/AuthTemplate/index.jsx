import { Outlet } from "react-router-dom";

// Materrial UI
import { Box } from "@mui/material";

const AuthTemplate = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        position: "relative",
        background:
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/1ef84595-1fdb-4404-adac-15215ceeb3ae/38067f6b-ec2e-43a3-816d-44bf2aeddd21/VN-en-20220711-popsignuptwoweeks-perspective_alpha_website_large.jpg') center / cover no-repeat",
        "::before": {
          content: '""',
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,.3)",
          backgroundImage: "linear-gradient(0deg,rgba(0,0,0,.8) 0,transparent 60%,rgba(0,0,0,.8))",
          position: "absolute",
          top: "0",
          left: "0",
        },
      }}
    >
      <Outlet />
    </Box>
  );
};

export default AuthTemplate;
