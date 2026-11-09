
import { useState } from "react";
import Header from "../components/Header"
import TestimonialCard from "../components/TestimonialCard"

import customer1 from "../assets/customer1.jpg";
import customer2 from "../assets/customer2.jpg";
import customer3 from "../assets/customer3.jpg";
import customer4 from "../assets/customer4.jpg";


import { GrPrevious, GrNext } from "react-icons/gr";

const rating = [
  {
    id: 1,
    name: "Sachin Kumar",
    image: customer1 ,
    orderType: "Food Blogger",
    rat: 3,
    description:
      "FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!",
  },
  {
    id: 2,
    name: "Deepak Bind",
    image: customer2 ,
    orderType: "Chef",
    rat: 5,
    description:
      "As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!",
  },
  {
    id: 3,
    name: "Samrat Bind",
    image: customer3 ,
    orderType: "Model",
    rat: 5,
    description:
      "Shopping online with FreshBasket has saved me so much time. I trust them for my family's weekly groceries—always fresh, affordable, and reliable.",
  },
  {
    id: 4,
    name: "Pankaj Bind",
    image: customer4 ,
    orderType: "Fitness Coach",
    rat: 5,
    description:
      "I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey!",
  },
  {
    id: 5,
    name: "Raveena Kumari",
    image: customer1 ,
    orderType: "Nutritionist",
    rat: 5,
    description:
      "FreshBasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.",
  },
];


function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
     
    setCurrentIndex((prev) =>
      prev === rating.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    
    setCurrentIndex((prev) =>
      prev === 0 ? rating.length - 1 : prev - 1
    );
  };

  

  return (
    <section>
      <div className="max-w-full mx-auto md:px-20 px-5 md:my-10 py:5">
        <Header title1="Customers" title2="Saying" />

        {/* Arrow Buttons */}
        <div className="flex md:justify-end justify-between my-4 md:gap-8 ">
          <button
            onClick={prevSlide}
            className="bg-zinc-100 rounded-full p-3 hover:scale-105 transition"
          >
            <GrPrevious />
          </button>

          <button
            onClick={nextSlide}
            className="bg-zinc-100 rounded-full p-3 hover:scale-110 transition"
          >
            <GrNext />
          </button>
        </div>

        {/* Slider */}
        <div className="overflow-hidden  pt-3 pb-6 md:pl-8" >
          <div
            className="flex gap-10 transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 400}px)` }}
          >
            {rating.map((item) => (
              <TestimonialCard
                key={item.id}
                name={item.name}
                image={item.image}
                orderType={item.orderType}
                rating={item.rat}
                description={item.description}
               
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
