import dairyBanner from "../assets/dairy-banner.jpg";
import Banner from "../components/Banner";
import Card from "../components/Card";
import { useSelector } from "react-redux";

const Dairy = () => {
  const {
    items: productList,
    loading,
    error,
  } = useSelector((state) => state.products);
  let fillteredItems = productList.filter((item) => item.category === "Dairy");
  return (
    <div>
      <Banner banner={dairyBanner} title="Dairy & Eggs" />
      {/* Loading aur error handling */}
      {loading && <p className="text-center py-10">Loading products...</p>}
      {error && <p className="text-center py-10 text-red-500">{error}</p>}

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8  max-w-full h-full mx-auto md:px-20 px-5 md:py-10 py-5">
        {fillteredItems.map((item) => {
          return <Card product={item}  key={item._id}/>;
        })}
      </div>
    </div>
  );
};

export default Dairy;
