import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SiteShell from "./components/layout/SiteShell.jsx";
import Home from "./pages/Home.jsx";
import Project from "./pages/Project.jsx";
import Team from "./pages/Team.jsx";
import Telescope from "./pages/Telescope.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <SiteShell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/team" element={<Team />} />
          <Route path="/telescope" element={<Telescope />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </SiteShell>
    </>
  );
}
