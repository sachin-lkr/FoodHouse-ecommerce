import fruitsBanner from "../assets/fruits-banner.jpg"
import Banner from "../components/Banner";
import Card from "../components/Card"
import productList from "../data/products"

function Fruits(){
      let fillteredItems= productList.filter(item=>item.category==="Fruits");

    return(
      <div>
      <Banner banner={fruitsBanner} title="Fruits & Veggies"/>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8  max-w-full h-full mx-auto md:px-20 px-5 md:py-10 py-5">
        {
          fillteredItems.map((item)=>{
            return <Card product={item}/>
          })
        }

      </div>
      </div>
         
         
    )
};
export default Fruits;