import { FaHeart } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addItem } from "../Redux/slice";
import { AddWishlist } from "../Redux/wishlistSlice";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { useState } from "react";

function Card({ product }) {
  const [liked, setLiked] = useState(false);
  if (!product) return null;
  const price = Number(product.price) || 0;
  const discount = product.discountPercent ?? 0;
  const rating = product.rating ?? 0;
  const stock = product.stock ?? 0;
  const description = product.description ?? "Fresh quality product.";
  const finalPrice = price - (price * discount) / 100;
  const inStock = stock > 0;
  let dispatch = useDispatch();
  const showToast = (product) => {
    Toastify({
      text: `${product.name}  Added to Cart`,
      duration: 2000,
      gravity: "top",
      position: "center",
      style: {
        background: "#f97316",
        borderRadius: "12px",
        padding: "10px",
        fontWeight: "600",
      },
    }).showToast();
  };
//  handleWishlist
  const handleWishlist = () => {
    setLiked(!liked);
    showToast(product);

    dispatch(
      AddWishlist({
        id: product.id,
        name: product.name,
        image: product.image,
      }),
    );
  };

  return (
    <div className="bg-gray-100 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4 relative group">
      {discount > 0 && (
        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          {discount}% OFF
        </div>
      )}

      <div className="absolute top-3 right-3 text-gray-400 focus:text-orange-500 cursor-pointer text-2xl">
        <FaHeart
          onClick={handleWishlist}
          className={liked ? "text-orange-500" : "text-gray-400"}
        />
      </div>

      <div className="flex justify-center mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-40 h-40 object-contain group-hover:scale-110 transition duration-300"
        />
      </div>

      <p className=" text-white font-semibold bg-orange-500 rounded-full inline px-2 py-1 text-md">
        {product.category}
      </p>

      <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>

      <p className="text-sm text-gray-500 mt-1 line-clamp-2 ">{description}</p>

      <div className="flex items-center mt-2 text-yellow-400 text-sm">
        {Array(Math.floor(rating))
          .fill(0)
          .map((_, index) => (
            <IoStar key={index} />
          ))}
        <span className="text-gray-500 ml-1">({rating})</span>
      </div>

      <div className="mt-3 flex items-center space-x-4">
        {discount > 0 && (
          <p className="text-sm text-gray-400 line-through">₹{price}</p>
        )}

        <p className="text-lg font-bold text-green-600">
          ₹{finalPrice.toFixed(2)}
        </p>
      </div>

      <p
        className={`text-xs mt-1 ${inStock ? "text-green-500" : "text-red-500"}`}
      >
        {inStock ? `In Stock (${stock})` : "Out of Stock"}
      </p>

      <button
        onClick={() => {
          dispatch(
            addItem({
              id: product.id,
              name: product.name,
              image: product.image,
              price: finalPrice,
              qty: "1",
            }),
          );
          showToast(product);
        }}
        disabled={!inStock}
        className={` w-full mt-3 py-2 rounded-full text-sm font-semibold transition 
        ${
          inStock
            ? "bg-orange-500 hover:bg-orange-600 text-white cursor-pointer"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        {inStock ? "Add to Cart" : "Unavailable"}
      </button>
    </div>
  );
}

export default Card;
