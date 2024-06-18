import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ScrollToTop from "../scroll-utils/ScrollToTop";

const ButtonOrange = ({ to, children }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    ScrollToTop();
    navigate(to);
  };
  return (
    <button
      className="bg-brightOrange hover:bg-brightOrangeHover transition-colors duration-300 uppercase text-subtitle text-pureWhite px-[30px] py-[15px] md:max-w-[160px]"
      whilehover={{ scale: 1 }}
      whiletap={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default ButtonOrange;
