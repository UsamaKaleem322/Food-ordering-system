import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import products from "../../../Dummy-Data/products.json";

// React Icons
import { CiHeart } from "react-icons/ci";
import { IoStarSharp } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";

// styles
import "../style.scss";

const ShopNow = () => {
  const [productsData, setProductsData] = useState(products);
  return (
    <>
      <section className="shop-now-banner w-100 h-auto">
        <span
          className="badge"
          style={{ backgroundColor: "#FFEDD5", color: "#914B31" }}
        >
          Only this week
        </span>
        <h3 className="my-3">Glocery store with different teasure</h3>
        <p>We have prepare special discount for you on grocery products...</p>
        <button className="mb-3">
          ShopNow <FaLongArrowAltRight />
        </button>
      </section>
    </>
  );
};

export default ShopNow;
