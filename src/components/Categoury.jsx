import Header from "./Header";

import fruitsAndVeggies from "../assets/fruits-and-veggies.png";
import meatAndSeafood from "../assets/meat-and-seafood.png";
import dairyAndEffs from "../assets/dairy-and-eggs.png";
import {  NavLink } from "react-router";

const fruits = [
  {
    id: 1,
    image: fruitsAndVeggies,
    name: "Fruits & Veggies",
    text: "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    path:"/fruits",
  },
  {
    id: 2,
    image: dairyAndEffs,
    name: "Dairy & Eggs",
    text: "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
    path:"/dairy",
  },
  {
    id: 3,
    image: meatAndSeafood,
    name: "Meat & SeaFood",
    text: "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more",
    path:"/meat",
  },
];

function Categoury() {
  console.log(fruits[0].name);
  return (
    <section>
      <div className="max-w-full h-full mx-auto md:px-20 px-5 md:py-20 py-5 ">
        <Header title1="Shop" title2="by Categoury" />
        {/* card container */}
        <div className=" md:mt-15 mt:5 md:flex md:gap-10 gap-5 ">
          {/* card */}
          {fruits.map((item) => (
            <div key={item.id} className="flex-1">
              <div className=" w-full min-h-[30vh] sm:min-h-[10vh] lg:min-h-[30vh] relative -mb-15">
                <img
                  src={item.image}
                  alt="fruits "
                  className="absolute bottom-0"
                />
              </div>
              <div className="bg-zinc-100 pt-17 p-8 rounded-xl">
                <h1 className="text-3xl font-bold text-zinc-800">
                  {item.name}
                </h1>
                <p className="text-zinc-600 mt-3 mb-6">{item.text}</p>
                {/* <Buttom title="See All"   /> */}
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `inline-block bg-gradient-to-b from-orange-400 to-orange-500 py-2.5 px-4 rounded-2xl text-white transition-all duration-500 hover:scale-105 hover:from-orange-500 hover:to-orange-600${isActive ? " ring-2 ring-orange-300" : ""}`}
                >
                  See All
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Categoury;
