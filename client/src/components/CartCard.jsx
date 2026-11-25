import { RiDeleteBin6Line } from "react-icons/ri";
import { useCart } from "../hooks/useCart.js";
function CartCard({ items }) {
  const { handleUpdateQuantity, handleRemoveItem, loading } = useCart();
  if (!items) return null;
  const { _id, name, image, price} = items;
  const quantity = Number(items.quantity ?? items.qty ?? 1);
  const itemId = _id;
 const productId = items.productId || items.product?._id || items.product || _id;

  // Decrease item quantity if above 1
  const handleDecrement =async () => {
    if (quantity > 1 && !loading) {
     await handleUpdateQuantity({
        productId,
        quantity: quantity - 1,
      });
    }
  };

  // Increase item quantity by 1
  const handleIncrement =async () => {
    if (!loading) {
      await handleUpdateQuantity({
        productId,
        quantity: quantity + 1,
      });
    }
  };

  // Remove item completely from cart
  const handleRemove =async () => {
    if (!loading) {
      await handleRemoveItem({
        productId,
      });
    }
  };
  return (
    <div
      id={itemId}
      className="w-full shadow-md flex justify-between  items-center p-2 rounded-xl"
    >
      {/* left side */}
      <div className="flex justify-between items-center">
        <div className="w-20 h-15 lg:w-30 lg:h-20 flex items-center justify-center cursor-pointer  ring-2 rounded-2xl overflow-hidden mr-4 ring-orange-500">
          <img src={image} alt={name} />
        </div>
        <div className="text-xl space-y-4">
          <h3>{name}</h3>
          <div className="w-[100px] items-center ring-2 text-orange-600 ring-orange-400 rounded-xl  flex justify-around items-center ">
            {/* Decrement */}
            <button
              type="button"
              disabled={loading || quantity <= 1}
              className="cursor-pointer disabled:opacity-40 px-2"
              onClick={handleDecrement}
            >
              -
            </button>
            <span className="bg-zinc-300 px-2">{quantity}</span>
            {/* increment */}
            <button
              type="button"
              disabled={loading}
              className="cursor-pointer disabled:opacity-40 px-2"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="flex flex-col gap-4">
        <h3 className="text-orange-600 text-xl">
          RS.{(price * quantity).toFixed(2)}/-
        </h3>
        <RiDeleteBin6Line
          className="text-red-500 text-xl self-end cursor-pointer"
          onClick={handleRemove}
        />
      </div>
    </div>
  );
}

export default CartCard;
