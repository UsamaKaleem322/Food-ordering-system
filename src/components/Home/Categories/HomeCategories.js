import React from "react";
import categories from "../../../Dummy-Data/categories.json";
import "../style.scss";
import { useNavigate } from "react-router-dom";
import DescriptionBar from "../../common/DescriptionBar";
import { Col, Row } from "react-bootstrap";
const HomeCategories = () => {
  const navigate = useNavigate();
  return (
    <>
      <DescriptionBar
        title={"Top Categories"}
        desc={"New products with updated stocks."}
        path={""}
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
      <Row className="categoryBottomBanner mx-2 mt-4">
        <Col md={7} className="first">
          <p>In store or online your health & safety is our top priority</p>
          <span>
            The only supermarket that makes your life easier, makes you enjoy
            life and makes it better
          </span>
        </Col>
        <Col md={5} className="bannnerImage">
          <br></br>
        </Col>
      </Row>
    </>
  );
};

export default HomeCategories;
