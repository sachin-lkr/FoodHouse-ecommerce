import Category from "../components/Categoury"
import Discount from "../components/Discount"
import Hero from "../sections/Hero"
import Navbar from "../components/Navbar"
import OurProducts from "../components/OurProducts"
import OurValue from "../sections/OurValue"
import Process from "../sections/Process"
import Testimonial from "../sections/Testimonial"

function Home(){
    return(
        <div>
            <Navbar/>
            <Hero/>
            <Category/>
            <OurValue/>
            <OurProducts/>
            <Discount/>
            <Process/>
            <Testimonial/>
        

        </div>
    )
}
export default Home;