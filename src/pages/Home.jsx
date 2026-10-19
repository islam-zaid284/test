import { ArrowDown, ArrowRight, Aperture, BrainCircuit, Compass, Database, Image, Orbit, Telescope as TelescopeIcon } from "lucide-react";
import { Link } from "react-router-dom";
import LinkArrow from "../components/LinkArrow.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

function OrbitArtwork() {
  return (
    <div className="hero-art" aria-label="Abstract planetary orbit illustration">
      <div className="hero-art-halo" /><div className="hero-orbit hero-orbit-a"><span /></div><div className="hero-orbit hero-orbit-b"><span /></div><div className="hero-orbit hero-orbit-c" />
      <div className="planet-core"><div className="planet-light" /><div className="planet-land" /></div>
      <div className="hero-art-crosshair crosshair-a" /><div className="hero-art-crosshair crosshair-b" />
      <div className="art-label art-label-top"><span>FIELD NOTE / 01</span><i /></div>
      <div className="art-label art-label-bottom"><span>PROJECT CONCEPT</span><b>NO CONFIRMED FINDING</b></div>
      <div className="art-coordinates">HL / PLANET X<br />SEARCH CONCEPT</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="page home-page">
      <section className="home-hero page-container">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span className="eyebrow-mark" /> HEXA LOTUS / PROJECT OVERVIEW <span className="eyebrow-line" /></p>
          <h1>Looking outward.<br /><span>Thinking deeper.</span></h1>
          <p className="hero-description">HEXA LOTUS is a student project exploring the search for Planet X. We are building a clear workflow for astronomical images today, with telescope context and AI-assisted analysis as future steps.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#challenge">Understand the challenge <ArrowRight size={16} /></a>
            <Link className="button button-quiet" to="/team">Meet the team <ArrowRight className="arrow-diagonal" size={15} /></Link>
          </div>
          <div className="hero-footnote"><span className="status-dot muted" /> Project concept only — no Planet X observation or discovery is claimed.</div>
        </div>
        <OrbitArtwork />
        <a className="scroll-cue" href="#introduction"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
      </section>

      <section className="intro-section section-pad" id="introduction">
        <div className="page-container intro-grid">
          <Reveal><p className="eyebrow"><span className="eyebrow-mark" /> WHAT IS HEXA LOTUS?</p></Reveal>
          <Reveal delay={80}><h2>A place to collect the pieces<br /><span>of a much bigger question.</span></h2></Reveal>
          <Reveal delay={150}><div className="intro-aside"><p>The project brings together astronomical images, a telescope and electronics concept, and a proposed AI workflow. Its purpose is to make the path from image submission to future analysis easier to understand and build on.</p><LinkArrow to="/telescope">Explore the telescope concept</LinkArrow></div></Reveal>
        </div>
      </section>

      <section className="challenge-section section-pad" id="challenge">
        <div className="page-container challenge-grid">
          <Reveal><div className="challenge-heading"><p className="eyebrow"><span className="eyebrow-mark" /> THE PROJECT CHALLENGE</p><h2>How might we support a careful search for Planet X?</h2><p>We frame the challenge around building a useful process for astronomical imagery—not claiming that a discovery has already been made.</p></div></Reveal>
          <Reveal delay={100}><div className="challenge-panel"><div className="challenge-panel-top"><Orbit size={18} /><span>PROJECT QUESTION / 01</span></div><p>How can a team gather sky images, keep their context, and prepare to use AI to explore possible patterns that could guide further review?</p><div className="challenge-divider" /><div className="challenge-facts"><div><span>THE GOAL</span><strong>Explore a Planet X search concept</strong></div><div><span>THE APPROACH</span><strong>Images → records → future analysis</strong></div><div><span>THE LIMIT</span><strong>No verified observation or AI result yet</strong></div></div></div></Reveal>
        </div>
      </section>

      <section className="workflow-section section-pad">
        <div className="page-container">
          <Reveal><SectionHeading eyebrow="HOW THE PROJECT FITS TOGETHER" title="A practical path from image to insight.">Only the image upload and analysis-record foundation are currently implemented in the backend. Telescope integration and AI processing remain future work.</SectionHeading></Reveal>
          <div className="workflow-grid">
            <Reveal delay={30}><article className="workflow-card"><span className="card-index">01 / IMAGE</span><div className="workflow-icon"><Image size={21} /></div><h3>Collect an image</h3><p>The current backend accepts PNG and JPEG images and stores their references.</p><span className="workflow-tag tag-active"><i /> AVAILABLE</span></article></Reveal>
            <Reveal delay={110}><article className="workflow-card"><span className="card-index">02 / CONTEXT</span><div className="workflow-icon"><Database size={21} /></div><h3>Keep a record</h3><p>An analysis record can be created and linked to the submitted image.</p><span className="workflow-tag tag-active"><i /> AVAILABLE</span></article></Reveal>
            <Reveal delay={190}><article className="workflow-card"><span className="card-index">03 / ANALYSIS</span><div className="workflow-icon"><BrainCircuit size={21} /></div><h3>Review possible patterns</h3><p>AI analysis is a future step; there is no trained model or finding today.</p><span className="workflow-tag"><i /> FUTURE WORK</span></article></Reveal>
          </div>
        </div>
      </section>

      <section className="feature-section section-pad">
        <div className="page-container feature-grid">
          <Reveal><div className="feature-visual"><div className="feature-orbit feature-orbit-one" /><div className="feature-orbit feature-orbit-two" /><div className="feature-sun"><Aperture size={25} strokeWidth={1.1} /></div><div className="feature-coordinate">HEXA LOTUS<br /><strong>PROJECT CONCEPT</strong></div><div className="feature-caption">IMAGE-LED EXPLORATION</div></div></Reveal>
          <Reveal delay={100}><div className="feature-copy"><p className="eyebrow"><span className="eyebrow-mark" /> INSTRUMENT / HARDWARE</p><h2>See the tools behind the idea.</h2><p>The telescope page now includes interactive 3D concept models for the telescope and an Arduino-style board, with explanations of how each could relate to the project.</p><LinkArrow to="/telescope">Explore the 3D models</LinkArrow></div></Reveal>
        </div>
      </section>

      <section className="team-teaser section-pad">
        <div className="page-container team-teaser-row">
          <Reveal><div><p className="eyebrow"><span className="eyebrow-mark" /> THE PEOPLE BEHIND THE IDEA</p><h2>Different skills. One<br /><span>shared question.</span></h2></div></Reveal>
          <Reveal delay={100}><div className="team-teaser-aside"><p>Design, backend, frontend, cybersecurity, and AI roles come together to shape the project and its next steps.</p><LinkArrow to="/team">Meet the team and see our work</LinkArrow></div></Reveal>
          <div className="team-orbit-stamp" aria-hidden="true"><Compass size={27} strokeWidth={1} /><span>HL<br />TEAM</span></div>
        </div>
      </section>

      <section className="closing-cta page-container">
        <div className="closing-cta-inner"><div><p className="eyebrow"><span className="eyebrow-mark" /> A QUESTION WORTH EXPLORING</p><h2>Curiosity is a good<br />place to begin.</h2></div><Link className="button button-outline" to="/ai-model">See the AI roadmap <ArrowRight className="arrow-diagonal" size={15} /></Link><span className="closing-spark" aria-hidden="true">✳</span></div>
      </section>
    </div>
  );
}
