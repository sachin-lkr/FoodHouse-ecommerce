import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Dairy from "./pages/Dairy";
import Fruits from "./pages/Fruits";
import Meat from "./pages/Meat";
import AllCategoury from "./pages/AllCategoury"
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dairy" element={<Dairy />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/meat" element={<Meat />} />
        <Route path="/allcategoury" element={<AllCategoury />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
