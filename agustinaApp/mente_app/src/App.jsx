import "./App.css";
import Calendar from "./components/Calendar";
import { Routes, Route } from "react-router-dom";
import LogIn from "./components/LogIn";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </>
  );
}

export default App;
