import React, { useState } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "../components/SupabaseClient";

const LogIn = () => {
  const { logIn, setLogIn } = useState("");

  async function signInWithEmail() {
    try {
      const { data, error } = await supabase.auth.signInWithOtp({
        email: logIn,
        options: {
          emailRedirectTo: "http://127.0.0.1:5173/",
        },
      });
      console.log(logIn);
      console.log(data);
      if (error) throw error;
    } catch (error) {
      alert(error.message);
    }
  }
  console.log(logIn);

  return (
    <div className="main">
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={[]}
        view="magic_link"
        onSubmit={() => setLogIn()}
      />
    </div>
  );
};

export default LogIn;
