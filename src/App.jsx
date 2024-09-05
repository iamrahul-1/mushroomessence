import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Shop from "./pages/shop";
import Blog from "./pages/blog";
import Cart from "./pages/cart";
import Footer from "./components/footer";

function App() {
  return (
    <div className="px-2 sm:px-[2vw] md:px-[3vw] lg:px-[4vw]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
