import React, { useState } from "react";
import {
  FaEnvelope,
  BsFillEyeFill,
  BsFillEyeSlashFill,
  BsArrowRight,
} from "../../../assets/icons";
import { Signup as SignupImage } from "../../../assets/images";
import { Link, useNavigate } from "react-router-dom";
import "../authentication.css";
import {useAuth} from "../../../context/auth/AuthContext";

export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const { signup } = useAuth();
  const handleOnClick = async (e) => {
    e.preventDefault();
    const success = await signup(formData);
    if (success) {
      // FOR FUTURE REFERENCE
      //   toast.success("Signup successful");
      navigate("/home");
    } else {
      //   toast.error("Wrong credentials");
    }
  };
  return (
    <div className="signup-container">
      <div className="authentication-details-container flex-row mx-2">
        <div className="authentication-image-container">
          <img src={SignupImage} className="signup-image" alt="signup-img" />
        </div>
        <div className="form-components-container flex-col">
          <div className="wrapper p-2 my-2 flex-col">
            <h2 className="my-2 form-heading text-sm">Signup</h2>
            <form
              className="signup-form-container flex-col"
              onSubmit={ handleOnClick}
            >
              <ul>
                <li className="list-style-none text-xs">
                  <div className="email-field-container">
                    <label className="text-xs text-white" htmlFor="firstName">
                      First name
                    </label>
                    <input
                      id="firstName"
                      className="input-field form-control text-xs"
                      type="text"
                      placeholder="priya"
                      value={formData.firstName}
                      onChange={handleOnChange}
                      required
                    />
                  </div>
                </li>
                <li className="list-style-none text-xs">
                  <div className="email-field-container">
                    <label className="text-xs text-white" htmlFor="lastName">
                      Last name
                    </label>
                    <input
                      id="lastName"
                      className="input-field form-control text-xs"
                      type="text"
                      placeholder="patel"
                      value={formData.lastName}
                      onChange={handleOnChange}
                      required
                    />
                  </div>
                </li>
                <li className="list-style-none text-xs">
                  <label className="text-xs" htmlFor="email">
                    Email address
                  </label>
                  <div className="email-field-container">
                    <input
                      id="email"
                      className="input-field form-control"
                      type="email"
                      placeholder="priya@gmail.com"
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
                      className="input-field form-control"
                      type={showPassword ? "text" : "password"}
                      placeholder="•••••••••"
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
                  <input className="my-2" type="checkbox" />
                  <label className="text-xs ml-1" htmlFor="terms">
                    I accept all the terms and conditions
                  </label>
                </li>
              </ul>
              <button
                className="button orange-button font-medium my-2 text-xs"
                type="submit"
              >
                Create New Account
              </button>
              <div>
                <Link to="/login" className="text-xs">
                  Already have an account
                  <span>
                    <BsArrowRight className="ml-2" />
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
