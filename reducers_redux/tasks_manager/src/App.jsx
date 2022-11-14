import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TaskList from "./components/tasks/toDoForm/TaskList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
