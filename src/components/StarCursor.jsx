import { useEffect, useRef } from "react";

export default function StarCursor() {
  const ref = useRef(null);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
    if (!media.matches) return undefined;
    const cursor = ref.current;
    let frame = 0;
    const move = (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        cursor?.style.setProperty("--cursor-x", `${event.clientX}px`);
        cursor?.style.setProperty("--cursor-y", `${event.clientY}px`);
        cursor?.classList.add("is-active");
      });
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
    };
  }, []);

  return (
    <div className="star-cursor" ref={ref} aria-hidden="true">
      <span />
    </div>
  );
}
