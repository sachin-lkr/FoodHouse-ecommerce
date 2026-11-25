import { RxCross2 } from "react-icons/rx";
import CartCard from "../CartCard";

function CartDrawer({
  showCart,
  setCloseCart,
  items,
  subtotal,
  handlePlaceOrder,
}) {
  return (
    <nav
      className={`lg:w-[30vw] w-full h-screen bg-white fixed top-0 right-0 py-10 px-4 transition-all duration-500 shadow-xl z-[60] ${
        showCart ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between">
        <h1 className="text-xl font-bold text-orange-500">
          Order Items
        </h1>

        <RxCross2
          className="text-2xl text-orange-500 cursor-pointer"
          onClick={() => setCloseCart(false)}
        />
      </div>

      {/* Cart Products */}
      <div className="max-h-[60vh] overflow-y-auto">
        {items.map((item) => (
          <CartCard key={item._id} items={item} />
        ))}
      </div>

      {items.length > 0 ? (
        <div>
          <div className="border-y border-zinc-500 px-10">
            <div className="flex justify-between pt-2">
              <span>Subtotal</span>
              <span className="text-orange-500">
                Rs {subtotal.toFixed(2)}/-
              </span>
            </div>

            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span className="text-orange-500">Rs 50/-</span>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex justify-between px-10 my-2">
              <span className="font-bold">Total</span>
              <span className="font-bold">
                Rs {(subtotal + 50).toFixed(2)}/-
              </span>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="py-2 px-10 rounded-2xl bg-orange-500 text-white font-bold"
            >
              Place Order
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full h-[70vh] flex justify-center items-center">
          <h1 className="text-4xl font-bold text-orange-500">
            Cart is Empty
          </h1>
        </div>
      )}
    </nav>
  );
}

export default CartDrawer;