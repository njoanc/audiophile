import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../scroll-utils/ScrollToTop";

const ButtonBlack = ({ to, children }) => {
  return (
    <Link to={to}>
      <button
        whilehover={{ scale: 1.05 }}
        whiletap={{ scale: 0.9 }}
        duration={{ duration: 0.3 }}
        onClick={ScrollToTop}
        className="bg-pureBlack uppercase text-subtitle text-pureWhite px-[30px] py-[15px]  hover:bg-[#4C4C4C] transition-colors duration-300"
      >
        {children}
      </button>
    </Link>
  );
};

export default ButtonBlack;
