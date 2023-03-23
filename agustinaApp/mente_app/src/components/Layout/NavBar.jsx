import React from "react";
import { supabase } from "../SupabaseClient";

const NavBAr = () => {
  return (
    <nav className="NavBar">
      <div>Mente App</div>
      <ul>
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
