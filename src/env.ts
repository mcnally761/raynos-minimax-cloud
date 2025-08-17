import { config as dotenv } from "dotenv";
import { z } from "zod";
dotenv();
const Env = z.object({
  DEEPGRAM_API_KEY: z.string().optional(),
  GEMINI_API_KEY: z.string().optional(),
  INWORLD_API_KEY: z.string().optional(),
  PORT: z.coerce.number().default(8080),
  LOG_LEVEL: z.enum(["fatal","error","warn","info","debug","trace"]).default("info")
});
export const env = Env.parse(process.env);
