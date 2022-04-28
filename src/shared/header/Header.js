import React from "react";
import "./header.css";
import { Logo, Avatar } from "../../assets/images";
import { BiSearch } from "../../assets/icons";

export const Header = () => {
  return (
    <div className="header flex-row justify-between align-center px-2">
      <div className="flex-row justify-center align-center">
        <img className="logo-image" src={Logo} alt="logo" />
        <span className="logo-text">
          Quiz<span className="text-orange">Buzz</span>
        </span>
      </div>
      <div className="search-bar-container">
        <button>
          <BiSearch />
        </button>
        <input type="search" placeholder="Search" className="search-bar" />
      </div>

      <div className="flex-row justify-center align-center">
        <div className="mr-2">
          {/* Future reference */}
          {/* <Link to="/login">Login</Link> */}
        </div>
        <div className="component-image-rounded user-sm-image">
          <img
            src={Avatar}
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
};
