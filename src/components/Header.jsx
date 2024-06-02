import { FaBars } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = () => {
  return (
    <div className="w-full bg-dark_black text-light_white">
      <div className="flex justify-between gap-5 py-5 px-5 md:px-[10rem] lg:px-[10rem] border-b-2 border-x-light_white_smoke">
        <div className="flex flex-row gap-5">
          <FaBars className="h-5 md:hidden" />
          <span className="h-5 font-manrope font-extrabold mb-[0.05rem]">
            audiophile
          </span>

          <nav className="hidden md:flex gap-5 md:justify-between text-xs lg:justify-between md:pl-[15.5rem] lg:pl-[15.5rem] md:pt-[0.4rem] font-manrope">
            <a href="#home" className="font-manrope hover:text-dark_orange">
              HOME
            </a>
            <a
              href="#headphones"
              className="font-manrope hover:text-dark_orange"
            >
              HEADPHONES
            </a>
            <a href="#speakers" className="font-manrope hover:text-dark_orange">
              SPEAKERS
            </a>
            <a
              href="#earphones"
              className="font-manrope hover:text-dark_orange"
            >
              EARPHONES
            </a>
          </nav>
        </div>
        <div className="md:pt-[0.4rem]">
          <MdOutlineShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default Header;
