import { RxCross2 } from "react-icons/rx";
import WishlistCart from "../WishlistCart";
import { useDispatch } from "react-redux";
import { ClearWishlist } from "../../Redux/wishlistSlice";

function WishlistDrawer({ favorite, setFavorite, wishlistItems }) {
  const dispatch = useDispatch();

  return (
    <nav
      className={`lg:w-[30vw] w-full h-screen bg-white fixed top-0 right-0 py-10 px-4 transition-all duration-500 shadow-xl z-[60] ${
        favorite ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between">
        <h1 className="text-xl font-bold text-orange-500">
          Your Wishlist
        </h1>

        <RxCross2
          className="text-2xl text-orange-500 cursor-pointer"
          onClick={() => setFavorite(false)}
        />
      </div>

      {/* Wishlist Products */}
      <div className="max-h-[60vh] overflow-y-auto">
        {wishlistItems.map((item) => (
          <WishlistCart key={item._id} item={item} />
        ))}
      </div>

      {wishlistItems.length > 0 ? (
        <>
          <div className="border-y border-zinc-500 px-10">
            <div className="flex justify-between py-2">
              <span className="font-bold">
                Total favorite items
              </span>
              <span className="font-bold">
                {wishlistItems.length}
              </span>
            </div>
          </div>

          <div className="flex flex-col mt-2">
            <button
              type="button"
              onClick={() => dispatch(ClearWishlist())}
              className="py-2 px-10 rounded-2xl bg-orange-500 text-white font-bold"
            >
              All clear
            </button>
          </div>
        </>
      ) : (
        <div className="w-full h-[70vh] flex justify-center items-center">
          <h1 className="text-4xl font-bold text-orange-500">
            Wishlist is Empty
          </h1>
        </div>
      )}
    </nav>
  );
}

export default WishlistDrawer;