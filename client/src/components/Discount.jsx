import Button from "./Button";
import freshFruits from "../assets/fresh-fruits.png";

function Discount() {
  return (
    <section
      className="bg-zinc-100 bg-no-repeat bg-right bg-contain"
      md:style={{ backgroundImage: `url(${freshFruits})` }}
    >
      <div className="max-w-full h-full mx-auto md:px-20 px-5 py-2   md:flex">
        <span className="md:text-8xl text-4xl font-bold text-orange-500 -rotate-90 h-fit self-center">
          20%
        </span>

        <div className="md:py-4 py-2 md:max-w-[700px] ">
          <h1 className="md:text-7xl text-2xl font-bold text-zinc-800">
            First Order Discount!
          </h1>

          <p className="text-zinc-600 md:my-6 my-2">
            Enjoy an exclusive first order discount on our grocery website! Shop
            fresh essentials and save big on your first purchase. Fast delivery
            and quality guaranteed.
          </p>
          <Button title="Get a Discount" />
        </div>
      </div>
    </section>
  );
}
export default Discount;
