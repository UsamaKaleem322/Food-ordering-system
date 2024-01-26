import React, { useState } from "react";
import products from "../../../Dummy-Data/products.json";

// React Icons
import { FaLongArrowAltRight } from "react-icons/fa";

// Components
import Product from "../../common/Product";

// React Bootstrap
import Pagination from "react-bootstrap/Pagination";

// styles
import "../style.scss";

const ShopNow = () => {
  const [productsData, setProductsData] = useState(products);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Pagination
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productsData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

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
      <section className="shop-now-products">
        {currentProducts.map((product) => (
          <Product product={product} />
        ))}
      </section>
      <div className="mt-4">
        {/* Pagination */}
        <Pagination>
          {Array.from({
            length: Math.ceil(productsData.length / productsPerPage),
          }).map((_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </>
  );
};

export default ShopNow;
