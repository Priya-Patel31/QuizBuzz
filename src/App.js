import "./App.css";
import { Home } from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import MockAPI from "./mockMan";
import { RulesPage } from "./pages/rulesPage/RulesPage";
import { QuestionsPage } from "./pages/questionsPage/QuestionsPage";
import { ResultsPage } from "./pages/resultsPage/ResultsPage";
import { Login } from "./pages/authentication/login/Login";
import { Signup } from "./pages/authentication/signup/Signup";
import { PrivateRoute } from "./shared/privateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/mockman" element={<MockAPI />} />
        <Route path="/" index element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" index element={<Login />} />
        <Route path="/home" element={<Home />} />

        <Route
          path="/rules_page"
          element={
            <PrivateRoute path="/rules_page">
              <RulesPage />
            </PrivateRoute>
          }
        />
        <Route path="/questions_page" element={<QuestionsPage />} />
        <Route path="/results_page" element={<ResultsPage />} />
      </Routes>
    </div>
  );
}

export default App;
