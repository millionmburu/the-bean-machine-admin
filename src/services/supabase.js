import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rtbheewnbtyoupcuwnpa.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0YmhlZXduYnR5b3VwY3V3bnBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA3NTE2MDYsImV4cCI6MjA5NjMyNzYwNn0.wzxlJm37kCTc9FvMcRwIN7NnZPqtU72TYxFL6NargUA";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);