import allBanner from "../assets/all-banner.jpg";
import Banner from "../components/Banner";
import Card from "../components/Card";
import productList from "../data/products";
import { useState } from "react";
const AllCategoury = () => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log("Cart:", [...cart, product]);
  };
  return (
    <div>
      <Banner title=" All Products" banner={allBanner} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8  max-w-full h-full mx-auto md:px-20 px-5 md:py-10 py-5">
        {productList.map((item) => {
          return <Card key={item.id} product={item} addToCart={addToCart} />;
        })}
      </div>
    </div>
  );
};

export default AllCategoury;
