import { createContext, useContext, useEffect, useState } from "react";
import { getUserByEmail, supabase } from "../components/SupabaseClient";
import { getLocalStorage } from "./LogContext";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};

// export async function login(email) {
//   try {
//     const { data, error } = await supabase.auth.signInWithOtp({
//       email: email,
//       options: {
//         emailRedirectTo: "http://127.0.0.1:5173/",
//       },
//     });
//     if (error) throw error;
//   } catch (error) {
//     alert(error.message);
//   }
// }

function useProvideAuth() {
  const [admin, setAdmin] = useState(false);
  const [user, setUser] = useState(null);
  const [userSession, setUserSession] = useState([]);

  const signUp = async (email, password) => {
    try {
      console.log("en el f signup");
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (error) throw error;
    } catch (error) {
      alert(error.message);
    }
  };

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

  const getLocalStorageSession = () => {
    const session = getLocalStorage("sb-waouznfjhihauptkfimb-auth-token");
    // console.log(session);
    return session;
  };

  const dbUser = async () => {
    setUser(await getUserByEmail("Users", userSession?.email));
  };

  const checkIsLoggedIn = () => {
    if (getLocalStorageSession()) {
      console.log("session checked");
      return true;
    } else {
      return false;
    }
  };
  const [isLoggedIn, setIsLoggedIn] = useState(checkIsLoggedIn());

  useEffect(() => {
    // supabase.auth.getSession().then(async ({ data: { session } }) => {
    //   console.log(session);
    //   setUserSession(session);
    //   const dbUser = await getUserByEmail("Users", session.user.email);
    //   if (session && dbUser[0].admin === true) {
    //     setAdmin(dbUser ?? null);
    //   }
    // });
    dbUser();

    console.log("logged in", isLoggedIn);
    if (!userSession) {
      setUserSession(getLocalStorageSession());
    }

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        // console.log(event, session);
        console.log(session?.user);
        setUserSession(session ?? null);

        if (event === "SIGNED_OUT") {
          setAdmin(false);
          setIsLoggedIn(false);
        }
        if (event === "SIGNED_IN") {
          setUser(session?.user ?? null);
          setIsLoggedIn(true);
        }
        if (event === "SIGNED_OUT") {
          setUser(null);
        }
      }
    );
    if (isLoggedIn && user?.admin === true) {
      console.log("admin is:", admin);
      setAdmin(true);
    }
    return () => {
      authListener.subscription.unsubscribe();
      // console.log("return authCtxt", isLoggedIn);
      if (isLoggedIn && user?.admin === true) {
        setAdmin(true);
      }

      // console.log("return authCtxt admin", admin);
    };
  }, [isLoggedIn, admin, userSession]);

  return { admin, user, userSession, login, logout, signUp };
}
