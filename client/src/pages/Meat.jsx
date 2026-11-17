import meat from "../assets/seafood-banner.jpg";
import Banner from "../components/Banner";
import Card from "../components/Card";
import { useSelector } from "react-redux";

const Meat = () => {
  const {
    items: productList,
    loading,
    error,
  } = useSelector((state) => state.products);
  let fillteredItems = productList.filter((item) => item.category === "Meat");
  return (
    <div>
      <Banner banner={meat} title="Meat & SeaFood" />

      {/* Loading aur error handling */}
      {loading && <p className="text-center py-10">Loading products...</p>}
      {error && <p className="text-center py-10 text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-full h-full mx-auto md:px-20 px-5 md:py-10 py-5">
          {fillteredItems.length > 0 ? (
            fillteredItems.map((item) => {
              return <Card key={item._id} product={item} />;
            })
          ) : (
            <p className="col-span-full text-center text-gray-500 py-10">
              No meat items found in the database.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Meat;
