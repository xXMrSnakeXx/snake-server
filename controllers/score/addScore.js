import { supabase } from "../../server.js";

export const addScore = async (req, res) => {
  const { user_id, score } = req.body;
  if (!user_id || score == null) {
    throw createError(
      400,
      (error.message = "missing required user_id and score")
    );
  }

  const { statusText, error } = await supabase
    .from("progress")
    .upsert({ user_id, score }, { onConflict: ["user_id"] });

  if (error) {
    throw createError(400, (error.message = "score not added"));
  }

  res.status(201).json(statusText);
};
