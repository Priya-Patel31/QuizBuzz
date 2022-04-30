import React from "react";
import { Header } from "../../shared/header/Header";
import { Sidebar } from "../../shared/sidebar/Sidebar";
import { Link } from "react-router-dom";
import { Mountain } from "../../assets/images";
import "./questionsPage.css";
import "../rulesPage/rulesPage.css";

export const QuestionsPage = () => {
  return (
    <div className="question-page-container">
      <Header />
      <div className="main-container">
        <Sidebar />
        <div className="main-content-container flex-col p-2 m-2">
          <div className="flex-row justify-between">
            <h2 className="pt-2">Quiz on Mountains</h2>
            <h2 className="pt-2">Timer: 23:41Mins</h2>
          </div>
          <p className="my-2">Answer the question below</p>
          <div className="quiz-image-details-container">
            <div className="component-image-square question-page-image-container">
              <img src={Mountain} alt="mountains" />
            </div>
            <div>
              <div className="font-bold">Question 1/5</div>
              <div className="space-1rem"></div>
              <div>
                We all know Kilimanjaro is Africa’s highest mountain. But which
                is the second highest?
              </div>
            </div>
          </div>

          <div>
            <p className="my-2 font-bold">Choose Answer</p>
            <ul className="my-2 list-style-none">
              <li>
                <label for="mount-kenya">
                  <input
                    type="radio"
                    name="options"
                    value="mount-kenya"
                    id="mount-kenya"
                    className="my-2 radio-btn"
                  />
                  &nbsp;Mount Kenya
                </label>
              </li>
              <li>
                <label for="stanley">
                  <input
                    type="radio"
                    name="options"
                    value="stanley"
                    id="stanley"
                    className="my-2 radio-btn"
                  />
                  &nbsp;Stanley
                </label>
              </li>
              <li>
                <label for="toubkal">
                  <input
                    type="radio"
                    name="options"
                    value="toubkal"
                    id="toubkal"
                    className="my-2 radio-btn"
                  />
                  &nbsp;Toubkal
                </label>
              </li>
              <li>
                <label for="simien">
                  <input
                    type="radio"
                    name="options"
                    value="simien"
                    id="simien"
                    className="my-2 radio-btn"
                  />
                  &nbsp;Simien
                </label>
              </li>
            </ul>

            {/* FOR FUTURE REFERENCE */}
            {/* Till user doesn't reaches to last question show next then show result at last question */}
            <Link to="/results_page" className="button start-button my-2 font-semibold">
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
