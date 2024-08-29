import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";

function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <Routes>
        <Route path="./" element={<Home />} />
        <Route path="./about" element={<Home />} />
        <Route path="./shop" element={<Home />} />
        <Route path="./blog" element={<Home />} />
        <Route path="./cart" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
