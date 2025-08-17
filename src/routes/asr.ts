import { FastifyInstance } from "fastify";
import { z } from "zod";

export function asrRoute(app: FastifyInstance) {
  app.post("/api/asr", async (req, reply) => {
    // MVP stub: accept any body and return a fake transcript if keys missing
    const buf = await req.file?.().catch(() => null);
    app.log.info({ hasFile: !!buf }, "ASR received");
    // TODO: wire Deepgram streaming; for now, stub:
    return reply.send({ transcript: "Doctor said: continue 5mg once daily, review in 2 weeks." });
  });
}
