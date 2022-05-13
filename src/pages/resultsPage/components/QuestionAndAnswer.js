import React from "react";
import { useQuiz } from "../../../context/quizContext/QuizContext";

export const QuestionAndAnswer = () => {
  const { state } = useQuiz();
  const correctAnswers = state.correctAnswers;
  const answers = state.answers;

  return (
    <div>
      {state.questions.map((question, index) => {
        return (
          <div>
            <p className="font-bold">{question.question}</p>
            <div className="space-1rem"></div>
            <div className="list-container pl-2">
              <ol className="upper-alphabets-list">
                {question.options.map((option) => {
                  return <li className="list-item">{option}</li>;
                })}
              </ol>
            </div>
            <p className="my-1 correct-answer">
              Correct Answer :{" "}
              {question.options[correctAnswers[index].charCodeAt(0) - 97]}{" "}
            </p>
            <p
              className={`my-1 ${
                correctAnswers[index] === answers[index]
                  ? "correct-answer"
                  : "wrong-answer"
              }`}
            >
              Your Answer :{" "}
              {question.options[answers[index].charCodeAt(0) - 97]}
            </p>
          </div>
        );
      })}
    </div>
  );
};
//
