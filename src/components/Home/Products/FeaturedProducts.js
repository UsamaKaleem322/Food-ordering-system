import React from "react";
import DescriptionBar from "../../common/DescriptionBar";
import Product from "../../common/Product";
import products from "../../../Dummy-Data/products.json";
import { LiaStarSolid } from "react-icons/lia";
import { RiStarSLine } from "react-icons/ri";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const FeaturedProducts = () => {
  const navigate = useNavigate();
  return (
    <>
      <DescriptionBar
        title={"Featured Products"}
        desc={"Do not miss the current offers until the end of month."}
        path={"/shop"}
      />
      <div className="products my-3 mx-0">
        <div className="featured mx-0">
          <p>Only This Week</p>
          <h4>
            A smart store for <br />
            every people
          </h4>
          <span>Only this week. Don't miss...</span>
          <br />
          <button className="mb-3" onClick={() => navigate("/shop")}>
            Shop Now <FaLongArrowAltRight />
          </button>
        </div>
        {products.map((product) => <Product product={product} />).slice(10, 14)}
      </div>
    </>
  );
};

export default FeaturedProducts;
