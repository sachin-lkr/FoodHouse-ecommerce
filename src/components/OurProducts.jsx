import { useState } from "react";
import Header from "./Header";
import { NavLink } from "react-router";
import productsList from "../data/products"
import Card from "../components/Card"

function OurProducts() {
  const categoury = ["All", "Fruits", "Vegetables", "Dairy", "SeaFood"];
  const [activeTabs, setActiveTabs] = useState("All");

  let fillteredItems= activeTabs==="All"?productsList: productsList.filter(item=>item.category===activeTabs);
 
  const renderCard=fillteredItems.slice(0,12).map((product)=>{
    return(
      <Card  product={product} key={product.id}/>
    )
  })

  
  
  return (
    <section>
      <div className="max-w-full h-full mx-auto md:px-20 px-5 md:py-10 py-5">
        <Header title1="Our" title2="Products" />
        {/* tabs */}
        <div className="flex flex-wrap justify-center md:gap-4 gap-2 md:justify-center mt-10">
          {categoury.map((item) => {
            return (
              <button
                key={item}
                className={`cursor-pointer font-bold md:text-xl md:py-2 py-1 md:px-4 px-2  rounded-xl ${activeTabs === item ? "bg-gradient-to-b from-orange-400 to-orange-500 text-white " : " bg-zinc-100 text-zinc-600"}`}
                onClick={() => {
                  setActiveTabs(item);
                }}
              >
                {item}
              </button>
            );
          })}
        </div>
        {/* Products listing*/}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 ">
          {renderCard}
        </div>
        {/* viwe all */}
        <div className="flex justify-center mt-10">
         <NavLink
                  to="/allCategoury"
                  className={({ isActive }) =>
                    `inline-block text-center text-2xl bg-gradient-to-b from-orange-400 to-orange-500 py-2.5 px-4 rounded-2xl text-white transition-all duration-500 hover:scale-105 hover:from-orange-500 w-[220px] hover:to-orange-600${isActive ? " ring-2 ring-orange-300" : ""}`}
                >
                  Viwe All
                </NavLink>
        </div>
        
      </div>
    </section>
  );
}
export default OurProducts;

