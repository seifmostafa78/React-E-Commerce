import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/product/:id" element={<Product/>} />
            <Route path="/product-list" element={<ProductList/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;