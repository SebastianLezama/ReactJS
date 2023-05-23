import { createContext, useContext, useEffect, useState } from "react";
import { getUserByEmail, supabase } from "./components/SupabaseClient";
import { useNavigate } from "react-router-dom";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [admin, setAdmin] = useState(null);
  const [userSession, setUserSession] = useState(null);

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

  // const isAdmin = async () => {
  //   supabase.auth.onAuthStateChange(async (event, session) => {
  //     const dbUser = await getUserByEmail("Users", session.user.email);
  //     if (event === "SIGNED_IN" && dbUser[0].admin === true) {
  //       setAdmin(dbUser);
  //     }
  //     if (event === "SIGNED_OUT") {
  //       setAdmin(null);
  //     }
  //   });
  // };

  useEffect(() => {
    // const supabaseUser = supabase.auth.admin;
    // setUser(supabaseUser);
    // console.log(supabaseUser);
    // isAdmin();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        const dbUser = await getUserByEmail("Users", session.user.email);
        if (event === "SIGNED_IN" && dbUser[0].admin === true) {
          setAdmin(dbUser ?? null);
        }
        if (event === "SIGNED_OUT") {
          setAdmin(null);
        }
      }
    );
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return { admin, login, logout };
}
