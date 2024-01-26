import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Components
import Home from "./components/Home/home";
import Shop from "./components/Shop/shop";
import Cart from "./components/Cart/cart";
import Categories from "./components/Categories/categories";
import Checkout from "./components/Checkout/checkout";
import Header from "./components/Header/header";
import Accounts from "./components/Accounts/accounts";
import Login from "./components/Authentication/Login/Login";
import Register from "./components/Authentication/Register/Register";
import Wishlist from "./components/Wishlist/Wishlist";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Footer from "./components/common/Footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/categories" element={<Categories />} />
        <Route exact path="/accounts" element={<Accounts />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/wishlist" element={<Wishlist />} />
        <Route exact path="/:id" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
