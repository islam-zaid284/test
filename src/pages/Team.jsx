import { ArrowUpRight, BrainCircuit, Code2, Fingerprint, Palette, Sparkles } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

const members = [
  { name: "Yara", role: "UI/UX Designer", description: "Shapes the user experience, interface design, and visual consistency across the project.", icon: Palette, code: "DESIGN / 01", accent: "lilac", initials: "YA" },
  { name: "Islam Zaid", role: "Backend Developer", description: "Builds the backend, APIs, and server-side integration that support the project workflow.", icon: Code2, code: "SYSTEMS / 02", accent: "blue", initials: "IZ" },
  { name: "Musab", role: "Frontend Developer", description: "Creates the website interface, frontend implementation, and interactive components.", icon: Sparkles, code: "INTERFACE / 03", accent: "mint", initials: "MU" },
  { name: "Leen", role: "Cybersecurity and AI", description: "Contributes to cybersecurity-related aspects and AI-related project components.", icon: BrainCircuit, code: "RESEARCH / 04", accent: "amber", initials: "LE" },
];

export default function Team() {
  return (
    <div className="page inner-page team-page">
      <section className="team-hero page-container">
        <div className="team-hero-main"><p className="eyebrow"><span className="eyebrow-mark" /> THE PEOPLE BEHIND THE PROJECT</p><h1>Different lenses.<br /><span>One horizon.</span></h1><p className="hero-description">A small team brings design, code, and research interests together to shape the next chapter of HEXA LOTUS.</p></div>
        <div className="team-hero-aside"><div className="team-constellation" aria-hidden="true"><span className="constellation-line line-a" /><span className="constellation-line line-b" /><span className="constellation-line line-c" /><i className="constellation-star s-a" /><i className="constellation-star s-b" /><i className="constellation-star s-c" /><i className="constellation-star s-d" /><span className="constellation-center">HL</span></div><span className="micro-label">COLLABORATION IS THE ORBIT</span></div>
      </section>

      <section className="team-members section-pad">
        <div className="page-container">
          <Reveal><SectionHeading eyebrow="THE CREW" title="Four roles, moving together.">Each person contributes a different part of the project. The descriptions below reflect the roles provided by the team.</SectionHeading></Reveal>
          <div className="member-grid">
            {members.map(({ name, role, description, icon: Icon, code, accent, initials }, index) => (
              <Reveal key={name} delay={index * 70}>
                <article className={`member-card accent-${accent}`}>
                  <div className="member-card-head"><span>{code}</span><ArrowUpRight size={15} /></div>
                  <div className="member-avatar"><div className="avatar-orbit" /><div className="avatar-core"><Icon size={24} strokeWidth={1.35} /></div><span>{initials}</span></div>
                  <div className="member-info"><h3>{name}</h3><p className="member-role">{role}</p><p className="member-description">{description}</p></div>
                  <div className="member-card-foot"><span className="member-status"><i /> PROJECT TEAM</span><span className="member-index">0{index + 1}</span></div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="collaboration-section section-pad">
        <div className="page-container collaboration-grid">
          <Reveal><div><p className="eyebrow"><span className="eyebrow-mark" /> HOW THE PARTS CONNECT</p><h2>Good work travels<br /><span>across disciplines.</span></h2><p className="collaboration-copy">A considered interface helps people understand the workflow. The frontend presents it, the backend stores project records, and future research work can define the right data and analysis methods.</p></div></Reveal>
          <Reveal delay={100}><div className="collaboration-map" aria-label="Project role collaboration map">
            <div className="collab-ring ring-a" /><div className="collab-ring ring-b" /><div className="collab-core"><span>HEXA<br />LOTUS</span></div>
            <div className="collab-point point-design"><Palette size={15} /><span>DESIGN</span></div>
            <div className="collab-point point-frontend"><Code2 size={15} /><span>FRONTEND</span></div>
            <div className="collab-point point-backend"><Fingerprint size={15} /><span>BACKEND</span></div>
            <div className="collab-point point-ai"><BrainCircuit size={15} /><span>CYBERSECURITY<br />& AI</span></div>
          </div></Reveal>
        </div>
      </section>
    </div>
  );
}
