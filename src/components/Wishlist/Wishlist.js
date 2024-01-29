import React, { useState } from "react";

// React Icons
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";

import Footer from "../common/Footer/Footer";
import Header from '../Header/header';
// style
import "./Wishlist.scss";

// Products Data
import products from "../../Dummy-Data/products.json";

function Wishlist() {
  const [productsData, setProductsData] = useState(products);
  return (
    <>
    <Header/>
    <MDBContainer fluid>
      {productsData
        .map((product) => (
          <MDBRow className="justify-content-center mb-0">
            <MDBCol md="12" xl="10">
              <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                      <MDBRipple
                        rippleColor="light"
                        rippleTag="div"
                        className="bg-image rounded hover-zoom hover-overlay"
                      >
                        <MDBCardImage
                          src={product.image}
                          fluid
                          style={{ width: "80%" }}
                        />
                        <a href="#!">
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(251, 251, 251, 0.15)",
                            }}
                          ></div>
                        </a>
                      </MDBRipple>
                    </MDBCol>
                    <MDBCol md="6">
                      <h5>{product.name}</h5>
                      <div className="d-flex flex-row">
                        <div className="text-danger mb-1 me-2">
                          <MDBIcon fas icon="star" />
                          <MDBIcon fas icon="star" />
                          <MDBIcon fas icon="star" />
                          <MDBIcon fas icon="star" />
                        </div>
                      </div>
                      <div className="mt-1 mb-0 text-muted small">
                        {product.category}
                      </div>

                      <p className="mb-4 product-desc">{product.desc}</p>

                      <strong className="text-white p-2 rounded bg-success mt-6">
                        {product.stock && "In Stock"}
                      </strong>
                    </MDBCol>
                    <MDBCol
                      md="6"
                      lg="3"
                      className="border-sm-start-none border-start"
                    >
                      <div className="d-flex flex-row align-items-center mb-1">
                        <h4 className="mb-1 me-1">${product.price}</h4>
                        <span className="text-danger">
                          <s>$20.99</s>
                        </span>
                      </div>
                      <h6 className="text-success">Free shipping</h6>
                      <div className="d-flex flex-column mt-4">
                        <button className="btn-color">Delete</button>
                        <button className="add-to-cart">Add to cart</button>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        ))
        .splice(0, 6)}
    </MDBContainer>
    <Footer/>
    </>
  );
}

export default Wishlist;
