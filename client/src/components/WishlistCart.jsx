import { useDispatch } from "react-redux";
import { RemoveWishlist } from "../Redux/wishlistSlice.js";
import { addItem } from "../Redux/slice";
function WishlistCart({ item }) {
  const { _id, name, image,price} = item;
  let dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addItem({
        _id: _id,
        name,
        image,
        price: Number(price) || 0,
        qty: 1,
      })
    );
  };
  return (
    <div
      id={_id}
      className="w-full shadow-md flex justify-between  items-center p-2 rounded-xl"
    >
      <div className="flex justify-between items-center w-full">
        {/* left side */}
        <div className="w-30 h-20 flex items-center justify-center cursor-pointer  ring-2 rounded-2xl overflow-hidden mr-4 ring-orange-500">
          <img src={image} alt={name} />
        </div>
        {/* right side */}
        <div className=" space-y-4">
          <h3 className="text-xl">{name}</h3>
          <div className="flex justify-between w-full gap-2  ">
            <button
              type="button"
              onClick={handleAddToCart}
              className="text-white bg-orange-500 py-1  px-2 rounded-2xl cursor-pointer"
            >
              Add to Cart
            </button>

            <button
              className="text-white bg-orange-500 py-1 px-2 rounded-2xl cursor-pointer"
              onClick={() => dispatch(RemoveWishlist(_id))}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishlistCart;
