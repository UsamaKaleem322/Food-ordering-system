import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import products from '../../Dummy-Data/products.json'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import './style.scss'
import { Col, Row } from "react-bootstrap";
import Footer from "../common/Footer/Footer";
import Header from '../Header/header'
export default function Cart() {
  const cartproduct = products.slice(3, 7)
  const totalPrice = cartproduct.reduce((accumulator, product) => {
    return accumulator + product.price;
  }, 0);
  const navigate = useNavigate()
  return (
    <>
      <Header />
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol>
              <MDBCard>
                <MDBCardBody className="p-4">
                  <Row>
                    <Col lg="7">
                      <MDBTypography tag="h5">
                        <Link to={'/shop'} className="text-body link">
                          <FaLongArrowAltLeft /> Continue
                          shopping
                        </Link>
                      </MDBTypography>

                      <hr />

                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-1">Shopping cart</p>
                        </div>
                        <div>
                          <p className="mb-0">You have 4 items in your cart</p>

                        </div>
                      </div>
                      {products.map(product =>
                        <MDBCard className="mb-3">
                          <MDBCardBody>
                            <div className="d-flex justify-content-between">
                              <div className="d-flex flex-row align-items-center">
                                <div>
                                  <MDBCardImage
                                    src={product.image}
                                    fluid className="rounded-3" style={{ width: "65px" }}
                                    alt="Shopping item" />
                                </div>
                                <div className="ms-3">
                                  <MDBTypography tag="h5">
                                    {product.name.slice(0, 40)}...
                                  </MDBTypography>
                                  <p className="small mb-0">{product.category}</p>
                                </div>
                              </div>
                              <div className="d-flex flex-row align-items-center">
                                <div style={{ width: "50px" }}>
                                  <MDBTypography tag="h5" className="fw-normal mb-0">
                                    1
                                  </MDBTypography>
                                </div>
                                <div style={{ width: "80px" }}>
                                  <MDBTypography tag="h5" className="mb-0">
                                    ${product.price}
                                  </MDBTypography>
                                </div>
                                <a href="#!" style={{ color: "#cecece" }}>
                                  <MDBIcon fas icon="trash-alt" />
                                </a>
                              </div>
                            </div>
                          </MDBCardBody>
                        </MDBCard>
                      ).slice(3, 7)}

                    </Col>

                    <Col lg="5" className="checkout  rounded-3">
                      <MDBCard className="bg-transparent text-white ">
                        <MDBCardBody>
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <MDBTypography tag="h5" className="mb-0">
                              Card details
                            </MDBTypography>
                            <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                              fluid className="rounded-3" style={{ width: "45px" }} alt="Avatar" />
                          </div>

                          <p className="small">Card type</p>
                          <a href="#!" type="submit" className="text-white">
                            <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <MDBIcon fab icon="cc-visa fa-2x me-2" />
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <MDBIcon fab icon="cc-amex fa-2x me-2" />
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <MDBIcon fab icon="cc-paypal fa-2x me-2" />
                          </a>

                          <form className="mt-4">
                            <MDBInput className="mb-4" label="Cardholder's Name" type="text" size="lg"
                              placeholder="Cardholder's Name" contrast />

                            <MDBInput className="mb-4" label="Card Number" type="text" size="lg"
                              minLength="19" maxLength="19" placeholder="1234 5678 9012 3457" contrast />

                            <MDBRow className="mb-4">
                              <MDBCol md="6">
                                <MDBInput className="mb-4" label="Expiration" type="text" size="lg"
                                  minLength="7" maxLength="7" placeholder="MM/YYYY" contrast />
                              </MDBCol>
                              <MDBCol md="6">
                                <MDBInput className="mb-4" label="Cvv" type="text" size="lg" minLength="3"
                                  maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast />
                              </MDBCol>
                            </MDBRow>
                          </form>

                          <hr />

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Subtotal</p>
                            <p className="mb-2">${totalPrice}</p>
                          </div>

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Shipping</p>
                            <p className="mb-2">$20.00</p>
                          </div>

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Total(Incl. taxes)</p>
                            <p className="mb-2">${totalPrice + 20}</p>
                          </div>

                          <button className="button" onClick={() => navigate('/checkout')}>Checkout <FaLongArrowAltRight className="icon" /></button>
                        </MDBCardBody>
                      </MDBCard>
                    </Col>
                  </Row>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <Footer/>
    </>
  );
}