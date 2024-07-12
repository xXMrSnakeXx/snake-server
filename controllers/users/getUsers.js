import { createError } from "../../helpers/index.js";
import { supabase } from "../../server.js";

export const getUsers = async (req, res) => {
  const { data, error } = await supabase
    .from("progress")
    .select("*")
    .order("score", { ascending: false });

  if (error) {
    throw createError(400, (error.message = "missing not found"));
  }

  res.status(200).json(data);
};
