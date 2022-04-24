import "./App.css";
import { Home } from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
