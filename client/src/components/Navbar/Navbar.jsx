import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

import Logo from "../Logo";
import DesktopNav from "./DesktopNav";
import NavbarActions from "./NavbarActions";
import MobileMenu from "./MobileMenu";
import CartDrawer from "./CartDrawer";
import WishlistDrawer from "./WishlistDrawer";

import Login from "../Login";
import Signup from "../Signup";

import { useAuth } from "../../hooks/useAuth";
import showToast from "../../utils/showToast";

function Navbar() {
  // Navbar states
  const [show, setShow] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCart, setCloseCart] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  // Redux data
  const { userInfo } = useSelector((state) => state.auth);
  const items = useSelector((state) => state.cart);
  const wishlistItems = useSelector((state) => state.wishlist);

  // Authentication
  const { handleLogout } = useAuth();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate subtotal
  const subtotal = useMemo(() => {
    return items.reduce(
      (sum, item) => sum + Number(item.qty * item.price),
      0
    );
  }, [items]);

  // Logout handler
  const onLogoutClick = async () => {
    const res = await handleLogout();

    showToast(
      res.message || "Logout failed",
      res.success ? "success" : "error"
    );

    if (res.success) {
      setShow(true);
    }
  };

  // Place order handler
  const handlePlaceOrder = () => {
    if (!userInfo) {
      setCloseCart(false);
      setShowLogin(true);
    } else {
      alert("Proceeding to order placement...");
    }
  };

  return (
    <div
      className={`max-w-full mx-auto md:px-20 px-5 py-4 flex justify-between items-center bg-white fixed top-0 right-0 left-0 z-50 ${
        isScrolled
          ? "drop-shadow-[0_4px_25px_rgba(0,0,0,0.1)]"
          : ""
      }`}
    >
      {/* Logo */}
      <Logo />

      {/* Desktop Navigation */}
      <DesktopNav />

      {/* Navbar Actions */}
      <NavbarActions
        userInfo={userInfo}
        wishlistCount={wishlistItems.length}
        cartCount={items.length}
        show={show}
        setShow={setShow}
        setFavorite={setFavorite}
        setCloseCart={setCloseCart}
        setShowLogin={setShowLogin}
        onLogoutClick={onLogoutClick}
      />

      {/* Mobile Menu */}
      <MobileMenu
        show={show}
        userInfo={userInfo}
        setShow={setShow}
        setShowLogin={setShowLogin}
        onLogoutClick={onLogoutClick}
      />

      {/* Cart Drawer */}
      <CartDrawer
        showCart={showCart}
        setCloseCart={setCloseCart}
        items={items}
        subtotal={subtotal}
        handlePlaceOrder={handlePlaceOrder}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        favorite={favorite}
        setFavorite={setFavorite}
        wishlistItems={wishlistItems}
      />

      {/* Login Modal */}
      <Login
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        onSwitchToSignup={() => {
          setShowLogin(false);
          setShowSignup(true);
        }}
      />

      {/* Signup Modal */}
      <Signup
        isOpen={showSignup}
        onClose={() => setShowSignup(false)}
        onSwitchToLogin={() => {
          setShowSignup(false);
          setShowLogin(true);
        }}
      />
    </div>
  );
}

export default Navbar;