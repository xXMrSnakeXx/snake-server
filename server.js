import { createClient } from '@supabase/supabase-js';
import { app } from "./app.js";
import "dotenv/config";

const { DATA_BASE,API_KEY, PORT = 3000 } = process.env;
export const supabase = createClient(DATA_BASE, API_KEY);

const startServer =  () => {
  try {

    app.listen(PORT, () =>
      console.log(`Database connection successful ${PORT}`)
    );
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
};

startServer();