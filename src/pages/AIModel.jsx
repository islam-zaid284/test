import { ArrowRight, BrainCircuit, CheckCircle2, Database, Image, ScanSearch, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

const stages = [
  { number: "01", title: "Gather suitable images", text: "Define trusted sources, observation details, and image quality requirements.", icon: Image, status: "TO DEFINE" },
  { number: "02", title: "Prepare and label data", text: "Build a reviewed dataset that can support a transparent evaluation.", icon: Database, status: "TO BUILD" },
  { number: "03", title: "Train and evaluate", text: "Choose a method, measure its limits, and compare results with human review.", icon: ScanSearch, status: "FUTURE WORK" },
];

export default function AIModel() {
  return (
    <div className="page inner-page ai-page">
      <section className="ai-cosmos-hero">
        <div className="ai-cosmos-image" role="img" aria-label="Infrared all-sky map created by NASA's SPHEREx space telescope" />
        <div className="ai-cosmos-shade" />
        <div className="page-container ai-cosmos-content">
          <p className="eyebrow"><span className="eyebrow-mark" /> AI / IMAGE EXPLORATION</p>
          <h1>Let the data<br /><span>guide the search.</span></h1>
          <p className="hero-description">A future AI workflow could help organize astronomical images and flag patterns for careful human review as HEXA LOTUS explores the Planet X project goal.</p>
          <div className="ai-status-chip"><span className="status-dot muted" /> AI image analysis is not implemented yet</div>
          <a className="spherex-credit" href="https://www.jpl.nasa.gov/images/pia26600-spherexs-first-all-sky-map/" target="_blank" rel="noreferrer">Background reference: NASA / JPL-Caltech · SPHEREx first all-sky map <ArrowRight size={14} /></a>
        </div>
        <span className="cosmos-index">SPHEREx / INFRARED SKY REFERENCE</span>
      </section>

      <section className="ai-intro section-pad">
        <div className="page-container ai-intro-grid">
          <Reveal><div><p className="eyebrow"><span className="eyebrow-mark" /> THE PROJECT CHALLENGE</p><h2>Could thoughtful image analysis support a more organized search?</h2></div></Reveal>
          <Reveal delay={90}><div className="ai-intro-copy"><p>HEXA LOTUS aims to explore a system that can receive astronomical images, preserve their context, and prepare for future computer-assisted analysis related to a possible Planet X search.</p><p>The AI model is a proposed project direction. There is no trained model, project image dataset, prediction, or accuracy result available in the current implementation.</p><Link className="text-link" to="/">Read the full project introduction <ArrowRight size={15} /></Link></div></Reveal>
        </div>
      </section>

      <section className="ai-roadmap section-pad">
        <div className="page-container">
          <Reveal><SectionHeading eyebrow="A RESPONSIBLE MODEL ROADMAP" title="Prepare the evidence before the model.">The stages below describe future work, not completed AI functionality. Model choices and evaluation criteria depend on data and scientific guidance that the team still needs to define.</SectionHeading></Reveal>
          <div className="ai-stage-grid">
            {stages.map(({ number, title, text, icon: Icon, status }, index) => (
              <Reveal key={number} delay={index * 80}><article className="ai-stage-card"><span className="ai-stage-number">{number} / ROADMAP</span><div className="ai-stage-icon"><Icon size={19} /></div><h3>{title}</h3><p>{text}</p><span className="workflow-tag"><i /> {status}</span></article></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-readiness-section section-pad">
        <div className="page-container ai-readiness-grid">
          <Reveal><div className="ai-readiness-copy"><p className="eyebrow"><span className="eyebrow-mark" /> CURRENT PROJECT STATUS</p><h2>Useful groundwork.<br /><span>No model claims.</span></h2><p>The existing backend supports PNG/JPEG image uploads and analysis records. It does not currently run AI image analysis. The SPHEREx image shown above is an external NASA/JPL reference image; it is not a HEXA LOTUS observation or model output.</p><Link className="text-link" to="/telescope">See the telescope and hardware concept <ArrowRight size={15} /></Link></div></Reveal>
          <Reveal delay={100}><div className="ai-status-list">
            <div><CheckCircle2 size={17} /><span>Image uploads and analysis-record foundation</span><b>AVAILABLE</b></div>
            <div><ShieldCheck size={17} /><span>Human review and validation requirements</span><b>PLANNED</b></div>
            <div><BrainCircuit size={17} /><span>Trained AI model and measured performance</span><b>NOT IMPLEMENTED</b></div>
          </div></Reveal>
        </div>
      </section>

      <section className="ai-final-note page-container"><Sparkles size={17} /><p>Any future AI output should be treated as a candidate for review—not proof of a discovery.</p><Link className="text-link" to="/team">What the team has done <ArrowRight size={15} /></Link></section>
    </div>
  );
}
