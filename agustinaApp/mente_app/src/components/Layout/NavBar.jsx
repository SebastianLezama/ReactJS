import React from "react";
import { supabase } from "../SupabaseClient";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";

const NavBAr = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  return (
    <nav className="NavBar">
      <div
        className="header"
        onClick={() => {
          if (auth.admin === null) {
            navigate("/");
          } else {
            navigate("/admin");
          }
        }}
      >
        HANASAKI
      </div>
      <ul>
        {auth.admin === null ? (
          <li onClick={() => navigate("/")}>LOG</li>
        ) : (
          <li onClick={() => navigate("/admin/users")}>USERS</li>
        )}

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
