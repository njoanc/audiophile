import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Nav from "./footer/Nav";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-pureBlack md:px-4">
      <div className="mx-auto md:max-w-[689px] lg:max-w-[1109px] relative">
        <hr className="absolute w-[101px] h-[4px] bg-brightOrange left-1/2 transform -translate-x-1/2 md:left-auto md:transform-none" />

        <Nav />
        <div className="flex flex-col gap-12">
          <p className="text-pureWhite opacity-50 text-center max-w-[327px] mx-auto md:mx-0 md:text-left lg:max-w-[540px]">
            Audiophile is an all-in-one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <div className="flex flex-col-reverse md:flex-row-reverse md:justify-between gap-12 pb-12">
            <ul className="social-links flex justify-center gap-4 items-center">
              <li>
                <Link aria-label="Facebook">
                  <FaFacebookF
                    className="text-[white] group-hover:bg-brightOrange group-hover:text-[black] transition-colors duration-600"
                    size={24}
                  />
                </Link>
              </li>
              <li>
                <Link aria-label="Twitter">
                  <FaTwitter
                    className="text-[white] group-hover:bg-brightOrange group-hover:text-[black] transition-colors duration-600"
                    size={24}
                  />
                </Link>
              </li>
              <li>
                <Link aria-label="Instagram">
                  <FaInstagram
                    className="text-[white] group-hover:bg-brightOrange group-hover:text-[black] transition-colors duration-600"
                    size={24}
                  />
                </Link>
              </li>
            </ul>
            <p className="text-pureWhite opacity-50 text-center">
              Copyright &#64;{currentYear}. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
