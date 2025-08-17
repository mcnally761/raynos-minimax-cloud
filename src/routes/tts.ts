import { FastifyInstance } from "fastify";
import { z } from "zod";

const Body = z.object({ text: z.string().min(1) });

export function ttsRoute(app: FastifyInstance) {
  app.post("/api/tts", async (req, reply) => {
    const body = Body.parse(await req.body);
    // TODO: stream Inworld TTS; for now return placeholder bytes
    const wav = Buffer.from("RIFF....WAVEfmt ", "utf8"); // placeholder, not playable
    reply.header("Content-Type", "audio/wav");
    return reply.send(wav);
  });
}
