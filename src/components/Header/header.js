import React from "react";
import {
  Button,
  Col,
  Container,
  Dropdown,
  Nav,
  NavDropdown,
  Navbar,
  Row,
} from "react-bootstrap";
import "./style.scss";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { MDBBadge, MDBBtn } from "mdb-react-ui-kit";
import { FaRegHeart } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
const header = () => {
  return (
    <Container fluid>
      <Row className="topRow px-md-5">
        <Col xs={6} className="left-column">
          <p>About us</p>
          <p>My Account</p>
          <p>Whishlist</p>
          <p className="text">
            We deliver to you every day from <span>7:00 to 23:00</span>
          </p>
        </Col>
        <Col xs={6} className="right-column">
          <p>English</p>
          <p>USD</p>
          <p>Order Tracking</p>
        </Col>
      </Row>
      <Row className="middleRow">
        <Navbar
          collapseOnSelect
          expand="lg"
          className="bg-body-tertiary px-md-5"
        >
          <Container fluid>
            <div className="title">
              <Link to={"/"} className="link">
                <span>Grocery</span> Store
              </Link>
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <div className="location">
                  <MdOutlineLocationOn className="icon mx-1" /> Deliver to all
                </div>
              </Nav>
              <Nav className="mx-auto">
                <form className="d-flex">
                  <input
                    type="text"
                    className="form-control mx-3"
                    placeholder="Product & Categories..."
                  />
                  <button className="btn btn-outline btn-light">
                    <IoSearchSharp className="icon" />
                  </button>
                </form>
              </Nav>
              <Nav className="ms-auto right">
                <NavLink to="/login" className=" text-center link">
                  <RiAccountPinCircleFill className="icon" />
                  <br />
                  <p>Account</p>
                </NavLink>
                <NavLink
                  to="/wishlist"
                  className="position-relative text-center link"
                >
                  <FaRegHeart className="icon" />
                  <MDBBadge
                    color="danger"
                    dark
                    pill
                    className="position-absolute translate-middle"
                  >
                    0
                  </MDBBadge>
                  <p>Whishlist</p>
                </NavLink>
                <Link to={"/cart"} className="link">
                  <div className="position-relative text-center">
                    <IoCart className="icon" />
                    <MDBBadge
                      color="danger"
                      dark
                      pill
                      className="position-absolute translate-middle"
                    >
                      0
                    </MDBBadge>
                    <p>Cart</p>
                  </div>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
      <Row className="thirdRow ">
        <Navbar expand="lg" className="bg-body-tertiary px-md-2">
          <Container fluid className="px-md-5">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-md-auto nav">
                <Link to={"/"} className="link">
                  Home
                </Link>
                <Link to={"/shop"} className="link">
                  Shop
                </Link>
                {/* <Link to={"/categories"} className="link">
                  Categories
                </Link> */}
                <Link to={"/cart"} className="link">
                  Cart
                </Link>
                <Link to={"/login"} className="link">
                  Accounts
                </Link>
              </Nav>
              <Nav className="mr-md-auto nav">
                <NavDropdown title="Trending Products" id="basic-nav-dropdown">
                  <NavDropdown.Item>Product 1</NavDropdown.Item>
                  <NavDropdown.Item>Product 2</NavDropdown.Item>
                  <NavDropdown.Item>Product 3</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Allmost Sold Out" id="basic-nav-dropdown">
                  <NavDropdown.Item>Product 1</NavDropdown.Item>
                  <NavDropdown.Item>Product 2</NavDropdown.Item>
                  <NavDropdown.Item>Product 3</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
    </Container>
  );
};

export default header;
