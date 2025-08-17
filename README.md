# omi-cloud (Bake-off Starter)

Fastify + TypeScript starter for Raynos Cloud MVP slice.

## Scripts
- `npm run dev` - hot-reload dev server
- `npm run build` - compile TypeScript
- `npm run check:ci` - lint, build, test

## Env
Copy `.env.example` to `.env` and fill keys.

## Routes (stubs)
- `POST /api/asr` -> { transcript }
- `POST /api/summarize` -> { bulletPoints[], layman }
- `POST /api/tts` -> audio/wav (placeholder)

Replace stubs with providers (Deepgram, Gemini Flash, Inworld TTS).
