import React from "react";

// React Icons
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";

// Styles
import "./style.scss";

// Images
import googlePlayImg from "../../../images/google-play-button-dark.png";
import appleStoreImg from "../../../images/apple-store-button-dark.png";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      {/* News Letter Section */}
      <div className="news-letter">
        {/* News left */}
        <div className="news-left">
          <h3>Join our newsletter for £10 offs</h3>
          <p className="news-letter-text">
            Register now to get latest updates on promotions & coupons.Don’t
            worry, we not spam!
          </p>
        </div>
        {/* News Letter right */}
        <div className="news-right">
          <div className="input-group">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
            <span class="input-group-btn">
              <button className="news-button" type="submit">
                Subscribe Now
              </button>
            </span>
          </div>
          <p className="subscribe-text">
            By subscribing you agree to our{" "}
            <span>Terms & Conditions and Privacy & Cookies Policy.</span>
          </p>
        </div>
      </div>
      <hr />
      {/* Footer Main Section */}
      <div className="main-footer">
        <div className="main-footer-box main-footer-left-box">
          <p className="footer-main-heading">Do You need help</p>
          <p>
            Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat.
            Pressa fåmoska.
          </p>
          <div className="icon-with-text-row d-flex justify-content-start gap-4 ">
            <MdOutlinePhoneInTalk size={40} className="mb-0 mt-2" />
            <div className="description">
              <p className="mb-0">Monday-Friday: 08am-9pm</p>
              <h3>0 800 300-353</h3>
            </div>
          </div>
          <div className="icon-with-text-row d-flex justify-content-start gap-4 mt-4">
            <MdEmail MdOutlinePhoneInTalk size={40} className="mb-0 mt-2" />
            <div className="description">
              <p className="mb-0">Need help with your order?</p>
              <strong>info@example.com</strong>
            </div>
          </div>
        </div>
        <div className="main-footer-box">
          <p className="footer-main-heading">Make Money with Us</p>
          <p className="mb-1">Sell on Grogin</p>
          <p className="mb-1">Sell Your Services on Grogin</p>
          <p className="mb-1">Sell on Grogin Business</p>
          <p className="mb-1">Sell Your Apps on Grogin</p>
          <p className="mb-1">Become an Affilate</p>
          <p className="mb-1">Advertise Your Products</p>
          <p className="mb-1">Sell-Publish with Us</p>
          <p className="mb-1">Become an Blowwe Vendor</p>
        </div>
        <div className="main-footer-box">
          <p className="footer-main-heading">Let Us Help You</p>
          <p className="mb-1">Accessibility Statement</p>
          <p className="mb-1">Returns & Replacements</p>
          <p className="mb-1">Shipping Rates & Policies</p>
          <p className="mb-1">Refund and Returns Policy</p>
          <p className="mb-1">Privacy Policy</p>
          <p className="mb-1">Terms and Conditions</p>
          <p className="mb-1">Cookie Settings</p>
          <p className="mb-0">Help Center</p>
        </div>
        <div className="main-footer-box">
          <p className="footer-main-heading">Get to Know Us</p>
          <p className="mb-1">Careers for Grogin</p>
          <p className="mb-1">About Grogin</p>
          <p className="mb-1">Inverstor Relations</p>
          <p className="mb-1">Grogin Devices</p>
          <p className="mb-1">Customer reviews</p>
          <p className="mb-1">Social Responsibility</p>
          <p className="mb-1">Store Locations</p>
        </div>
        <div className="main-footer-box">
          <p className="footer-main-heading">Do You need help</p>

          <div className="img-with-text-row d-flex justify-content-start align-items- center gap-2">
            <img src={googlePlayImg} alt={googlePlayImg} />
            <p className="mini-text-description">
              Download App Get -10% Discount
            </p>
          </div>
          <div className="img-with-text-row img-with-text-row d-flex justify-content-start align-items-center gap-2 mt-2 mb-2">
            <img src={appleStoreImg} alt={appleStoreImg} className="" />
            <p className="mini-text-description">
              Download App Get -10% Discount
            </p>
          </div>
          <div className="social">
            <p>Follow on social Media</p>
            <div className="social-icons d-flex justify-content-start align-items-center gap-2">
              <div>
                <FaFacebookF size={20} color="#1877F2" />
              </div>
              <div>
                <FaTwitter size={20} color="#1DA1F2" />
              </div>
              <div>
                <FaLinkedin size={20} color="#FD1D1D" />
              </div>
              <div>
                <FaInstagram size={20} color="#0077B5" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="below-footer d-flex justify-content-between align-items-center mt-4">
        <p>Copyright 2024 © NHD Food, Made by Ahmad Fraz and Usama Kaleem</p>

        <div className="d-flex justify-content-between align-items-center gap-2">
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Order Tracking</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
