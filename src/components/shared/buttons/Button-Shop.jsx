import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ScrollToTop from "../scroll-utils/ScrollToTop";

const ButtonShop = ({ to, onClick, children }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    ScrollToTop();
    navigate(to);
  };
  return (
    <button
      className="text-gray hover:text-brightOrange transition-colors duration-300"
      onClick={handleOnClick}
      whilehover={{ scale: 1.1 }}
      whiletap={{ scale: 0.9 }}
    >
      {children || (
        <>
          SHOP{" "}
          <img
            className="inline-block align-middle -mt-1"
            src="/assets/shared/desktop/icon-arrow-right.svg"
            aria-label="hidden"
          />
        </>
      )}
    </button>
  );
};

export default ButtonShop;
