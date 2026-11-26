
import { useEffect, useRef } from "react";
import { useProducts } from "../hooks/useProducts";
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function SearchBar({ className = "" }) {
  const { searchQuery, category, loadProducts, changeSearch } = useProducts();
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
     loadProducts({ category, search: "" });
      return;
    }

    timerRef.current = setTimeout(() => {
      loadProducts({
        category,
        search: searchQuery.trim(),
      });
    }, 350);

    return () => clearTimeout(timerRef.current);
  }, [searchQuery, category, loadProducts]);

 

  // Fetch immediately when the search icon is clicked or Enter is pressed.
  const handleSearch = () => {
    clearTimeout(timerRef.current);

    loadProducts({
      category,
      search: searchQuery.trim(),
    });
  };
   
  return (
    <div
      className={`flex border-orange-500 border-2 p-1 rounded-full ${className}`}
    >
      <input
        type="text"
        value={searchQuery}
        onFocus={handleFocus}
       onChange={(e) => changeSearch(e.target.value)}
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
