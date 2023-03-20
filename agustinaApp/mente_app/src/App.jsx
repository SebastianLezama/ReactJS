import "./App.css";
import Calendar from "./components/Calendar";
import { Routes, Route } from "react-router-dom";
import LogIn from "./components/LogIn";
import Users from "./components/Users/Users";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Calendar />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
