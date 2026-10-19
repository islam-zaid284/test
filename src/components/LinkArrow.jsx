import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function LinkArrow({ to, children, light = false, forward = false }) {
  const Icon = forward ? ArrowRight : ArrowUpRight;
  return (
    <Link className={`link-arrow ${light ? "link-light" : ""}`} to={to}>
      {children}<Icon size={16} strokeWidth={1.7} />
    </Link>
  );
}
