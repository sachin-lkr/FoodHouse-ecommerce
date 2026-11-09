function Header({ title1, title2 }) {
  return (
    <div className="w-fit  mx-auto ">
      <h1 className="md:text-5xl text-3xl font-bold text-zinc-800">
        <span className="text-orange-500 ">{title1}</span> {title2}
      </h1>

      <div className="md:w-25 w-15 h-1  bg-orange-300 ml-auto md:mt-6 mt-3 "></div>
    </div>
  );
}
export default Header;

