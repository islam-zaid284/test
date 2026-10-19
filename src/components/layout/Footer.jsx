import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <Link to="/" className="brand footer-brand">
            <span className="brand-mark" aria-hidden="true"><i /><i /><i /><i /><b /></span>
            <span className="brand-name">HEXA <em>LOTUS</em></span>
          </Link>
          <p className="footer-copy">A student project exploring observation, imagery, and the outer solar system.</p>
        </div>
        <div className="footer-links">
          <Link to="/project">Project <ArrowUpRight size={13} /></Link>
          <Link to="/team">Team <ArrowUpRight size={13} /></Link>
          <Link to="/telescope">Telescope <ArrowUpRight size={13} /></Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>HEXA LOTUS · Project overview</span>
        <span>Built with curiosity <span className="footer-star">✳</span></span>
      </div>
    </footer>
  );
}
