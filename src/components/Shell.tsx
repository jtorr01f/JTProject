"use client";

import { useState, useEffect, ReactNode, FC } from "react";
import NavMenu from "./NavMenu";

interface ShellProps {
  children: ReactNode
}

const Shell: FC<ShellProps> = ({ children }) => {
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

export default Shell;