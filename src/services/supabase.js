import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rtbheewnbtyoupcuwnpa.supabase.co";
const supabaseKey = "sb_publishable_1KFQvzNSGdmwUiZE1fS0rg_HqWKp1JN";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);