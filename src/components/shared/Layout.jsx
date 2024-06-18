import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "./Nav";
import About from "./About";
import Footer from "./Footer";

const Layout = ({ cartItemCount, setCartItemCount }) => {
  const location = useLocation();
  const hideAbout = location.pathname === "/checkout";

  return (
    <div>
      <Nav cartItemCount={cartItemCount} setCartItemCount={setCartItemCount} />
      <Outlet />
      {!hideAbout && <About />}
      <Footer />
    </div>
  );
};

export default Layout;
