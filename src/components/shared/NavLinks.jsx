import React from "react";
import { useNavigate } from "react-router-dom";

const linkClassName =
  "hover:text-brightOrange transition-colors duration-300 uppercase";

function NavLinks() {
  const navigate = useNavigate();

  return (
    <div>
      <ul className="hidden lg:flex gap-[34px]">
        <li onClick={() => navigate("/")} className={linkClassName}>
          Home
        </li>
        <li onClick={() => navigate("/headphones")} className={linkClassName}>
          Headphones
        </li>
        <li onClick={() => navigate("/speakers")} className={linkClassName}>
          Speakers
        </li>
        <li onClick={() => navigate("/earphones")} className={linkClassName}>
          Earphones
        </li>
      </ul>
    </div>
  );
}

export default NavLinks;
