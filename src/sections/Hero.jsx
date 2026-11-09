import foodhouse from"../assets/grocery.png";
import Button from "../components/Button"
import { NavLink } from "react-router-dom";
function Hero(props){
    return(
        <section className="max-w-full h-full mx-auto md:px-20 px-5 pt-20 md:pt-25 md:flex lg:min-h-screen">
            {/* content Section */}
            <div className="flex-1/2 flex flex-col gap-y-4 mt-[40px] md:mt-[100px]">
                <div className="inline-flex w-fit bg-amber-200 inline-flex px-4 py-2 rounded-full">
                    <p className="text-amber-600 font-bold">Export Best Quality....</p>
                </div>
                {/* heading */}
                <div>
                    <h1 className="md:text-6xl/18 text-3xl font-bold tracking-wider">Tasty Organic <span className="text-orange-500"> Fruits</span >& <span className="text-orange-500">Veggies</span> <br />In Your City</h1>
                </div>
                <div>
                    <p>Bred for a high content of beneficial substances. Our products are all fresh and healthy.</p>
                </div>
                < NavLink to="/allcategoury">
                    <Button title="Shop Now" />  
                </ NavLink>

            </div>
            {/* Image Section */}
            <div className="flex-1/2">
            <img src={foodhouse} alt="foodhouse image"  />

            </div>

        </section>
    )
}
export default Hero;