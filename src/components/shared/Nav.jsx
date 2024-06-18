import React, { useState, useEffect } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
import MobileNav from "./MobileNav";
import Cart from "./cart/Cart";
import Backdrop from "./Backdrop";
import MobileMenuButton from "./MobileMenuButton";
import NavLinks from "./NavLinks";

const Nav = ({ cartItemCount, setCartItemCount }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setShowMobileNav(false);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <div>
      <header className="bg-pureBlack sticky top-0 z-50 md:px-4">
        <nav className="mx-auto text-pureWhite text-subtitle flex justify-between py-8 max-w-[310px] md:max-w-[689px] lg:max-w-[1109px] border-b border-b-white border-opacity-20">
          <MobileMenuButton onClick={toggleMobileMenu} />

          <img
            src="/assets/shared/desktop/logo.svg"
            alt="audiophile-logo"
            onClick={() => navigate("/")}
          />

          <NavLinks />
          <div className="relative">
            <button id="shopping-cart" onClick={toggleCart}>
              <img
                src="/assets/shared/desktop/icon-cart.svg"
                alt="View shopping cart"
              />
            </button>
            {cartItemCount > 0 && (
              <div className="items-cart absolute bg-red-600 top-0 right-0 translate-y-1/2 translate-x-1/2 rounded-full py-0 px-1">
                {cartItemCount}
              </div>
            )}
          </div>
        </nav>
        {isMobileMenuOpen && (
          <>
            <Backdrop onClick={toggleMobileMenu} />
            <div
              className="fixed top-0 left-0 h-full opacity-100 w-full p-6 z-50"
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              exit={{ x: "-100vw" }}
              onClick={toggleMobileMenu}
            >
              <MobileNav />
            </div>
          </>
        )}
      </header>
      {cartOpen && (
        <>
          <Backdrop onClick={toggleCart} />
          <Cart
            cartItemCount={cartItemCount}
            setCartItemCount={setCartItemCount}
          />
        </>
      )}
    </div>
  );
};

export default Nav;
