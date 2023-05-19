import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { CartStore } from "./context/CartContext";
import Cart from "./pages/Cart";
import CreateProduct from "./pages/CreateProduct";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <CartStore>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/create-product" element={<CreateProduct />} />
        </Routes>
      </CartStore>
    </div>
  );
}

export default App;
