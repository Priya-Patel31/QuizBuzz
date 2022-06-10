import React from "react";
import { Avatar } from "../../../assets/images";
import {
  BsCheckCircleFill,
  BsFillClockFill,
  BsFillFlagFill,
} from "../../../assets/icons";
import {useAuth} from "../../../context/auth/AuthContext"

export const UserDetailContainer = () => {
  const {user} = useAuth();
  return (
    <div className="main-content-section1-container flex-row mb-1">
      <div className="user-image-container component-image-rounded">
        <img className="user-image" src={Avatar} alt="avatar" />
      </div>
      <div className="details-container">
        <div className="details-section1-container">
          <h2>{user?.user?.firstName}  {user?.user?.lastName}</h2>
          <small>{user?.user?.email}</small>
        </div>
        <div className="details-section2-container mt-2 flex-row">
          <div className="score-container flex-row">
            <BsFillFlagFill className="text-md" />
            <div className="flex-col align-center">
              <h2>0</h2>
              <p>Total score</p>
            </div>
          </div>
          <div className="score-container flex-row">
            <BsFillClockFill className="text-md" />
            <div>
              <h2>0min</h2>
              <p>Total time</p>
            </div>
          </div>
          <div className="score-container flex-row">
            <BsCheckCircleFill className="text-md" />
            <div className="flex-col align-center">
              <h2>0</h2>
              <p>Answers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
