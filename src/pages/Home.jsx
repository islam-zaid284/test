import { ArrowDown, ArrowRight, Aperture, Compass, Orbit, ScanEye, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import LinkArrow from "../components/LinkArrow.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

function OrbitArtwork() {
  return (
    <div className="hero-art" aria-label="Abstract planetary orbit illustration">
      <div className="hero-art-halo" />
      <div className="hero-orbit hero-orbit-a"><span /></div>
      <div className="hero-orbit hero-orbit-b"><span /></div>
      <div className="hero-orbit hero-orbit-c" />
      <div className="planet-core"><div className="planet-light" /><div className="planet-land" /></div>
      <div className="hero-art-crosshair crosshair-a" /><div className="hero-art-crosshair crosshair-b" />
      <div className="art-label art-label-top"><span>FIELD NOTE / 01</span><i /></div>
      <div className="art-label art-label-bottom"><span>VISUAL CONCEPT</span><b>NOT A LIVE OBSERVATION</b></div>
      <div className="art-coordinates">HL / ORBIT STUDY<br />DESIGN CONCEPT</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="page home-page">
      <section className="home-hero page-container">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span className="eyebrow-mark" /> AN EXPLORATION IN PROGRESS <span className="eyebrow-line" /></p>
          <h1>Looking outward.<br /><span>Thinking deeper.</span></h1>
          <p className="hero-description">HEXA LOTUS is a student project exploring Planet X through astronomical imagery, thoughtful analysis workflows, and a clearer view of what we know—and what remains open.</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/project">Explore the project <ArrowRight size={16} /></Link>
            <Link className="button button-quiet" to="/team">Meet the team <ArrowUpRightIcon /></Link>
          </div>
          <div className="hero-footnote"><span className="status-dot muted" /> No live telescope feed or confirmed observation is presented here.</div>
        </div>
        <OrbitArtwork />
        <a className="scroll-cue" href="#introduction"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
      </section>

      <section className="intro-section section-pad" id="introduction">
        <div className="page-container intro-grid">
          <Reveal><p className="eyebrow"><span className="eyebrow-mark" /> A PROJECT WITH ROOM TO GROW</p></Reveal>
          <Reveal delay={80}><h2>Start with an image.<br /><span>Build toward a question.</span></h2></Reveal>
          <Reveal delay={150}><div className="intro-aside"><p>Our current foundation makes it possible to upload astronomical images and keep records for future analysis. The interface gives that work a place to grow—without implying results the project has not produced.</p><LinkArrow to="/project">See what exists today</LinkArrow></div></Reveal>
        </div>
      </section>

      <section className="workflow-section section-pad">
        <div className="page-container">
          <Reveal><SectionHeading eyebrow="THE PROJECT, AT A GLANCE" title="A careful path from image to insight.">The visual workflow is a roadmap. Only the image upload and analysis-record foundation are currently represented by the backend.</SectionHeading></Reveal>
          <div className="workflow-grid">
            <Reveal delay={30}><article className="workflow-card"><span className="card-index">01 / INTAKE</span><div className="workflow-icon"><ScanEye size={21} /></div><h3>Bring an image in</h3><p>Upload an astronomical image to the project’s current storage workflow.</p><span className="workflow-tag tag-active"><i /> AVAILABLE IN BACKEND</span></article></Reveal>
            <Reveal delay={110}><article className="workflow-card"><span className="card-index">02 / ORGANIZE</span><div className="workflow-icon"><Compass size={21} /></div><h3>Keep the context</h3><p>Give each image and its related project records a clear place in the workflow.</p><span className="workflow-tag tag-active"><i /> RECORDS SUPPORTED</span></article></Reveal>
            <Reveal delay={190}><article className="workflow-card"><span className="card-index">03 / EXPLORE</span><div className="workflow-icon"><Sparkles size={21} /></div><h3>Analyze with care</h3><p>Analysis is a future step; no model currently processes images or returns findings.</p><span className="workflow-tag"><i /> FUTURE CAPABILITY</span></article></Reveal>
          </div>
        </div>
      </section>

      <section className="feature-section section-pad">
        <div className="page-container feature-grid">
          <Reveal><div className="feature-visual">
            <div className="feature-orbit feature-orbit-one" /><div className="feature-orbit feature-orbit-two" />
            <div className="feature-sun"><Aperture size={25} strokeWidth={1.1} /></div>
            <div className="feature-coordinate">HL / OBSERVATION ARCHIVE<br /><strong>CONCEPT INTERFACE</strong></div>
            <div className="feature-caption">A PLACE FOR FUTURE OBSERVATIONS</div>
          </div></Reveal>
          <Reveal delay={100}><div className="feature-copy">
            <p className="eyebrow"><span className="eyebrow-mark" /> A VIEW THROUGH THE PROJECT</p>
            <h2>Make space for the instrument—and the evidence.</h2>
            <p>The telescope page is designed as a home for future equipment details, observation imagery, and a real 3D model. Right now, it is an explicitly labeled concept placeholder.</p>
            <LinkArrow to="/telescope">Explore the telescope space</LinkArrow>
          </div></Reveal>
        </div>
      </section>

      <section className="team-teaser section-pad">
        <div className="page-container team-teaser-row">
          <Reveal><div><p className="eyebrow"><span className="eyebrow-mark" /> FOUR PERSPECTIVES, ONE PROJECT</p><h2>Designed, built, and shaped<br /><span>by a curious team.</span></h2></div></Reveal>
          <Reveal delay={100}><div className="team-teaser-aside"><p>Design, frontend, backend, cybersecurity, and AI each have a place in the project’s evolving picture.</p><LinkArrow to="/team">Meet the team</LinkArrow></div></Reveal>
          <div className="team-orbit-stamp" aria-hidden="true"><Orbit size={27} strokeWidth={1} /><span>HL<br />TEAM</span></div>
        </div>
      </section>

      <section className="closing-cta page-container">
        <div className="closing-cta-inner"><div><p className="eyebrow"><span className="eyebrow-mark" /> THE NEXT CHAPTER</p><h2>Curiosity is a good<br />place to begin.</h2></div><Link className="button button-outline" to="/project">Follow the project <ArrowUpRightIcon /></Link><span className="closing-spark" aria-hidden="true">✳</span></div>
      </section>
    </div>
  );
}

function ArrowUpRightIcon() {
  return <ArrowRight className="arrow-diagonal" size={15} />;
}
