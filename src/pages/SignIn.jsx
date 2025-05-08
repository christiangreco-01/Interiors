import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://ojgxoqseegvoipoygtsu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qZ3hvcXNlZWd2b2lwb3lndHN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4MTg0MzMsImV4cCI6MjA2MDM5NDQzM30.G7iL-aLPvqnS7WIqi3nGkLxZtQgQUUx4oWZzkYtiG4s"
);
