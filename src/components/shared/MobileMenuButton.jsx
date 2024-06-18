import React from "react";

const MobileMenuButton = ({ onClick }) => {
  return (
    <button className="lg:hidden" onClick={onClick}>
      <img src="/assets/shared/mobile/hamburger.svg" alt="menu" />
    </button>
  );
};

export default MobileMenuButton;
