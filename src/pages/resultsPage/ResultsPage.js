import React from "react";
import { useQuiz } from "../../context/quizContext/QuizContext";
import { Header } from "../../shared/header/Header";
import { Sidebar } from "../../shared/sidebar/Sidebar";
import { QuestionAndAnswer } from "./components/QuestionAndAnswer";
import { useNavigate } from "react-router";
import "./resultsPage.css";

export const ResultsPage = () => {
  const { state } = useQuiz();
  const navigate = useNavigate();
  const correctAnswers = state.correctAnswers;
  const answers = state.answers;

  const findNoOfCorrectAnswers = () => {
    var noOfCorrectAnswers = 0;
    for (let index = 0; index < correctAnswers.length; index++) {
      if (correctAnswers[index] === answers[index]) {
        noOfCorrectAnswers = noOfCorrectAnswers + 1;
      }
    }
    return noOfCorrectAnswers;
  };
  const result = findNoOfCorrectAnswers();
  return (
    <div className="result-page-container">
      <Header />
      <div className="main-container">
        <Sidebar />
        <div className="main-content-container flex-col p-2 m-2">
          <h2 className="my-2">
            Your {result} out of 5 questions are correct!!!
          </h2>
          <div className="space-1rem"></div>
          <QuestionAndAnswer />
          <div className="space-2rem"></div>
          <button
            className="retake-quiz-btn font-bold"
            onClick={() =>navigate("/home")}
          >
            Retake Quiz{" "}
          </button>
          <div className="space-2rem"></div>
        </div>
      </div>
    </div>
  );
};
