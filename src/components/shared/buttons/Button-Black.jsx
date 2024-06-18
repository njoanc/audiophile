import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ScrollToTop from "../scroll-utils/ScrollToTop";

const ButtonBlack = ({ to, children }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    ScrollToTop();
    navigate(to);
  };
  return (
    <button
      whilehover={{ scale: 1.05 }}
      whiletap={{ scale: 0.9 }}
      duration={{ duration: 0.3 }}
      onClick={handleClick}
      className="bg-pureBlack uppercase text-subtitle text-pureWhite px-[30px] py-[15px]  hover:bg-[#4C4C4C] transition-colors duration-300"
    >
      {children}
    </button>
  );
};

export default ButtonBlack;
