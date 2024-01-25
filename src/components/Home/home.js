import React from "react";
import Carousel from "./Carousel/carousel";
import { Container } from "react-bootstrap";
import HomeCategories from "./Categories/HomeCategories";
import Products from "./Products/Products";

const home = () => {
  return (
    <Container fluid className="px-md-5 py-4">
      <Carousel />
      <HomeCategories />
      <Products />
    </Container>
  );
};

export default home;
