import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Shop from "./pages/shop";
import Blog from "./pages/blog";
import Cart from "./pages/cart";

function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <Routes>
        <Route path="./" element={<Home />} />
        <Route path="./about" element={<About />} />
        <Route path="./shop" element={<Shop />} />
        <Route path="./blog" element={<Blog />} />
        <Route path="./cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
