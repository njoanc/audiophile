import React from "react";
import { Link } from "react-router-dom";

const ButtonCheckout = () => {
  return (
    <Link to={"./checkout"}>
      <button
        className="w-full bg-brightOrange hover:bg-brightOrangeHover transition-colors duration-300 uppercase text-subtitle text-pureWhite px-[30px] py-[15px]"
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        Checkout
      </button>
    </Link>
  );
};

export default ButtonCheckout;
