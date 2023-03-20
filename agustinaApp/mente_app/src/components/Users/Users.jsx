import { useEffect, useState } from "react";
import { supabase } from "../SupabaseClient";
import UserForm from "./UserForm";
import UserList from "./UserList";
import "./Users.css";

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
