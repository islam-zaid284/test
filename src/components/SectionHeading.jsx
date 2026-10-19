export default function SectionHeading({ eyebrow, title, children, align = "left" }) {
  return (
    <div className={`section-heading ${align === "center" ? "text-center" : ""}`}>
      {eyebrow && <p className="eyebrow"><span className="eyebrow-mark" />{eyebrow}</p>}
      <h2>{title}</h2>
      {children && <p className="section-lede">{children}</p>}
    </div>
  );
}
