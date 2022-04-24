import React from 'react'
import { Avatar } from '../../../assets/images'

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
          <i className="fa-solid fa-flag text-md"></i>
          <div className="flex-col align-center">
            <h2>27</h2>
            <p>Total score</p>
          </div>
        </div>
        <div className="score-container flex-row">
          <i className="fa-solid fa-clock text-md"></i>
          <div>
            <h2>27min</h2>
            <p>Total time</p>
          </div>
        </div>
        <div className="score-container flex-row">
          <i className="fa-solid fa-circle-check text-md"></i>
          <div className="flex-col align-center">
            <h2>200</h2>
            <p>Answers</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
