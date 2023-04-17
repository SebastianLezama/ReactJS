import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://waouznfjhihauptkfimb.supabase.co";
const SUPABASE_API_KEY = import.meta.env.VITE_SUPABASE_API_KEY;

export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);

export async function signInWithEmail(email) {
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
}

export async function getUserByEmail(tableName, email) {
  try {
    const { data, error } = await supabase
      .from(tableName)
      .select("*")
      .eq("email", email);
    if (error) throw error;
    if (data != null) return data;
  } catch (error) {
    alert(error.message);
  }
}
