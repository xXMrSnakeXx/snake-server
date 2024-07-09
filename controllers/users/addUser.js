import { createError } from "../../helpers/index.js";
import { supabase } from "../../server.js";

export const addUser = async (req, res) => {
  const { name } = req.body;

  const { error, status } = await supabase.from("users").insert([{ name }]);

  if (error) {
    throw createError(400, (error.message = "missing required unique name"));
  }
  if(status === 201){

    res.status(201).json({name});
  }
};
