import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import {
  FaEnvelope,
  BsFillEyeFill,
  BsFillEyeSlashFill,
  BsArrowRight,
} from "../../../assets/icons";
import { Signin } from "../../../assets/images";
import "../authentication.css";
import { useAuth } from "../../../context/auth/AuthContext";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  let location = useLocation();
  let { login } = useAuth();
  console.log(location);
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const loginHandler = async (e, email, password) => {
    e.preventDefault();
    const success = await login({ email, password });
    if (success) {
      navigate(location.state?.from ?? "/home");
      //FOR FUTURE REFERENCE
      //   toast.success("Login successful");
    } else {
      //   toast.error("Wrong credentials");
    }
  };
  return (
    <div className="signin-container">
      <div className="authentication-details-container flex-row">
        <div className="authentication-image-container">
          <img src={Signin} alt="signin" />
        </div>
        <div className="form-components-container flex-col">
          <div className="wrapper p-2 my-2 flex-col">
            <h2 className="my-2 form-heading text-sm">Signin</h2>
            <form
              className="signup-form-container flex-col"
              onSubmit={(e) =>
                loginHandler(e, formData.email, formData.password)
              }
            >
              <ul>
                <li className="list-style-none text-xs">
                  <label className="text-xs" htmlFor="email">
                    Email address
                  </label>
                  <div className="email-field-container">
                    <input
                      id="email"
                      className="input-field form-control text-xs"
                      type="email"
                      placeholder="priya@gmail.com"
                      value={formData.email}
                      onChange={handleOnChange}
                      required
                    />
                    <FaEnvelope className="email-icon text-xs" />
                  </div>
                </li>
                <li className="list-style-none">
                  <label className="text-xs" htmlFor="password">
                    Password
                  </label>
                  <div className="password-field-container">
                    <input
                      id="password"
                      className="input-field form-control text-xs"
                      type={showPassword ? "text" : "password"}
                      placeholder="•••••••••"
                      value={formData.password}
                      onChange={handleOnChange}
                      required
                    />
                    {showPassword ? (
                      <BsFillEyeFill
                        className="password-eye-icon text-xs"
                        onClick={() => {
                          setShowPassword(!showPassword);
                        }}
                      ></BsFillEyeFill>
                    ) : (
                      <BsFillEyeSlashFill
                        className="password-eye-icon text-xs"
                        onClick={() => {
                          setShowPassword(!showPassword);
                        }}
                      ></BsFillEyeSlashFill>
                    )}
                  </div>
                </li>
                <li className="list-style-none">
                  <div className="flex-row">
                    <input className="my-2" type="checkbox" id="terms" />
                    <div className="flex-row forget-password align-center">
                      <label className="text-xs ml-1" htmlFor="terms">
                        Remember me
                      </label>
                    </div>
                  </div>
                </li>
              </ul>
              <button
                type="submit"
                className="button orange-button font-medium my-2 text-xs"
              >
                Login
              </button>
              <button
                className="button orange-button mb-2 text-xs"
                onClick={(e) => loginHandler(e, "priya@gmail.com", "priya123")}
              >
                Login As Guest
              </button>
              <div>
                <Link to="/signup" className="text-xs">
                  Create New Account
                  <span>
                    <BsArrowRight className="fas fa-arrow-right ml-2" />
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
