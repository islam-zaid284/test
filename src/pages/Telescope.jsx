import { ArrowRight, CircleDot, Database, Image, Radio, Ruler, Telescope as TelescopeIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import TelescopeModel from "../components/telescope/TelescopeModel.jsx";

export default function Telescope() {
  return (
    <div className="page inner-page telescope-page">
      <section className="telescope-hero page-container">
        <div className="telescope-hero-copy"><p className="eyebrow"><span className="eyebrow-mark" /> INSTRUMENT / FUTURE SPACE</p><h1>A window for<br /><span>what comes next.</span></h1><p className="hero-description">A dedicated space for the telescope story as it takes shape: its role, the observation workflow, and eventually the model and data behind it.</p><div className="telescope-status"><span className="status-dot muted" /> No connected instrument or live observation feed</div></div>
        <div className="telescope-hero-stamp" aria-hidden="true"><div className="stamp-circle"><TelescopeIcon size={22} strokeWidth={1.2} /><span>HL / OBSERVATORY</span></div></div>
      </section>

      <section className="model-section page-container">
        <Reveal><TelescopeModel /></Reveal>
      </section>

      <section className="telescope-info section-pad">
        <div className="page-container">
          <Reveal><SectionHeading eyebrow="A PLACE FOR THE INSTRUMENT" title="Clear about what is—and isn’t—here.">The telescope is a project direction in this interface. Verified specifications and operating capabilities have not been provided.</SectionHeading></Reveal>
          <div className="telescope-info-grid">
            <Reveal delay={30}><article className="info-card"><div className="info-card-icon"><TelescopeIcon size={18} /></div><span className="micro-label">PROJECT ROLE</span><h3>Observation context</h3><p>This page is prepared to explain how telescope-related information may support the project once the instrument and workflow are defined.</p><span className="info-state"><i /> INTENDED ROLE</span></article></Reveal>
            <Reveal delay={100}><article className="info-card"><div className="info-card-icon"><Ruler size={18} /></div><span className="micro-label">SPECIFICATIONS</span><h3>Details to be supplied</h3><p>No telescope model, aperture, mount, location, or tracking capability is currently verified in the available project information.</p><span className="info-state muted-state"><i /> NOT PROVIDED</span></article></Reveal>
            <Reveal delay={170}><article className="info-card"><div className="info-card-icon"><Radio size={18} /></div><span className="micro-label">OBSERVATION DATA</span><h3>No live feed connected</h3><p>There are no live telescope feeds, observation images, or results displayed in this independent frontend.</p><span className="info-state muted-state"><i /> NOT CONNECTED</span></article></Reveal>
          </div>
        </div>
      </section>

      <section className="observation-section section-pad">
        <div className="page-container observation-grid">
          <Reveal><div><p className="eyebrow"><span className="eyebrow-mark" /> OBSERVATION WORKFLOW</p><h2>A structure for<br /><span>future evidence.</span></h2><p className="observation-copy">The project backend already provides a foundation for image uploads and analysis records. The observation process, data sources, and scientific methods still need to be defined by the project.</p><Link className="text-link" to="/project">Read the project scope <ArrowRight size={15} /></Link></div></Reveal>
          <Reveal delay={100}><div className="observation-steps">
            <div className="observation-step"><span className="step-number">01</span><div className="step-icon"><Image size={16} /></div><div><h3>Image intake</h3><p>PNG / JPEG upload supported by current API</p></div><span className="step-check">AVAILABLE</span></div>
            <div className="observation-connector" />
            <div className="observation-step"><span className="step-number">02</span><div className="step-icon"><Database size={16} /></div><div><h3>Project record</h3><p>Image and analysis records can be stored</p></div><span className="step-check">AVAILABLE</span></div>
            <div className="observation-connector future" />
            <div className="observation-step pending"><span className="step-number">03</span><div className="step-icon"><CircleDot size={16} /></div><div><h3>Analysis and findings</h3><p>Methods and model processing are not implemented</p></div><span className="step-check">FUTURE</span></div>
          </div></Reveal>
        </div>
      </section>

      <section className="asset-note page-container"><span className="asset-note-mark">✳</span><p><strong>Model asset needed.</strong> The illustration above is a static concept graphic. A local GLB/GLTF file can later replace it through the reusable visualization component.</p><Link className="text-link" to="/team">Meet the team <ArrowRight size={15} /></Link></section>
    </div>
  );
}
