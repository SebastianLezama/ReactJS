import "./App.css";
import Calendar from "./components/Calendar";
import Users from "./components/users";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </>
  );
}

export default App;
