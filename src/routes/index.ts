import { FastifyInstance } from "fastify";
import { asrRoute } from "./asr.js";
import { summarizeRoute } from "./summarize.js";
import { ttsRoute } from "./tts.js";

export function registerRoutes(app: FastifyInstance) {
  asrRoute(app);
  summarizeRoute(app);
  ttsRoute(app);
}
