import React from "react";
import { supabase } from "../SupabaseClient";
import { useNavigate } from "react-router-dom";

const NavBAr = () => {
  const navigate = useNavigate();

  return (
    <nav className="NavBar">
      <div className="header" onClick={() => navigate("/")}>
        Mente App
      </div>
      <ul>
        <li onClick={() => navigate("/admin/users")}>USERS</li>
        <li>
          <button
            className="flat-button"
            onClick={() => supabase.auth.signOut()}
          >
            Log Out
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBAr;
