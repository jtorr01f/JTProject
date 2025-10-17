"use client";

import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

export default function Shell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  // Close sidebar on route change (optional nicety)
  useEffect(() => {
    const handleRouteChange = () => setOpen(false);
    window.addEventListener("hashchange", handleRouteChange);
    return () => window.removeEventListener("hashchange", handleRouteChange);
  }, []);

  return (
    <div className="app">
      <Sidebar open={open} onClose={() => setOpen(false)} />

      {/* Page content */}
      <main className={`content ${open ? "content-shift" : ""}`}>
        {children}
      </main>

      {/* Dim overlay (mobile) */}
      {open && <div className="overlay" onClick={() => setOpen(false)} />}
    </div>
  );
}