# HEXA LOTUS frontend

An independent React and Vite website for the HEXA LOTUS project. It is kept
separate from the existing backend project and runs without a backend service.

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Create a local `.env` file from
`.env.example` and set `VITE_API_BASE_URL` only when the backend is ready to be
connected. The current pages do not make API requests.

## Pages

- `/` — project overview and current workflow
- `/project` — Planet X project objective and verified backend foundation
- `/team` — project team and roles
- `/telescope` — telescope overview and future 3D model area

## Project information used

The existing project documentation describes PNG/JPEG image uploads and
analysis-record APIs. It also states that the backend does not currently run an
AI model. The available project files do not document a telescope model, live
telescope feed, observation dataset, Planet X finding, or telescope
specifications. The site labels these items as future or unavailable.

## Build

```sh
npm run build
npm run preview
```

The telescope visualization component uses a clearly labeled static concept
illustration. It is organized as a separate component so a real local GLB/GLTF
asset can be integrated later.
