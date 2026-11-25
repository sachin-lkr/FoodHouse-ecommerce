import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar";

function MobileMenu({
  show,
  userInfo,
  setShow,
  setShowLogin,
  onLogoutClick,
}) {
  return (
    <div
      className={`lg:hidden flex flex-col gap-6 absolute ${
        !show
          ? "left-1/2 transform duration-500"
          : "-left-full transform duration-500"
      } -translate-x-1/2 top-24 backdrop-blur-lg rounded-2xl bg-orange-500/50 p-8 items-center`}
    >
      <NavLink to="/" onClick={() => setShow(true)} className="navlink">
        Home
      </NavLink>

      <NavLink
        to="/about"
        onClick={() => setShow(true)}
        className="navlink"
      >
        About Us
      </NavLink>

      <a
        href="#process"
        onClick={() => setShow(true)}
        className="navlink"
      >
        Process
      </a>

      <NavLink
        to="/contact"
        onClick={() => setShow(true)}
        className="navlink"
      >
        Contact Us
      </NavLink>

      <div className="w-full">
        <SearchBar />
      </div>

      {userInfo ? (
        <button
          onClick={onLogoutClick}
          className="bg-zinc-800 text-white px-5 py-1.5 rounded-xl font-medium"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            setShow(true);
            setShowLogin(true);
          }}
          className="bg-orange-500 text-white px-5 py-1.5 rounded-xl font-medium"
        >
          Login
        </button>
      )}
    </div>
  );
}

export default MobileMenu;