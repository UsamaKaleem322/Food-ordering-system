import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

// styles
import "./style.scss";

// images
import loginImg from "../../../images/login.bg.jpg";

// Components
import GoogleButton from "../../common/GoogleButton/GoogleButton";
import FacebooxButton from "../../common/FacebookButton/FacebooxButton";

// React Icons
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault();
    navigate('/')
  }
  return (
    <div className="login-wrapper d-flex justify-center align-center ">
      <figure className="login-image">
        <img src={loginImg} alt="" style={{ width: "100%" }} />
      </figure>
      <div className="form-wrapper">
        <h3 className="display-6 mt-4">Login</h3>
        <p className="headline">
          More than <span>15000 recipes</span> from around the world
        </p>
        <form onSubmit={handleSubmit}>
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
            <NavLink to="/register">Create Account?</NavLink>
          </div>
          <button className="login-button">Login</button>
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

export default Login;
