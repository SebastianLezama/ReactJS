import React from "react";
import { supabase } from "../SupabaseClient";

const NavBAr = () => {
  return (
    <div className="NavBar">
      <button className="flat-button" onClick={() => supabase.auth.signOut()}>
        Log Out
      </button>
    </div>
  );
};

export default NavBAr;
