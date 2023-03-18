import { useEffect, useState } from "react";
import { supabase } from "./SupabaseClient";

const Users = () => {
  // TODO Store users in local storage
  // TODO Make form to init user Log, with email
  const [users, setUsers] = useState([]);

  async function getLog() {
    try {
      const { data, error } = await supabase.from("Users").select("*");
      console.log("Error: ", error);
      if (error) throw error;
      if (data != null) setUsers(data);
      console.log(data);
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    getLog();
  }, []);

  return (
    <div>
      {users.map((e) => (
        <div key={e.user_id}>{e.email}</div>
      ))}
    </div>
  );
};

export default Users;
