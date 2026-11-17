import allBanner from "../assets/all-banner.jpg";
import Banner from "../components/Banner";
import Card from "../components/Card";
import { useState, useEffect } from "react";
import axios from "../api/axios";
const AllCategoury = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log("Cart:", [...cart, product]);
  };
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/products"); 
        console.log("response :",response)
        setProducts(response.data.products || response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products from server.");
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <Banner title=" All Products" banner={allBanner} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8  max-w-full h-full mx-auto md:px-20 px-5 md:py-10 py-5">
        {products.map((item) => {
          return <Card key={item._id} product={item} addToCart={addToCart} />;
        })}
      </div>
    </div>
  );
};

export default AllCategoury;
