import StarCursor from "../StarCursor.jsx";
import StarField from "../StarField.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

export default function SiteShell({ children }) {
  return (
    <div className="site-shell">
      <a className="skip-link sr-only focus:not-sr-only" href="#main-content">Skip to content</a>
      <StarField />
      <StarCursor />
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}
