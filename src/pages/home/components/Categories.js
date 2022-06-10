import React from "react";
import { Link } from "react-router-dom";
import { Monument, Mountain, Museum, Animal } from "../../../assets/images";

export const Categories = () => {
  return (
    <div className="main-content-section2-card-container">
      <h2 className="py-2 flex-row justify-center">Featured Category</h2>
      <div className="quiz-categories-container flex-col">
        <div className="quiz-category-card-group-container flex-row justify-around mt-2">
          <Link
            to="/rules_page/1" state={{name : "Mountains" ,imageUrl: Mountain}}
            className="quiz-category-image component-image-square mx-1"
          >
            <img src={Mountain} alt="mountain" />
            <p>Mountain</p>
          </Link>

          <Link
            to="/rules_page/2" state={{name: "Monuments" , imageUrl : Monument}}
            className="quiz-category-image component-image-square mx-1"
          >
            <img src={Monument} alt="monument" />
            <p>Monuments</p>
          </Link>
        </div>
        <div className="quiz-category-card-group-container flex-row justify-around mt-2">
          <Link
            to="/rules_page/3" state={{name: "Museums" , imageUrl : Museum}}
            className="quiz-category-image component-image-square mx-1"
          >
            <img src={Museum} alt="museum" />
            <p>Museums</p>
          </Link>
          <Link
            to="/rules_page/4" state={{name: "Animals" , imageUrl : Animal}}
            className="quiz-category-image component-image-square mx-1"
          >
            <img src={Animal} alt="animal" />
            <p>Animals</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
