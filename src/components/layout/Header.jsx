import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";

const links = [
  { to: "/project", label: "The project" },
  { to: "/team", label: "The team" },
  { to: "/telescope", label: "Telescope" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand" aria-label="HEXA LOTUS home" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /><i /><b /></span>
          <span className="brand-name">HEXA <em>LOTUS</em></span>
        </Link>
        <button
          className="mobile-menu-button"
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
          <NavLink end to="/" onClick={() => setOpen(false)}>Overview</NavLink>
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)}>{link.label}</NavLink>
          ))}
          <Link className="nav-note" to="/project" onClick={() => setOpen(false)}>
            <span className="status-dot" /> A project in progress <ArrowUpRight size={13} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
