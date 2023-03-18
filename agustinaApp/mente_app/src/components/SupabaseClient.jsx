import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://waouznfjhihauptkfimb.supabase.co";
const SUPABASE_API_KEY = import.meta.env.VITE_SUPABASE_API_KEY;

export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);
