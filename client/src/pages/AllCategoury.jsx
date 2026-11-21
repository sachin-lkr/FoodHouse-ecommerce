import allBanner from "../assets/all-banner.jpg";
import Banner from "../components/Banner";
import Card from "../components/Card";
import { useState } from "react";
import { useSelector } from "react-redux";

const AllCategoury = () => {
  const [cart, setCart] = useState([]);
   // Get products and loading state from Redux
  const { items: products, loading, error, searchQuery } =
    useSelector((state) => state.products);
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  return (
    <div>
      <Banner title=" All Products" banner={allBanner} />
       <div className="max-w-full mx-auto md:px-20 px-5 md:py-10 py-5">

        {/* Show current search query */}
        {searchQuery && (
          <h2 className="text-xl font-semibold mb-5">
            Search Results for: "{searchQuery}"
          </h2>
        )}

        {loading ? (
          <p className="text-center py-10">Loading products...</p>
        ) : error ? (
          <p className="text-center text-red-500 py-10">
            {error}
          </p>
        ) : products.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((item) => (
              <Card
                key={item._id}
                product={item}
                addToCart={addToCart}
              />
            ))}
          </div>
        ) : (
          <p className="text-center py-10">
            No products found.
          </p>
        )}

      </div>
    </div>
  );
};

export default AllCategoury;
