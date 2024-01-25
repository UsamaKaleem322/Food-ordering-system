import React from "react";
import categories from "../../../Dummy-Data/categories.json";
import "../style.scss";
import { useNavigate } from "react-router-dom";
import DescriptionBar from "../../common/DescriptionBar";
const HomeCategories = () => {
  const navigate = useNavigate();
  return (
    <>
      <DescriptionBar
        title={"Top Categories"}
        desc={"New products with updated stocks."}
        path={"categories"}
      />
      <div className="categories my-3">
        {categories.map((item) => {
          return (
            <div className="card">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
      <div className="categoryBottomBanner">
        <p>In store or online your health & safety is our top priority</p>
        <span>
          The only supermarket that makes your life easier, makes you enjoy life
          and makes it better
        </span>
      </div>
    </>
  );
};

export default HomeCategories;
