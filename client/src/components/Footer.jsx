import Logo from "./Logo";
import Button from "./Button";
import { GrNext } from "react-icons/gr";

function Footer() {
  return (
    <footer className="bg-zinc-100">
      <div className="max-w-full h-full mx-auto md:px-20 px-5 md:py-10 py-5  md:flex gap-30">
        {/* logo side div */}
        <div className="flex flex-col md:gap-3 gap-2">
          <Logo />
          <p>
            Bred for a high content of beneficial substances. Our products are
            all fresh and healthy.
          </p>
          <p>2026 © All Right Reserved</p>
        </div>
        <div className="flex my-4 gap-8">
        {/* Company side div */}
        <div className="flex flex-col gap-3">
          <h3 className="md:text-2xl text-xl font-bold text-zinc-800 ">Company</h3>
          <p><a href="#" className="navlink">About</a></p>
          <p><a href="#" className="navlink">FAQ's</a></p>
        </div>
        {/* Support */}
        
        <div className="flex flex-col gap-3">
          <h3 className="md:text-2xl text-xl font-bold text-zinc-800 ">Support</h3>
          <ul className="flex flex-col md:gap-3 gap-2">
            <li><a href="#" className="navlink">Support center</a></li>
            <li><a href="#" className="navlink">Feedback</a></li>
            <li><a href="#" className="navlink">Contact Us</a></li>
          </ul>
        </div >
        </div>
        {/* stay */}
        <div className="flex flex-col gap-3 ">
          <h3 className="md:text-2xl text-xl font-bold text-zinc-800 ">Stay Connected</h3>
          <p>Question or Feedback?  we'd love to hear from you</p>
          <div className="bg-white p-1 rounded-xl md:self-center flex ">
            <input type="email" placeholder="Email address" className="focus:outline-none flex-1"/>
            <button className="bg-orange-400 p-3 self-end rounded-xl text-white font-bold "><GrNext/></button>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
export default Footer;
