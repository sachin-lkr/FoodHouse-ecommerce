import {Link} from "react-router-dom"
function Logo(){
    return(
      <Link to="/" className="text-2xl font-bold items-center">
          Fresh<span className="text-orange-500 text-[26px]">M</span>art
        </Link >
    )
};
export default Logo;