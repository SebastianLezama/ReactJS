import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Tasks from "./components/Tasks/Tasks";
import Navbar from "./components/Navbar/Navbar";
import PrivateRoute from "./utils/PrivateRoute";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Tasks />} />
            <Route path="/tasks/:taskId" element={<Tasks />} />
          </Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
