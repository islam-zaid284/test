import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import SiteShell from "./components/layout/SiteShell.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const Telescope = lazy(() => import("./pages/Telescope.jsx"));
const AIModel = lazy(() => import("./pages/AIModel.jsx"));
const Team = lazy(() => import("./pages/Team.jsx"));

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
        <Suspense fallback={<div className="page-loading" role="status">Opening project page…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/telescope" element={<Telescope />} />
            <Route path="/ai-model" element={<AIModel />} />
            <Route path="/team" element={<Team />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </SiteShell>
    </>
  );
}
