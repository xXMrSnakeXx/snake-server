import { createError } from "../../helpers/createError.js";
import { supabase } from "../../server.js";

export const addScore = async (req, res) => {
  const { user_name, score } = req.body;

  if (!user_name || score == null) {
    throw createError(
      400,
      (error.message = "missing required user_id and score")
    );
  }

  const { statusText, error } = await supabase
    .from("progress")
    .upsert({ user_name, score }, { onConflict: ["user_name"] });

  if (error) {
    throw createError(400, (error.message = "score not added"));
  }

  res.status(201).json(statusText);
};
