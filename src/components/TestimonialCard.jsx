import { IoStar } from "react-icons/io5";
function TestimonialCard({ name, image, orderType, description, rating }) {
  return (
    <div
      className="bg-zinc-100 inline-block p-6 max-w-[350px] rounded-2xl  transition-transform transition-shadow duration-300
  hover:scale-105 hover:shadow-md shrink-0  "
    >
      {/* Card heading */}
      <div className="flex items-center">
        <img src={image} alt={name} className="size-25 rounded-full " />
        <div className="ml-2">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-zinc-600 font-bold my-1">{orderType}</p>
          {/* rating */}
          <div className="flex gap-2 text-2xl text-orange-500">
            {[...Array(rating)].map((_, i) => (
              <IoStar key={i} />
            ))}
          </div>
        </div>
      </div>
      {/* card Descripyion */}
      <div className=" mt-8">
        <p>{description}</p>
      </div>
    </div>
  );
}
export default TestimonialCard;
