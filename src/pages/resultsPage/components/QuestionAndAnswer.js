import React from "react";

export const QuestionAndAnswer = () => {
  return (
    <div>
      <p className="font-bold">
        {" "}
        We all know Kilimanjaro is Africa’s highest mountain. But which is the
        second highest?
      </p>
      <div className="space-1rem"></div>
      <div className="list-container pl-2">
        <ol className="upper-alphabets-list">
          <li className="list-item">Mount Kenya</li>
          <li className="list-item">Stanley</li>
          <li className="list-item">Toubkal</li>
          <li className="list-item">Simien</li>
        </ol>
      </div>
      <p className="my-1 correct-answer">Correct Answer : Mount Kenya </p>
      <p className="my-1 correct-answer">Your Answer : Mount Kenya</p>
      {/* FOR FUTURE REFERENCE and LATER ON I WILL REMOVE THIS */}
      {/* add wrong-answer className for wrong answers */}
    </div>
  );
};
