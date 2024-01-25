import React from "react";
import Carousel from "./Carousel/carousel";
import { Container } from "react-bootstrap";
import HomeCategories from "./Categories/HomeCategories";
import Products from "./Products/NewProducts";
import CategoryBanners from "./Category Banners/CategoryBanners";
import NewArrivals from "./Products/NewArrivals";
import CategoryBanners2 from "./Category Banners2/CategoryBanners2";
import FeaturedProducts from "./Products/FeaturedProducts";
import CategoryBanners3 from "./Category Banner 3/CategoryBanners3";
import Deals from "./Deals Of The Day/Deals";

const home = () => {
  return (
    <Container fluid className="px-md-5 py-4">
      <Carousel />
      <HomeCategories />
      <Products />
      <CategoryBanners />
      <NewArrivals />
      <CategoryBanners2 />
      <FeaturedProducts />
      <CategoryBanners3 />
      <Deals />
    </Container>
  );
};

export default home;
