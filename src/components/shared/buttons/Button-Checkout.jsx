import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ButtonCheckout = () => {
  const navigate = useNavigate();
  return (
    <button
      className="w-full bg-brightOrange hover:bg-brightOrangeHover transition-colors duration-300 uppercase text-subtitle text-pureWhite px-[30px] py-[15px]"
      whilehover={{ scale: 1 }}
      whiletap={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}
      onClick={() => navigate("./checkout")}
    >
      Checkout
    </button>
  );
};

export default ButtonCheckout;
