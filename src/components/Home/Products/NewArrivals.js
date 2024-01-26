import React from "react";
import DescriptionBar from "../../common/DescriptionBar";
import Product from "../../common/Product";
import products from "../../../Dummy-Data/products.json";
import { LiaStarSolid } from "react-icons/lia";
import { RiStarSLine } from "react-icons/ri";
const NewArrivals = () => {
  return (
    <>
      <DescriptionBar
        title={"New Arrivals"}
        desc={"Do not miss the current offers until the end of month."}
        path={"shop"}
      />
      <div className="products my-3 mx-0">
        <div className="row review" style={{ width: "320px" }}>
          <div className="col-4">
            <img src="/Images/person.png" />
          </div>
          <div className="col-8 content">
            <h4>Machic</h4>
            <p>Featured</p>
            <div className="icons">
              <LiaStarSolid className="stars" />
              <LiaStarSolid className="stars" />
              <LiaStarSolid className="stars" />
              <LiaStarSolid className="stars" />
              <RiStarSLine className="stars" />
            </div>
          </div>
          <p className="text">
            Good quality product can only be found in good stores
          </p>
          <div className="first">
            <p>Only This Week</p>
            <h4>
              Where flavor meets
              <br /> affordability.
            </h4>
            <span>
              Only this week.
              <br /> Don't miss...
            </span>
            <br />
          </div>
        </div>
        {products.map((product) => <Product product={product} />).slice(6, 10)}
      </div>
    </>
  );
};

export default NewArrivals;
