"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { IconMenu2 } from "@tabler/icons-react";

import NavItem from "./NavItem";
import CollapsibleSection from "./CollapsibleSection";

import "@/styles/componentStyles/sidebar.styles.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const pathname = usePathname();

  // Load sidebar and section state from localStorage
  useEffect(() => {
    const savedSidebarState = localStorage.getItem("sidebarOpen");
    const savedSections = localStorage.getItem("openSections");

    if (savedSidebarState !== null) {
      setIsOpen(savedSidebarState === "true");
    }
    if (savedSections) {
      setOpenSections(JSON.parse(savedSections));
    }
  }, []);

  // Save sidebar state whenever it changes
  useEffect(() => {
    localStorage.setItem("sidebarOpen", String(isOpen));
  }, [isOpen]);

  // Save section states
  useEffect(() => {
    localStorage.setItem("openSections", JSON.stringify(openSections));
  }, [openSections]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const sideBarStyle = (isOpen: boolean) => ({
    width: isOpen ? "250px" : "60px",
    borderRadius: isOpen ? "0 0 8px 0" : "0",
    background: "rgb(114, 114, 114)",
    color: "white",
    transition: "width 0.3s",
    overflow: "hidden" as const,
    whiteSpace: "nowrap",
    height: "100vh",
  })

  return (
    <aside style={sideBarStyle(isOpen)}>
      <button onClick={toggleSidebar} className="toggleButton">
        <IconMenu2 size={28} />
      </button>

      {isOpen && (
        <ul className="navList">
          <NavItem href="/" label="Dashboard" active={pathname === "/"} />
          <CollapsibleSection
            title="Other"
            isOpen={openSections["modals"]}
            onToggle={() => toggleSection("modals")}
          >
            <NavItem
              href="/minecraftBingo"
              label="Minecraft Bingo"
              active={pathname === "/bingo"}
            />
            <NavItem
              href="/decodeTool"
              label="Decode Tool"
              active={pathname === "/decodeTool"}
            />
          </CollapsibleSection>
        </ul>
      )}
    </aside>
  );
};

export default Sidebar;
