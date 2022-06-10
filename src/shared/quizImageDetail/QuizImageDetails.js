import React from "react";
import { useLocation } from "react-router-dom";

export const QuizImageDetails = () => {
  const date = new Date();
  const location = useLocation();
  return (
    <div className="quiz-image-details-container">
      <div className="component-image-square rules-page-image-container">
        <img src={location.state.imageUrl} alt={location.state.name} />
      </div>
      <div className="quiz-details-container flex-col justify-around">
        <div>
          <span className="font-semibold quiz-info">Date :</span>
          {date.toLocaleString().substring(0, 8)}
        </div>
        <div>
          <span className="font-semibold quiz-info">Time :</span>30 Mins
        </div>
        <div>
          <span className="font-semibold quiz-info">Attempts :</span>Once
        </div>
        <div>
          <span className="font-semibold quiz-info">Points :</span>20 Points
        </div>
      </div>
    </div>
  );
};
