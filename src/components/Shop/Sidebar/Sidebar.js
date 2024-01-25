import React, { useState } from "react";
import "../style.scss";
import categories from "../../../Dummy-Data/categories.json";
import colors from "../../../Dummy-Data/colors.json";

const Sidebar = () => {
  const [categoriesData, setCategoriesData] = useState(categories);
  const [colorsData, setColorsData] = useState(colors);
  return (
    <>
      <div className="wigit-filters">
        <p className="wigit-price-text">Widget price filter</p>
        <div className="inputs-wrapper">
          <div>
            <p>Min</p>
            <input type="text" value={0} />
          </div>
          <div>
            <p>Max</p>
            <input type="text" value={100} />
          </div>
        </div>
        <input
          className="range-input"
          type="range"
          id="rangeInput"
          min="0"
          max="100"
        />
        <div className="price-filter d-flex justify-content-between align-center">
          <p className="price-text">Price: $0 — $30</p>
          <button className="btn btn-light">Filters</button>
        </div>
      </div>
      <hr />
      <div className="product-categories d-flex justify-content-center align-center flex-column gap-2">
        <p className="wigit-price-text">Products Categories</p>
        {categoriesData.map((category) => (
          <div className="category d-flex justify-content-start align-center gap-2">
            <input type="checkbox" className="category-input" />
            <p className="mb-0 category-name">{category.name}</p>
          </div>
        ))}
      </div>
      <hr />
      <div className="colors">
        <p className="wigit-price-text">Filters by color</p>
        {colorsData.map((colorItem) => (
          <div className="colorItem d-flex justify-content-start align-items-center gap-4">
            <div
              className="color"
              style={{ backgroundColor: colorItem.color }}
            ></div>
            <p className="color-name mt-2">{colorItem.colorName}</p>
          </div>
        ))}
      </div>
      <hr />
      <div className="brands">
        <p className="wigit-price-text">Filters by brands</p>
        <div className="brands-row">
          <div>
            <input type="checkbox" className="brand-input" />
            <p className="brand-name">Aptamil</p>
          </div>

          <p>{"(4)"}</p>
        </div>
        <div className="brands-row">
          <div>
            <input type="checkbox" className="brand-input" />
            <p className="brand-name">Babyganics</p>
          </div>

          <p>{"(4)"}</p>
        </div>
        <div className="brands-row">
          <div>
            <input type="checkbox" className="brand-input" />
            <p className="brand-name">Dove</p>
          </div>

          <p>{"(4)"}</p>
        </div>
        <div className="brands-row">
          <div>
            <input type="checkbox" className="brand-input" />
            <p className="brand-name">Fresh</p>
          </div>

          <p>{"(4)"}</p>
        </div>
        <div className="brands-row">
          <div>
            <input type="checkbox" className="brand-input" />
            <p className="brand-name">Freshness</p>
          </div>

          <p>{"(4)"}</p>
        </div>
      </div>
      <hr />
      <div className="stocks">
        <p className="wigit-price-text">Filters by status</p>
        <div className="stocks-row d-flex justify-center align-items-center gap-2">
          <input type="checkbox" className="stocks-input" />
          <p className="mt-3 stock-text">In Stocks</p>
        </div>
        <div className="stocks-row d-flex justify-center align-items-center gap-2">
          <input type="checkbox" className="stocks-input" />
          <p className="mt-3 stock-text">In Sales</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
