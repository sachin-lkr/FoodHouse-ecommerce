import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar";

function DesktopNav() {
  return (
    <div className="hidden lg:flex flex-1 items-center">
      <ul className="flex flex-1 justify-center gap-x-15">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-orange-500 font-semibold" : "navlink"
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
              isActive ? "text-orange-500 font-semibold" : "navlink"
            }
          >
            About Us
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-orange-500 font-semibold" : "navlink"
            }
          >
            Contact Us
          </NavLink>
        </li>
      </ul>

      <SearchBar />
    </div>
  );
}

export default DesktopNav;