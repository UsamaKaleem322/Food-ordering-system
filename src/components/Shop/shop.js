import React from "react";

// Components
import ShopNow from "./ShopNow/ShopNow";
import Sidebar from "./Sidebar/Sidebar";

// Style
import "./style.scss";

const Shop = () => {
  return (
    <>
      <h3 className="shop-now-heading">
        Home <span>&gt;Shop</span>
      </h3>
      <div className="shop-wrapper">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="shop-now-wrapper">
          <ShopNow />
        </div>
      </div>
    </>
  );
};

export default Shop;
