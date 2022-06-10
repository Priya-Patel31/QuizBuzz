import React from "react";
import { Header } from "../../shared/header/Header";
import { Sidebar } from "../../shared/sidebar/Sidebar";
import { QuestionAndAnswer } from "./components/QuestionAndAnswer";
import "./resultsPage.css"

export const ResultsPage = () => {
  return (
    <div className="result-page-container">
      <Header />
      <div className="main-container">
        <Sidebar />
        <div className="main-content-container flex-col p-2 m-2">
          <h2 className="my-2">Your 4 out of 5 questions are correct!!!</h2>
          <div className="space-1rem"></div>
          <QuestionAndAnswer />
          <div className="space-2rem"></div>
          <button className="retake-quiz-btn font-bold">Retake Quiz </button>
          <div className="space-2rem"></div>
        </div>
      </div>
    </div>
  );
};
