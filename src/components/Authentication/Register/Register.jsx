import React, { useState } from "react";
import { Link } from "react-router-dom";

// styles
import "./style.scss";

// images
import loginImg from "../../../images/login.bg.jpg";

// Components
import GoogleButton from "../../common/GoogleButton/GoogleButton";
import FacebooxButton from "../../common/FacebookButton/FacebooxButton";

// React Icons
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="signup-wrapper d-flex justify-center align-center ">
      <figure className="signup-image">
        <img src={loginImg} alt="" style={{ width: "100%" }} />
      </figure>
      <div className="form-wrapper">
        <h3 className="display-6 mt-4">Register</h3>
        <p className="headline">
          More than <span>15000 recipes</span> from around the world
        </p>
        <form>
          <input
            type="text"
            placeholder="Enter Full Name"
            className="input mb-4"
            required
          />
          <input
            type="email"
            placeholder="Enter your email address"
            className="input mb-4"
            required
          />
          <div className="position-relative w-100">
            <input
              type={showPassword ? "password" : "text"}
              placeholder="Enter your password"
              className="input"
              required
            />
            {showPassword ? (
              <div style={{ position: "absolute", top: "10px", right: "10px" }}>
                <AiFillEyeInvisible
                  className="cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              </div>
            ) : (
              <div style={{ position: "absolute", top: "10px", right: "10px" }}>
                <AiFillEye
                  className="cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              </div>
            )}
          </div>
          <div className="links d-flex justify-content-between align-center w-100">
            <div className="remember-password gap-2 ">
              <input type="checkbox" />
              <p className="mt-3">Remember password</p>
            </div>
            <a to="/register">Login instead?</a>
          </div>
          <button className="login-button">Create Account</button>
          <p className="privacy-text">
            By clicking on &quot;Create Account&quot; button you're agreeing the{" "}
            <strong>Terms of Servcies and Privacy Policy</strong>
          </p>
          <div className="login-with">
            <div className="line"></div>
            <p>Login with</p>
            <div className="line"></div>
          </div>
          <div className="btn-group gap-2">
            <FacebooxButton />
            <GoogleButton />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
