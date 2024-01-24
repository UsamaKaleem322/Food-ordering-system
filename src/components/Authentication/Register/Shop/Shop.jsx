import React from "react";

// Components
import ShopNow from "./ShopNow/ShopNow";
import Sidebar from "./Sidebar/Sidebar";

// Style
import "./style.scss";

const Shop = () => {
  return (
    <div className="shop-wrapper">
      <header className="text-center">
        <h1>Shop</h1>
      </header>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="shop-now-wrapper">
        <ShopNow />
      </div>
    </div>
  );
};

export default Shop;
