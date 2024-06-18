import React from "react";
import { useNavigate } from "react-router";
import ScrollToTop from "../scroll-utils/ScrollToTop";
import NavLinks from "./NavLinks";

const Nav = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    ScrollToTop();
    navigate("/");
  };
  return (
    <header className="bg-pureBlack">
      <nav className="mx-auto text-pureWhite text-subtitle flex flex-col lg:flex-row justify-between items-center md:items-start gap-12 text-center py-8 max-w-[310px] md:max-w-[689px] lg:max-w-[1109px]">
        <img
          src="/assets/shared/desktop/logo.svg"
          alt="audiophile-logo"
          onClick={handleOnClick}
          className="mx-auto md:mx-0"
        />

        <NavLinks />
      </nav>
    </header>
  );
};

export default Nav;
