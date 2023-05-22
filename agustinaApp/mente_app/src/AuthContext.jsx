import { createContext, useContext, useEffect, useState } from "react";
import { getUserByEmail, supabase } from "./components/SupabaseClient";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const login = async (email) => {
    try {
      const { data, error } = await supabase.auth.signInWithOtp({
        email: email,
        options: {
          emailRedirectTo: "http://127.0.0.1:5173/",
        },
      });
      if (error) throw error;
    } catch (error) {
      alert(error.message);
    }
  };
  const logout = async () => {
    const { error } = await supabase.auth.signOut();
  };

  const isAdmin = async () => {
    const auth = supabase.auth.onAuthStateChange(async (event, session) => {
      const dbUser = await getUserByEmail("Users", session.user.email);
      if (event === "SIGNED_IN" && dbUser[0].admin === true) {
        console.log("1", user);
        console.log("admin TRUE", dbUser[0].admin, dbUser[0].email);
        console.log("2", dbUser);
        setUser(dbUser);
        console.log("3", user);
        // if (dbUser[0].admin === true) {
        // }
      }
      if (event === "SIGNED_OUT") {
        setUser(null);
      }
    });
  };

  useEffect(() => {
    // const supabaseUser = supabase.auth.admin;
    // setUser(supabaseUser);
    // console.log(supabaseUser);

    isAdmin();
    // return () => {
    //   auth.subscribe();
    // };
  }, []);

  return { user, login, logout };
}
