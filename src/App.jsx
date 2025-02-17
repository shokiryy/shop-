import { Typography, Card } from "@material-tailwind/react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Placeorder from "./pages/Placeorder";
import Orders from "./pages/Orders";
import Navabr from "./compontes/Navabr";
import Footer from "./compontes/Footer";
import SearchBar from "./compontes/SearchBar"
import { ToastContainer, toast } from 'react-toastify';

export default function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
      <Navabr/>
      <SearchBar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/collection" element={<Collection/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/product/:productId" element={<Product/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/place-order" element={<Placeorder/>}/>
      <Route path="/place-order" element={<Placeorder/>}/>
      <Route path="/orders" element={<Orders/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}
