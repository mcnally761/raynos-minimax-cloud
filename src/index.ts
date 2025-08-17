import Fastify from "fastify";
import cors from "fastify-cors";
import { env } from "./env.js";
import { registerRoutes } from "./routes/index.js";

const app = Fastify({ logger: { level: env.LOG_LEVEL } });
// CORS for local dev
// @ts-ignore
app.register(cors, { origin: true });

app.get("/health", async () => ({ ok: true, ts: Date.now() }));

registerRoutes(app);

const start = async () => {
  try {
    await app.listen({ port: env.PORT, host: "0.0.0.0" });
    app.log.info(`omi-cloud listening on :${env.PORT}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
start();
