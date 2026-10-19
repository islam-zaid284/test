import { ArrowRight, CircuitBoard, Telescope as TelescopeIcon, MousePointer2, RotateCcw, Ruler, Radio, Database, Image } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import TelescopeModel from "../components/telescope/TelescopeModel.jsx";

const models = [
  { id: "telescope", label: "WTPM telescope", icon: TelescopeIcon },
  { id: "arduino", label: "Arduino board", icon: CircuitBoard },
];

export default function Telescope() {
  const [modelType, setModelType] = useState("telescope");
  const activeModel = modelType === "arduino";

  return (
    <div className="page inner-page telescope-page">
      <section className="telescope-hero page-container">
        <div className="telescope-hero-copy">
          <p className="eyebrow"><span className="eyebrow-mark" /> WTPM / TELESCOPE & HARDWARE</p>
          <h1>From the sky<br /><span>to the signal.</span></h1>
          <p className="hero-description">Explore illustrative 3D models of the telescope concept and an Arduino-style board, then see how the hardware could fit into the HEXA LOTUS observation workflow.</p>
          <div className="telescope-status"><span className="status-dot muted" /> Concept models — exact hardware specifications not supplied</div>
        </div>
        <div className="telescope-hero-stamp" aria-hidden="true"><div className="stamp-circle"><TelescopeIcon size={22} strokeWidth={1.2} /><span>WTPM / OPTICS</span></div></div>
      </section>

      <section className="model-section page-container">
        <Reveal>
          <section className="model-stage" aria-label="Interactive 3D model viewer">
            <div className="model-stage-grid" aria-hidden="true" />
            <div className="model-stage-topline">
              <span><TelescopeIcon size={14} /> INTERACTIVE 3D VIEWER</span>
              <span className="model-pill"><span className="status-dot muted" /> ILLUSTRATIVE MODEL</span>
            </div>
            <div className="model-tabs" role="tablist" aria-label="Choose a 3D model">
              {models.map(({ id, label, icon: Icon }) => (
                <button key={id} type="button" role="tab" aria-selected={modelType === id} className={modelType === id ? "model-tab active" : "model-tab"} onClick={() => setModelType(id)}>
                  <Icon size={15} /> {label}
                </button>
              ))}
            </div>
            <TelescopeModel modelType={modelType} key={modelType} />
            <div className="viewer-controls"><MousePointer2 size={14} /><span>Drag to rotate</span><span className="viewer-divider">·</span><span>Scroll to zoom</span><RotateCcw size={13} /></div>
            <div className="model-stage-bottom">
              <div>
                <span className="micro-label">{activeModel ? "ELECTRONICS CONCEPT" : "OPTICS CONCEPT"}</span>
                <h3>{activeModel ? "Arduino-style sensor controller" : "WTPM telescope concept"}</h3>
              </div>
              <p><span className="model-bottom-icon">{activeModel ? <CircuitBoard size={15} /> : <TelescopeIcon size={15} />}</span>{activeModel ? "Illustrative board layout" : "Illustrative optical instrument"}<br /><span>Not an exact manufacturer model or measured design.</span></p>
            </div>
          </section>
        </Reveal>
      </section>

      <section className="telescope-info section-pad">
        <div className="page-container">
          <Reveal><SectionHeading eyebrow="HOW THE HARDWARE FITS" title="Observation begins with context.">These models help explain the intended system at a glance. The project has not provided confirmed telescope specifications, wiring diagrams, or a live data connection.</SectionHeading></Reveal>
          <div className="telescope-info-grid">
            <Reveal delay={30}><article className="info-card"><div className="info-card-icon"><TelescopeIcon size={18} /></div><span className="micro-label">TELESCOPE</span><h3>Collecting images</h3><p>The project goal is to explore astronomical imagery in the context of a possible Planet X search. A specific instrument model and observation method are still to be confirmed.</p><span className="info-state muted-state"><i /> CONCEPT ONLY</span></article></Reveal>
            <Reveal delay={100}><article className="info-card"><div className="info-card-icon"><CircuitBoard size={18} /></div><span className="micro-label">ARDUINO</span><h3>Electronics concept</h3><p>The Arduino-style 3D board is a visual explanation of a possible electronics component. Exact board, sensors, firmware, and wiring have not been supplied.</p><span className="info-state muted-state"><i /> CONCEPT ONLY</span></article></Reveal>
            <Reveal delay={170}><article className="info-card"><div className="info-card-icon"><Radio size={18} /></div><span className="micro-label">DATA CONNECTION</span><h3>Ready for future integration</h3><p>No live telescope feed is connected. The current backend supports image uploads and stores analysis records for future workflow development.</p><span className="info-state"><i /> IMAGE RECORDS AVAILABLE</span></article></Reveal>
          </div>
        </div>
      </section>

      <section className="observation-section section-pad">
        <div className="page-container observation-grid">
          <Reveal><div><p className="eyebrow"><span className="eyebrow-mark" /> OBSERVATION WORKFLOW</p><h2>A path from<br /><span>image to insight.</span></h2><p className="observation-copy">HEXA LOTUS starts by providing a place to submit and organize sky images. Future analysis will need validated data, a defined AI method, and review before any candidate could be discussed.</p><Link className="text-link" to="/ai-model">Explore the AI model plan <ArrowRight size={15} /></Link></div></Reveal>
          <Reveal delay={100}><div className="observation-steps">
            <div className="observation-step"><span className="step-number">01</span><div className="step-icon"><Image size={16} /></div><div><h3>Image intake</h3><p>PNG / JPEG upload supported by current API</p></div><span className="step-check">AVAILABLE</span></div>
            <div className="observation-connector" />
            <div className="observation-step"><span className="step-number">02</span><div className="step-icon"><Database size={16} /></div><div><h3>Keep an analysis record</h3><p>Records can be stored for each submitted image</p></div><span className="step-check">AVAILABLE</span></div>
            <div className="observation-connector future" />
            <div className="observation-step pending"><span className="step-number">03</span><div className="step-icon"><Ruler size={16} /></div><div><h3>Connect and evaluate</h3><p>Instrument integration and model evaluation remain future work</p></div><span className="step-check">PLANNED</span></div>
          </div></Reveal>
        </div>
      </section>

      <section className="asset-note page-container"><span className="asset-note-mark">✳</span><p><strong>About these 3D models.</strong> They are procedural, interactive illustrations made for this website. They communicate the project idea and do not represent confirmed telescope or Arduino hardware specifications.</p><Link className="text-link" to="/team">Meet the team <ArrowRight size={15} /></Link></section>
    </div>
  );
}
