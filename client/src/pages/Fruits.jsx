import fruitsBanner from "../assets/fruits-banner.jpg"
import Banner from "../components/Banner";
import Card from "../components/Card"
import { useSelector } from "react-redux";

function Fruits(){
   const {
    items: productList,
    loading,
    error,
  } = useSelector((state) => state.products);
      let fillteredItems= productList.filter(item=>item.category==="Fruits");

    return(
      <div>
         {/* Loading aur error handling */}
      {loading && <p className="text-center py-10">Loading products...</p>}
      {error && <p className="text-center py-10 text-red-500">{error}</p>}

      <Banner banner={fruitsBanner} title="Fruits & Veggies"/>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8  max-w-full h-full mx-auto md:px-20 px-5 md:py-10 py-5">
        {
          fillteredItems.map((item)=>{
            return <Card product={item} key={item._id}/>
          })
        }

      </div>
      </div>
         
         
    )
};
export default Fruits;