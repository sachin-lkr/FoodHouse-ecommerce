import dairyBanner from "../assets/dairy-banner.jpg";
import Banner from "../components/Banner"
import Card from "../components/Card"
import productList from "../data/products"


const Dairy = () => {
   let fillteredItems= productList.filter(item=>item.category==="Dairy");
  return (
    
    <div>
      <Banner banner={dairyBanner} title="Dairy & Eggs"/>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8  max-w-full h-full mx-auto md:px-20 px-5 md:py-10 py-5">
        {
          fillteredItems.map((item)=>{
            return <Card product={item}/>
          })
        }

      </div>
    </div>
  )
}

export default Dairy