import { useEffect, useState } from "react";
import { supabase } from "../SupabaseClient";

const Users = () => {
  // TODO Store users in local storage
  // TODO Make form to init user Log, with email
  const [users, setUsers] = useState([]);

  async function getUsers() {
    try {
      const { data, error } = await supabase.from("Users").select("*");
      // console.log("Error: ", error);
      if (error) throw error;
      if (data != null) setUsers(data);
      // console.log(data);
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {users &&
        users.map((e) => (
          <div key={e.name}>
            <div>{e.name}</div>
            <div>{e.edad}</div>
            <div>{e.email}</div>
          </div>
        ))}
    </div>
  );
};

export default Users;
