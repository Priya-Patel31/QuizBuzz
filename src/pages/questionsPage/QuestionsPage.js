import React from "react";
import { Header } from "../../shared/header/Header";
import { Sidebar } from "../../shared/sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import "./questionsPage.css";
import "../rulesPage/rulesPage.css";
import { useQuiz } from "../../context/quizContext/QuizContext";
import {toast} from "react-toastify"

export const QuestionsPage = () => {
  const navigate = useNavigate();
  const {
    dispatch,
    state: { quizName, quizImage, questions, answers, currentQuestion },
  } = useQuiz();

  return (
    <div className="question-page-container">
      <Header />
      <div className="main-container">
        <Sidebar />
        <div className="main-content-container flex-col p-2 m-2">
          <div className="flex-row justify-between">
            <h2 className="pt-2">Quiz on {quizName}</h2>
            <h2 className="pt-2">Timer: 23:41Mins</h2>
          </div>
          <p className="my-2">Answer the question below</p>
          <div className="quiz-image-details-container">
            <div className="component-image-square question-page-image-container">
              <img src={quizImage} alt="mountains" />
            </div>
            <div>
              <div className="font-bold">
                Question {currentQuestion + 1}/{questions.length}
              </div>
              <div className="space-1rem"></div>
              <div>{questions[currentQuestion]?.question}</div>
            </div>
          </div>

          <div>
            <p className="my-2 font-bold">Choose Answer</p>
            <ul className="my-2 list-style-none">
              {questions[currentQuestion]?.options.map((option, index) => {
                return (
                  <li>
                    <label htmlFor={String.fromCharCode(index + 97)}>
                      <input
                        type="radio"
                        name="options"
                        checked={
                          answers[currentQuestion] ===
                          String.fromCharCode(index + 97)
                        }
                        id={String.fromCharCode(index + 97)}
                        className="my-2 radio-btn"
                        onChange={() => {
                          dispatch({
                            type: "SET_ANSWERS",
                            payload: {
                              optionSelected: String.fromCharCode(index + 97),
                              questionIndex: currentQuestion,
                            },
                          });
                        }}
                      />
                      &nbsp;{option}
                    </label>
                  </li>
                );
              })}
            </ul>
            <button
              disabled={currentQuestion === 0}

              onClick={() => {
                dispatch({ type: "PREV_QUESTION" });
              }}
              className="button start-button my-2 font-semibold mx-2"
            >
              Prev
            </button>
            <button
              className="button start-button my-2 font-semibold"
              onClick={() => {
                if (currentQuestion === questions.length - 1) {
                  dispatch({
                    type: "RESET_CURRENT_QUESTION",
                  });
                  navigate("/results_page");
                } else {
                 
                  if(answers[currentQuestion] !== ""){
                    dispatch({type: "NEXT_QUESTION"})
                  } else {
                    toast.error("Choose an answer");
                  }
                }
              }}
            >
              {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
