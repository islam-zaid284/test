import { ArrowRight, Check, CircleDashed, Database, Image, Layers3, Orbit, Telescope, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

const capabilities = [
  { title: "Image intake", text: "The API accepts PNG and JPEG uploads and stores the image reference.", icon: Image, state: "Documented" },
  { title: "Analysis records", text: "The API can create a pending analysis record linked to an uploaded image.", icon: Database, state: "Documented" },
  { title: "Model processing", text: "Automated image analysis is not implemented in the current backend.", icon: CircleDashed, state: "Not available" },
];

export default function Project() {
  return (
    <div className="page inner-page project-page">
      <section className="page-hero page-container">
        <div className="page-hero-copy">
          <p className="eyebrow"><span className="eyebrow-mark" /> PROJECT / 01</p>
          <h1>Curiosity about<br /><span>what lies beyond.</span></h1>
          <p className="hero-description">HEXA LOTUS explores a Planet X monitoring concept through a growing foundation for astronomical imagery and observation records.</p>
          <div className="notice-chip"><span className="notice-icon">i</span> Project objective — no confirmed discovery or observation is shown.</div>
        </div>
        <div className="project-hero-visual" aria-hidden="true">
          <div className="project-ring project-ring-one" /><div className="project-ring project-ring-two" /><div className="project-ring project-ring-three" />
          <div className="project-sphere"><span /></div>
          <div className="project-crosshair project-crosshair-a" /><div className="project-crosshair project-crosshair-b" />
          <span className="project-visual-label">ILLUSTRATIVE ORBITAL MOTIF</span>
        </div>
      </section>

      <section className="project-intent section-pad">
        <div className="page-container project-intent-grid">
          <Reveal><div className="intent-number">01<span>—</span>03</div></Reveal>
          <Reveal delay={70}><div><p className="eyebrow"><span className="eyebrow-mark" /> THE QUESTION</p><h2>How can we make a search easier to understand?</h2></div></Reveal>
          <Reveal delay={140}><p className="intent-copy">The project’s interface is being shaped around one broad ambition: give a team a thoughtful way to gather images, keep context, and prepare for future exploration. This site describes the project direction, not a scientific result.</p></Reveal>
        </div>
      </section>

      <section className="capabilities-section section-pad">
        <div className="page-container">
          <Reveal><SectionHeading eyebrow="CURRENT PROJECT FOUNDATION" title="What the backend supports today.">These capabilities come from the existing project documentation. Status labels distinguish working foundations from future ideas.</SectionHeading></Reveal>
          <div className="capability-list">
            {capabilities.map(({ title, text, icon: Icon, state }, index) => (
              <Reveal key={title} delay={index * 80}>
                <article className="capability-row">
                  <div className="capability-icon"><Icon size={19} strokeWidth={1.5} /></div>
                  <div className="capability-body"><span className="micro-label">0{index + 1}</span><h3>{title}</h3><p>{text}</p></div>
                  <span className={`capability-state ${state === "Documented" ? "state-ready" : ""}`}><i />{state}</span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="method-section section-pad">
        <div className="page-container method-grid">
          <Reveal><div className="method-copy"><p className="eyebrow"><span className="eyebrow-mark" /> A ROADMAP, NOT A RESULT</p><h2>Build the process<br /><span>before the claim.</span></h2><p>The next steps depend on the project’s chosen data sources, equipment, and analysis methods. Those details are not established in the available documentation, so this interface leaves space for them rather than filling in assumptions.</p><Link className="text-link" to="/telescope">See the future telescope space <ArrowRight size={15} /></Link></div></Reveal>
          <Reveal delay={100}><div className="method-visual">
            <div className="method-track"><span /><span /><span /></div>
            <div className="method-node node-one"><div><Layers3 size={17} /></div><span>IMAGE</span></div>
            <div className="method-node node-two"><div><Workflow size={17} /></div><span>RECORD</span></div>
            <div className="method-node node-three"><div><Orbit size={17} /></div><span>ANALYSIS</span></div>
            <div className="method-telescope"><Telescope size={21} /><span>TO BE DEFINED</span></div>
            <div className="method-label label-one">CURRENT FOUNDATION</div><div className="method-label label-two">FUTURE WORK</div>
          </div></Reveal>
        </div>
      </section>

      <section className="project-note page-container">
        <div className="project-note-icon"><Check size={15} /></div><p><strong>Evidence first.</strong> This website includes no live observations, orbital predictions, or telescope specifications because none were verified in the project documentation.</p>
      </section>
    </div>
  );
}
