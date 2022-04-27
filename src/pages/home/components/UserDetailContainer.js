import React from "react";
import { Avatar } from "../../../assets/images";
import {
  BsCheckCircleFill,
  BsFillClockFill,
  BsFillFlagFill,
} from "../../../assets/icons";

export const UserDetailContainer = () => {
  return (
    <div className="main-content-section1-container flex-row mb-1">
      <div className="user-image-container component-image-rounded">
        <img className="user-image" src={Avatar} alt="avatar" />
      </div>
      <div className="details-container">
        <div className="details-section1-container">
          <h2>Priya Patel</h2>
          <small>priya@gmail.com</small>
        </div>
        <div className="details-section2-container mt-2 flex-row">
          <div className="score-container flex-row">
            <BsFillFlagFill className="text-md" />
            <div className="flex-col align-center">
              <h2>27</h2>
              <p>Total score</p>
            </div>
          </div>
          <div className="score-container flex-row">
            <BsFillClockFill className="text-md" />
            <div>
              <h2>27min</h2>
              <p>Total time</p>
            </div>
          </div>
          <div className="score-container flex-row">
            <BsCheckCircleFill className="text-md" />
            <div className="flex-col align-center">
              <h2>200</h2>
              <p>Answers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
