import { IoSearchSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiMenu3Fill } from "react-icons/ri";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { RxCross2 } from "react-icons/rx";
import CartCard from "../components/CartCard";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import WishlistCart from "../components/WishlistCart";

function Navbar() {
  const [show, setShow] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCart, setCloseCart] = useState(false);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [subtotal, setSubtotal] = useState(0);

  const items = useSelector((state) => state.cart);

  useEffect(() => {
    const total = items.reduce(
      (sum, item) => sum + Number(item.qty * item.price),
      0,
    );
    setSubtotal(total);
  }, [items]);
  const wishlistItems = useSelector((state) => state.wishlist);

  return (
    <div
      className={`max-w-full mx-auto md:px-20 px-5 py-4  flex justify-between bg-white fixed top-0 right-0 left-0  z-50  ${isScrolled ? "drop-shadow-[0_4px_25px_rgba(0,0,0,0.1)]" : ""}`}
    >
      {/* logo */}
      <div>
        <Logo />
      </div>
      <div className="hidden lg:flex  flex-1 md:items-center   ">
        <ul className="flex flex-1   justify-center gap-x-15 ">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? " text-orange-500 font-semibold" : "navlink"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <a href="#process" className="navlink">
              Process
            </a>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? " text-orange-500 font-semibold" : "navlink"
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? " text-orange-500 font-semibold" : "navlink"
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        <div className="flex border-orange-500  border-2 p-1 rounded-full ">
          <input
            type="text"
            placeholder="Search..."
            className="focus:outline-none px-3"
          />
          <IoSearchSharp className="text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 rounded-full p-1" />
        </div>
      </div>
      {/* icons */}
      <div className="flex gap-x-2 md:gap-x-4 items-center  md:ml-2  ">
        <div
          className="cursor-pointer flex justify-center items-center relative"
          onClick={() => setFavorite(true)}
        >
          <FaHeart className="text-2xl text-orange-500" />
          <sup className="absolute -top-2 -right-2 min-w-[18px] h-[18px] flex items-center justify-center text-[10px] bg-orange-500 text-white rounded-full">
            {wishlistItems.length}
          </sup>
        </div>
        <div
          className="cursor-pointer flex justify-center items-center relative"
          onClick={() => setCloseCart(true)}
        >
          <RiShoppingBag4Fill className="text-2xl text-orange-500" />
          <sup className="absolute -top-2 -right-2 min-w-[18px] h-[18px] flex items-center justify-center text-[10px] bg-orange-500 text-white rounded-full">
            {items.length}
          </sup>
        </div>
        {show ? (
          <GiHamburgerMenu
            className="text-2xl cursor-pointer lg:hidden"
            onClick={() => {
              setShow(false);
            }}
          />
        ) : (
          <RiMenu3Fill
            className="text-2xl font-bold"
            onClick={() => {
              setShow(true);
            }}
          />
        )}
      </div>

      <div>
        <ul
          className={`flex flex-col gap-6 absolute  ${!show ? "left-1/2 transform duration-500" : "-left-full transform duration-500"} transform -translate-x-1/2 top-30 backdrop-blur-lg rounded-2xl bg-orange-500/50 p-8 items-center`}
        >
          <li>
            <a href="#" className=" navlink text-orange-500 ">
              Home
            </a>
          </li>
          <li>
            <NavLink to="/about" className="navlink">
              About Us
            </NavLink>
          </li>
          <li>
            <a href="#" className="navlink">
              Process
            </a>
          </li>
          <li>
            <NavLink to="contact" className="navlink">
              Contact Us
            </NavLink>
          </li>
          <li className="flex border-orange-500  border-2 p-1 rounded-full ">
            <input
              type="text"
              placeholder="Search..."
              className="focus:outline-none px-3"
            />
            <IoSearchSharp className="text-3xl text-white bg-orange-500 rounded-full p-1" />
          </li>
        </ul>
      </div>
      {/* Add to Cart */}
      <nav
        className={` lg:w-[30vw] w-[100vw] h-screen bg-white fixed top-0 right-0 py-10 px-4 transition-all duration-500 shadow-xl ${showCart ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className=" flex justify-between">
          <h1 className="text-xl font-bold text-orange-500 ">Order Items</h1>
          <RxCross2
            className="text-2xl font-bold text-orange-500 cursor-pointer"
            onClick={() => setCloseCart(false)}
          />
        </div>
        {/* card Add */}
        <div className="max-h-[60vh] overflow-y-auto ">
          {items.map((item, index) => {
            return <CartCard key={index} items={item} />;
          })}
        </div>
        {/* price count */}
        {items.length > 0 ? (
          <div>
            <div className="border-y border-zinc-500 px-10">
              <div className="flex justify-between pt-2">
                <span>Subtotal</span>
                <span className="text-orange-500">
                  Rs {subtotal.toFixed(2)}/-
                </span>
              </div>
              <div className="flex justify-between ">
                <span>Delivery Fee</span>
                <span className="text-orange-500">Rs 50/-</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between px-10 my-2">
                <span className="font-bold">Total</span>
                <span className="font-bold">
                  RS {(subtotal + 50).toFixed(2)}/-
                </span>
              </div>
              <button className="text-center py-2 px-10 rounded-2xl bg-orange-500 text-white font-bold cursor-pointer">
                Place Order
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <h1 className="text-5xl font-bold text-orange-500">
              Cart is Empty
            </h1>
          </div>
        )}
      </nav>

      {/* Your Wishlist */}
      <nav
        className={` lg:w-[30vw] w-[100vw] h-screen bg-white fixed top-0 right-0 py-10 px-4 transition-all duration-500 shadow-xl ${favorite ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className=" flex justify-between">
          <h1 className="text-xl font-bold text-orange-500 ">Your Wishlist</h1>
          <RxCross2
            className="text-2xl font-bold text-orange-500"
            onClick={() => setFavorite(false)}
          />
        </div>
        {/* card Add */}
        <div className="max-h-[60vh] overflow-y-auto ">
          {wishlistItems.map((item) => (
            <WishlistCart key={item.id} item={item} />
          ))}
        </div>
        {/* price count */}
        {wishlistItems.length > 0 ? (
          <>
            {" "}
            <div className="border-y border-zinc-500 px-10">
              <div className="flex justify-between py-2">
                <span className="font-bold">Total favorite items</span>
                <span className="font-bold">{wishlistItems.length}</span>
              </div>
            </div>
            <div className="flex flex-col mt-2">
              <button className="text-center py-2 px-10 rounded-2xl bg-orange-500 text-white font-bold cursor-pointer">
                All clear
              </button>
            </div>
          </>
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <h1 className="text-4xl font-bold text-orange-500">
              Wishlist is Empty
            </h1>
          </div>
        )}
      </nav>
    </div>
  );
}
export default Navbar;
