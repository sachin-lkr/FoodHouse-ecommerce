
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import {
  fetchAllProducts,
  setSearchQuery,
} from "../Redux/productSlice.js";

function SearchBar({ className = "" }) {
  const dispatch = useDispatch();

  const { searchQuery, category } = useSelector(
    (state) => state.products
  );
   const navigate = useNavigate();
  const timerRef = useRef(null);
    // Navigate to All Products page when input gets focused
    const handleFocus = () => {
    navigate("/allcategoury");
  };

  // Fetch products with a 350ms debounce while typing.
  useEffect(() => {
    clearTimeout(timerRef.current);

    if (!searchQuery.trim()) {
      dispatch(fetchAllProducts({ category, search: "" }));
      return;
    }

    timerRef.current = setTimeout(() => {
      dispatch(
        fetchAllProducts({
          category,
          search: searchQuery.trim(),
        })
      );
    }, 350);

    return () => clearTimeout(timerRef.current);
  }, [searchQuery, category, dispatch]);

 

  // Fetch immediately when the search icon is clicked or Enter is pressed.
  const handleSearch = () => {
    clearTimeout(timerRef.current);

    dispatch(
      fetchAllProducts({
        category,
        search: searchQuery.trim(),
      })
    );
  };
   
  return (
    <div
      className={`flex border-orange-500 border-2 p-1 rounded-full ${className}`}
    >
      <input
        type="text"
        value={searchQuery}
        onFocus={handleFocus}
        onChange={(e) =>
          dispatch(setSearchQuery(e.target.value))
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleSearch();
          }
        }}
        placeholder="Search..."
        className="focus:outline-none px-3 w-full"
      />

      <button
        type="button"
        onClick={handleSearch}
        aria-label="Search"
        className="cursor-pointer shrink-0"
      >
        <IoSearchSharp className="text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 rounded-full p-1" />
      </button>
    </div>
  );
}

export default SearchBar;
