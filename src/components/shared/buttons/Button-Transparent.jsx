import React from "react";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../scroll-utils/ScrollToTop";

const ButtonTransparent = ({ to, children }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    ScrollToTop();
    navigate(to);
  };
  return (
    <button
      whilehover={{ scale: 1.05 }}
      whiletap={{ scale: 0.9 }}
      duration={{ duration: 0.3 }}
      onClick={handleOnClick}
      className="bg-transparent uppercase text-subtitle text-pureBlack px-[30px] py-[14px] hover:bg-pureBlack hover:text-pureWhite outline outline-1 transition-colors duration-300"
    >
      {children}
    </button>
  );
};

export default ButtonTransparent;
