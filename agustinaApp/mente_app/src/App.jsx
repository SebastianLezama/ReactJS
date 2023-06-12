import "./App.css";
import Calendar from "./pages/calendar";
import { Routes, Route, useNavigate } from "react-router-dom";
import LogIn from "./pages/LogIn";
import Users from "./pages/Users";
import { useEffect } from "react";
import { supabase } from "./components/SupabaseClient";
import Layout from "./components/Layout/Layout";
import MockLog from "./pages/MockLog";
import Log from "./pages/Log";
import { useAuth } from "./AuthContext";

function App() {
  const navigate = useNavigate();

  const auth = useAuth();

  useEffect(() => {
    // if (
    //   auth.userSession?.id === "3ad48f8-cddf-4b0f-818f-f927f1d16a98" ||
    //   auth.userSession?.id === "33f15321-9673-4c56-baf6-992d96461248"
    // ) {
    //   navigate("/admin");
    // }
    // if (!auth.userSession) {
    //   navigate("/login");
    // } else {
    //   navigate("/");
    // }
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/login");
      }

      if (
        session.user.id === "3ad48f8-cddf-4b0f-818f-f927f1d16a98" ||
        session.user.id === "33f15321-9673-4c56-baf6-992d96461248"
      ) {
        navigate("/admin");
      } else {
        navigate("/");
      }
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Log />} />
        </Route>
        <Route path="/admin" element={<Layout />}>
          <Route index element={<Calendar />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/mock" element={<MockLog />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
