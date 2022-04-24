import React from 'react'
import { Medal1,Medal2,Medal3 } from '../../../assets/images'

export const Achievements = () => {
  return (
    <div className="main-content-section2-card-container">
    <h2 className="py-2 mb-2 flex-row justify-center">Achievements</h2>
    <div className="achievements-container flex-col">
      <div className="flex-row justify-around p-2">
        <div className="trophy-container component-image-square">
          <img src={Medal1} alt="medal" />
          <p>1st Prize</p>
        </div>
        <div className="trophy-container component-image-square">
          <img src={Medal2} alt="medal" />
          <p>2nd Prize</p>
        </div>
      </div>
      <div className="space-1rem"></div>
      <div className="trophy-container component-image-square">
        <img src={Medal3} alt="medal" />
        <p>3rd Prize</p>
      </div>
      <div className="space-1rem"></div>
    </div>
  </div>
  )
}
