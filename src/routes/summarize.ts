import { FastifyInstance } from "fastify";
import { z } from "zod";

const Body = z.object({ transcript: z.string().min(1) });

export function summarizeRoute(app: FastifyInstance) {
  app.post("/api/summarize", async (req, reply) => {
    const body = Body.parse(await req.body);
    // TODO: call Gemini Flash; stub summary
    const bulletPoints = [
      "5mg once daily",
      "Next review in 2 weeks",
      "Watch for dizziness"
    ];
    const layman = "Take 5mg once a day. Book a check-up in two weeks. If you feel dizzy, call your GP.";
    return reply.send({ bulletPoints, layman, transcript: body.transcript });
  });
}
