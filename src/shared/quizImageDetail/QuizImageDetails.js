import React from "react";
import {Mountain} from "../../assets/images"

export const QuizImageDetails = () => {
  return (
    <div className="quiz-image-details-container">
      <div className="component-image-square rules-page-image-container">
        <img src={Mountain} alt="mountains" />
      </div>
      <div className="quiz-details-container flex-col justify-around">
        <div>
          <span className="font-semibold quiz-info">Date :</span>28/07/21
        </div>
        <div>
          <span className="font-semibold quiz-info">Time :</span>30 Mins
        </div>
        <div>
          <span className="font-semibold quiz-info">Attempts :</span>Once
        </div>
        <div>
          <span className="font-semibold quiz-info">Points :</span>200 Points
        </div>
      </div>
    </div>
  );
};
