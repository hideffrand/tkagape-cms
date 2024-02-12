import { createClient } from "@supabase/supabase-js";

const supabaseProjectUrl =
  process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL?.toString() || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.toString() || "";

export const supabase = createClient(
  supabaseProjectUrl,
  supabaseKey
);
