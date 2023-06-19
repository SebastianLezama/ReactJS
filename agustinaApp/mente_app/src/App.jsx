import "./App.css";
import Calendar from "./pages/calendar";
import { Routes, Route, useNavigate, redirect } from "react-router-dom";
import LogIn from "./pages/LogIn";
import Users from "./pages/Users";
import { useEffect } from "react";
import { supabase } from "./components/SupabaseClient";
import Layout from "./components/Layout/Layout";
import MockLog from "./pages/MockLog";
import Log from "./pages/Log";
import { useAuth } from "./Context/AuthContext";
import Home from "./pages/Home";
import Invite from "./pages/Invite";

function App() {
  const navigate = useNavigate();

  const auth = useAuth();

  useEffect(() => {
    if (!auth.userSession) {
      navigate("/login");
    }

    if (auth.user !== null) {
      navigate("/");
    }

    return () => {
      const { data: listener } = supabase.auth.onAuthStateChange(
        (_event, session) => {
          if (!session) {
            navigate("/login");
          }
          if (auth?.admin === true) {
            navigate("/admin");
          }
          if (!session) {
            navigate("/login");
          }
        }
      );
      listener.subscription.unsubscribe();
    };
  }, [auth.userSession]);

  return (
    <>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/log" element={<Log />} />
        </Route>
        <Route path="/admin" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/admin/calendar" element={<Calendar />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/invite" element={<Invite />} />
          <Route path="/admin/mock" element={<MockLog />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
