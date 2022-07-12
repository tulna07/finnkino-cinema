import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "@/containers/HomeTemplate/_components/Navbar";

function HomeTemplate() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default HomeTemplate;
