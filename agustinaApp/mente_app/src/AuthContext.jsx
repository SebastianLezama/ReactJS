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
  const [user, setUser] = useState(null);
  const [userSession, setUserSession] = useState([]);

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

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUserSession(session);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log(event, session);
        console.log(session.user);
        setUserSession(session);
        console.log(userSession);
        const dbUser = await getUserByEmail("Users", session.user.email);
        if (event === "SIGNED_IN" && dbUser[0].admin === true) {
          setAdmin(dbUser ?? null);
        }
        if (event === "SIGNED_OUT") {
          setAdmin(null);
        }
        if (event === "SIGNED_IN") {
          setUser(session.user ?? null);
        }
        if (event === "SIGNED_OUT") {
          setUser(null);
        }
      }
    );
    return () => {
      console.log(userSession);

      authListener.subscription.unsubscribe();
    };
  }, []);

  return { admin, user, userSession, login, logout };
}
