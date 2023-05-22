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
    supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session);
      if (!session) {
        // if (session === null) {
        navigate("/login");
      }
      // console.log(auth.user);
      try {
        if (auth.user[0].admin === true) {
          navigate("/admin");
        }
      } catch (error) {
        // alert(error.message);
      }
      // console.log(getSessionEmail());
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
