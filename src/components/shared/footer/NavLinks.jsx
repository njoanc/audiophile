import React from "react";
import { useNavigate } from "react-router";
import ScrollToTop from "../scroll-utils/ScrollToTop";

const linkClassName =
  "hover:text-brightOrange transition-colors duration-300 uppercase";

const NavLinks = () => {
  const navigate = useNavigate();

  const handleOnClick = (path) => {
    ScrollToTop();
    navigate(path);
  };

  return (
    <ul className="flex flex-col gap-4 md:flex-row">
      <li className={linkClassName} onClick={() => handleOnClick("/")}>
        Home
      </li>
      <li
        className={linkClassName}
        onClick={() => handleOnClick("/headphones")}
      >
        Headphones
      </li>
      <li className={linkClassName} onClick={() => handleOnClick("/speakers")}>
        Speakers
      </li>
      <li className={linkClassName} onClick={() => handleOnClick("/earphones")}>
        Earphones
      </li>
    </ul>
  );
};

export default NavLinks;
