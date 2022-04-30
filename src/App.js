import "./App.css";
import { Home } from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import MockAPI from "./mockMan";
import { RulesPage } from "./pages/rulesPage/RulesPage";
import { QuestionsPage } from "./pages/questionsPage/QuestionsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mockman" element={<MockAPI/>}/>
        <Route path="/" index element={<Home/>}/>
        <Route path="/rules_page" element={<RulesPage/>} />
        <Route path="/questions_page" element={<QuestionsPage/>} />
      </Routes>
    </div>
  );
}

export default App;
