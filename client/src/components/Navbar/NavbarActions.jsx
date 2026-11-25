import { FaHeart } from "react-icons/fa";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiMenu3Fill } from "react-icons/ri";

function NavbarActions({
  userInfo,
  wishlistCount,
  cartCount,
  show,
  setShow,
  setFavorite,
  setCloseCart,
  setShowLogin,
  onLogoutClick,
}) {
  return (
    <div className="flex gap-x-2 md:gap-x-4 items-center md:ml-2">

      {/* Login / Logout */}
      {userInfo ? (
        <div className="hidden sm:flex items-center gap-2">
          <div
            title={userInfo.user?.name || userInfo.name}
            className="w-8 h-8 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center uppercase"
          >
            {(userInfo.user?.name || userInfo.name || "U").charAt(0)}
          </div>

          <button
            onClick={onLogoutClick}
            className="bg-zinc-200 hover:bg-zinc-300 text-zinc-800 text-sm px-3 py-1.5 rounded-xl font-medium"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={() => setShowLogin(true)}
          className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-3.5 py-1.5 rounded-xl hidden sm:block"
        >
          Login
        </button>
      )}

      {/* Wishlist */}
      <div
        onClick={() => setFavorite(true)}
        className="cursor-pointer flex items-center relative"
      >
        <FaHeart className="text-2xl text-orange-500" />

        <sup className="absolute -top-2 -right-2 min-w-[18px] h-[18px] flex items-center justify-center text-[10px] bg-orange-500 text-white rounded-full">
          {wishlistCount}
        </sup>
      </div>

      {/* Cart */}
      <div
        onClick={() => setCloseCart(true)}
        className="cursor-pointer flex items-center relative"
      >
        <RiShoppingBag4Fill className="text-2xl text-orange-500" />

        <sup className="absolute -top-2 -right-2 min-w-[18px] h-[18px] flex items-center justify-center text-[10px] bg-orange-500 text-white rounded-full">
          {cartCount}
        </sup>
      </div>

      {/* Mobile Menu Toggle */}
      {show ? (
        <GiHamburgerMenu
          className="text-2xl cursor-pointer lg:hidden"
          onClick={() => setShow(false)}
        />
      ) : (
        <RiMenu3Fill
          className="text-2xl cursor-pointer lg:hidden"
          onClick={() => setShow(true)}
        />
      )}
    </div>
  );
}

export default NavbarActions;