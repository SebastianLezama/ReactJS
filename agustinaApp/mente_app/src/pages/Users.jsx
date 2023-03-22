import { useEffect, useState } from "react";
import { supabase } from "../components/SupabaseClient";
import UserForm from "../components/Users/UserForm";
import UserList from "../components/Users/UserList";
import "../components/Users/Users.css";

// Show buttons for the users list and user form
const Users = () => {
  return (
    <div className="main-container">
      <div className="users-container">
        <div className="users-list">
          <UserList />
        </div>
        <div className="user-form">
          <UserForm />
        </div>
      </div>
    </div>
  );
};

export default Users;
