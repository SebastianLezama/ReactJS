import "./App.css";
import Calendar from "./pages/calendar";
import { Routes, Route, useNavigate } from "react-router-dom";
import LogIn from "./pages/LogIn";
import Users from "./pages/Users";
import { useEffect } from "react";
import { supabase } from "./components/SupabaseClient";
import Layout from "./components/Layout/Layout";
import MockLog from "./pages/MockLog";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session);
      if (!session.user) {
        navigate("/login");
      } else {
        navigate("/");
      }
    });
  }, [navigate]);

  return (
    <>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Calendar />} />
          <Route path="/users" element={<Users />} />
          <Route path="/mock" element={<MockLog />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
