import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../scroll-utils/ScrollToTop";

const ButtonTransparent = ({ to, children }) => {
  return (
    <Link to={to}>
      <button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        duration={{ duration: 0.3 }}
        onClick={ScrollToTop}
        className="bg-transparent uppercase text-subtitle text-pureBlack px-[30px] py-[14px] hover:bg-pureBlack hover:text-pureWhite outline outline-1 transition-colors duration-300"
      >
        {children}
      </button>
    </Link>
  );
};

export default ButtonTransparent;
