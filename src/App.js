import "./App.css";
import { Home } from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import MockAPI from "./mockMan";
import { RulesPage } from "./pages/rulesPage/RulesPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mockman" element={<MockAPI/>}/>
        <Route path="/" index element={<Home/>}/>
        <Route path="/rules_page" element={<RulesPage/>} />
      </Routes>
    </div>
  );
}

export default App;
