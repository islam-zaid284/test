# HEXA LOTUS frontend

An independent React and Vite website for the HEXA LOTUS project. It is kept separate from the backend project and can run without a backend service.

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Create a local `.env` file from `.env.example` and set `VITE_API_BASE_URL` only when the backend is ready to be connected.

## Pages

- `/` — project introduction, Planet X challenge, and current workflow
- `/telescope` — interactive 3D telescope and Arduino-style concept models
- `/ai-model` — future AI roadmap and NASA/JPL SPHEREx sky-map reference
- `/team` — team roles and completed project work

The telescope and Arduino-style models are illustrative website concepts, not verified hardware specifications. The SPHEREx image is a NASA/JPL reference, not a HEXA LOTUS observation or AI result. Existing project documentation describes PNG/JPEG uploads and analysis records; it states that the backend does not currently run an AI model.

## Build

```sh
npm run build
npm run preview
```
