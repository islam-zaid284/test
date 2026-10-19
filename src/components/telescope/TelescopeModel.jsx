import { ArrowDownRight, Box, Orbit } from "lucide-react";

/**
 * Integration seam for a future local GLB/GLTF telescope asset.
 * The current artwork is a static illustration and deliberately has no fake controls.
 */
export default function TelescopeModel() {
  return (
    <section className="model-stage" aria-labelledby="model-stage-title">
      <div className="model-stage-grid" aria-hidden="true" />
      <div className="model-stage-orbit orbit-one" aria-hidden="true" />
      <div className="model-stage-orbit orbit-two" aria-hidden="true" />
      <div className="model-stage-topline">
        <span><Orbit size={14} /> VISUALIZATION BAY</span>
        <span className="model-pill"><span className="status-dot muted" /> MODEL NOT CONNECTED</span>
      </div>
      <div className="telescope-art-wrap" role="img" aria-label="Illustrative line drawing of an astronomical telescope. This is a static placeholder, not a real telescope model.">
        <svg className="telescope-art" viewBox="0 0 620 410" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="tube" x1="189" y1="130" x2="404" y2="242" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ADC7D1" /><stop offset=".3" stopColor="#506B7A" /><stop offset=".55" stopColor="#203747" /><stop offset="1" stopColor="#87B7C4" />
            </linearGradient>
            <linearGradient id="gold" x1="313" y1="213" x2="349" y2="282" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E9C795" /><stop offset="1" stopColor="#7D6651" />
            </linearGradient>
            <radialGradient id="lens" cx="0" cy="0" r="1" gradientTransform="matrix(0 85 -54 0 420 193)" gradientUnits="userSpaceOnUse">
              <stop stopColor="#A4F1ED" stopOpacity=".58" /><stop offset=".72" stopColor="#4A91A0" stopOpacity=".24" /><stop offset="1" stopColor="#183340" />
            </radialGradient>
            <filter id="glow" x="91" y="50" width="430" height="340" filterUnits="userSpaceOnUse"><feGaussianBlur stdDeviation="20" /></filter>
          </defs>
          <ellipse cx="317" cy="213" rx="140" ry="55" fill="#83D3D3" fillOpacity=".15" filter="url(#glow)" />
          <path d="M222 221 326 275l98-56-104-58-98 60Z" fill="#101922" stroke="#69808A" strokeWidth="2" />
          <path d="m323 249-4 75m-90-59-41 73m185-75 43 74" stroke="#76909A" strokeWidth="6" strokeLinecap="round" />
          <path d="m279 267-4 57m-81 14h177m-85 0 34 0" stroke="#334955" strokeWidth="8" strokeLinecap="round" />
          <path d="m174 127 189 103 64-37-190-105-63 39Z" fill="url(#tube)" stroke="#BED1D6" strokeOpacity=".55" strokeWidth="2" />
          <path d="m174 127 2 43 188 105-1-45" fill="#263D4A" stroke="#85A3AD" strokeWidth="2" />
          <path d="m363 230 64-37 3 42-65 40-2-45Z" fill="#1B2D38" stroke="#9DB8BF" strokeWidth="2" />
          <path d="m426 193 50 28-1 38-45 16" fill="url(#lens)" stroke="#B4E4E3" strokeOpacity=".78" strokeWidth="2" />
          <path d="m192 123 62-37 48 26-65 38-45-27Z" fill="#182A35" stroke="#AAC0C5" strokeWidth="2" />
          <path d="m254 86 15 9v42l-15-8V86Zm47 26 14 9v43l-15-8v-44Z" fill="url(#gold)" stroke="#E3C296" strokeOpacity=".6" strokeWidth="1.5" />
          <path d="m304 170 20-12m23 59 21-13m-164-77 9 5m116 94 8 5" stroke="#D9E9E7" strokeOpacity=".55" strokeWidth="3" strokeLinecap="round" />
          <path d="m222 262 97 56 94-55" stroke="#B4CDD2" strokeOpacity=".25" strokeDasharray="3 8" />
          <circle cx="118" cy="86" r="2" fill="#E4D5B4"/><circle cx="488" cy="116" r="2" fill="#9FE0E1"/><circle cx="462" cy="314" r="1.5" fill="#E4D5B4"/>
          <path d="M102 178h24m-12-12v24m378 64h18m-9-9v18" stroke="#B1D3D5" strokeOpacity=".5" />
        </svg>
      </div>
      <div className="model-stage-bottom">
        <div>
          <span className="micro-label">PLACEHOLDER RENDER</span>
          <h3 id="model-stage-title">The 3D bay is ready for its first instrument.</h3>
        </div>
        <p><Box size={15} /> Static concept illustration<br /><span>No model asset or telescope controls are connected.</span></p>
      </div>
      <div className="model-stage-corner" aria-hidden="true"><ArrowDownRight size={17} /></div>
    </section>
  );
}
