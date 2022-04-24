import React from 'react'
import { Header } from '../../shared/header/header'

export const Home = () => {
  return (
    <div className="homepage-container">
        <Header/>
        <div className="main-container">
        <div className="sidebar ml-2 p-2">
          <ul className="sidebar-unorderd-list">
            <li className="list-style-none">
              <button className="active sidebar-list-item font-semibold text-xs p-2 mb-2">
                Dashboard
              </button>
            </li>
            <li className="list-style-none">
              <button className="sidebar-list-item font-semibold text-xs p-2 mb-2">
               Support
              </button>
            </li>
            <li className="list-style-none">
              <button className="sidebar-list-item font-semibold text-xs p-2">
              Notification
              </button>
            </li>
          </ul>
       
            <a href="/"  className="logout font-semibold text-xs">Logout</a>
      
        </div>
        <div className="main-content-container flex-col p-2">
          <div className="main-content-section1-container flex-row mb-1">
            <div className="user-image-container component-image-rounded">
              <img
                className="user-image"
                src="/images/avatar.svg"
                alt="user-image"
              />
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
          <div className="main-content-section2-container p-1 flex-row">
            <div className="main-content-section2-card-container">
              <h2 className="py-2 mb-2 flex-row justify-center">Achievements</h2>
              <div className="achievements-container flex-col">
                <div className="flex-row justify-around p-2">
                  <div className="trophy-container component-image-square">
                    <img src="/images/medal.png" alt="medal-image" />
                    <p>1st Prize</p>
                  </div>
                  <div className="trophy-container component-image-square">
                    <img src="/images/medal (1).png" alt="medal-image" />
                    <p>2nd Prize</p>
                  </div>
                </div>
                <div className="space-1rem"></div>
                <div className="trophy-container component-image-square">
                  <img src="/images/medal (3).png" alt="medal-image" />
                  <p>3rd Prize</p>
                </div>
                <div className="space-1rem"></div>
              </div>
            </div>
            <div className="main-content-section2-card-container">
              <h2 className="py-2 flex-row justify-center">Featured Category</h2>
              <div className="quiz-categories-container flex-col">
                <div className="quiz-category-card-group-container flex-row justify-around mt-2">
                  <a className="quiz-category-image component-image-square mx-1" href="/rules_page/rules_page.html">
                    <img src="/images/mountain.jpg" alt="places-img" />
                    <p>Places</p>
                  </a>
                  <a className="quiz-category-image component-image-square mx-1" href="/rules_page/rules_page.html">
                    <img src="/images/monument.jpg" alt="monument-img" />
                    <p>Monuments</p>
                  </a>
                </div>
                <div className="quiz-category-card-group-container flex-row justify-around mt-2" href="/rules_page/rules_page.html">
                  <a className="quiz-category-image component-image-square mx-1">
                    <img src="/images/museum.jpg" alt="museum-img" />
                    <p>Museums</p>
                  </a>
                  <a className="quiz-category-image component-image-square mx-1" href="/rules_page/rules_page.html">
                    <img src="/images/animal.jpg" alt="animal-img" />
                    <p>Animals</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
