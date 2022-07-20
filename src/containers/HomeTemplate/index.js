import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "@/containers/HomeTemplate/_components/Navbar";
import Footer from "./_components/Footer";

function HomeTemplate() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default HomeTemplate;
