"use client";

import { useState, useEffect } from "react";
import NavMenu from "./NavMenu";

export default function Shell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => setOpen(false);
    window.addEventListener("hashchange", handleRouteChange);
    return () => window.removeEventListener("hashchange", handleRouteChange);
  }, []);

  return (
    <div className="app">
      <NavMenu />
      {/* Page content */}
      <main className={`content ${open ? "content-shift" : ""}`}>
        {children}
      </main>

      {/* Dim overlay (mobile) */}
      {open && <div className="overlay" onClick={() => setOpen(false)} />}
    </div>
  );
}