import Header from "../components/Header"
import { FaHeart } from "react-icons/fa";
import { SiHellofresh } from "react-icons/si";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { RiMentalHealthFill } from "react-icons/ri";
import basket from "../assets/basket-full-vegetables.png"

const value=[
    {
        id:1,
        title:"Trust",
        description:"It is a long established fact that a reader will be distracted by the readable",
        icons: <FaHeart/>,
    },
      {
        id:2,
        title:"Always Fresh",
        description:"It is a long established fact that a reader will be distracted by the readable.",
        icons:<SiHellofresh/>,
    },
      {
        id:3,
        title:"Food Safety",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        icons:<MdOutlineHealthAndSafety/>,
    },
    {
        id:4,
        title:"100% Organic",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        icons:<RiMentalHealthFill/>,
    },
]

function OurValue(){
    const leftSide= value.slice(0,2).map(item=>{
        return(
            <div className="flex md:flex-row-reverse md:text-right gap-4 " key={item.id}>
                <div>
                    <span className="inline-block p-2 bg-orange-500 text-white rounded-full  text-3xl mt-3">{item.icons}</span>
                </div>
                <div>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p className="text-zinc-600 ">{item.description}</p>
                </div>
            </div>
        )
    });

     const RightSide= value.slice(2,4).map((item)=>{
        return(
            <div className="flex gap-4 mt-3 md:mt-0 " key={item.id}>
                <div>
                    <span className="inline-block p-2 bg-orange-500 text-white rounded-full  text-3xl mt-3">{item.icons}</span>
                </div>
                <div>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p className="text-zinc-600 ">{item.description}</p>
                </div>
            </div>
        )
    });
    return(
        <section >
          
          <div className="max-w-full h-full mx-auto md:px-20 px-5 md:my-10 my-5">
            <Header title1="Our" title2="Value"/> 
            <div className="md:flex mt-15">
                {/* LeftSide */}
                <div className="flex gap-3 flex-col md:justify-between">
                    {leftSide}

                </div>
                {/* image */}
                <div className="w-1/2 hidden md:block">
                    <img src={basket} alt="image" />
  
                </div>
                {/* RightSide */}
                <div className="flex flex-col gap-3 md:justify-between">
                    {RightSide}

                </div>

            </div>
          </div>

        </section>
    )
}
export default OurValue;