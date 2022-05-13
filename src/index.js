import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import { AuthContextProvider } from "./context/auth/AuthContext";
import { QuizContextProvider } from "./context/quizContext/QuizContext";


makeServer();
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <QuizContextProvider>
          <App />
        </QuizContextProvider>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
