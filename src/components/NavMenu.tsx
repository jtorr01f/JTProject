"use client";

import { IconArrowLeft, IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";
import { useState, FC } from "react";
import { useClickOutside } from "../hooks/useClickOutside";
import '../styles/Components/navMenu.css';

const LINKS = [
  { href: "/minecraftBingo", label: "Minecraft Bingo" },
  { href: "/onePieceTwentyQuestions", label: "One Piece Twenty Questions" },
  { href: "/toDo", label: "To Do List" },
];

const NavMenu: FC = () => {
  const [open, setOpen] = useState(false);

  const dropdownRef = useClickOutside(() => {
    setOpen(false);
  });

  return (
    <div>
      <IconMenu2 className="navMenuIcon" onClick={() => setOpen(true)}/>
      <aside ref={dropdownRef} className={`nav-menu ${open && 'open'}`} role="navigation" aria-label="nav-menu">
        <div className="navHeader">
          <IconArrowLeft className="navMenuIcon" onClick={() => setOpen(false)} />
        </div>
        <nav>
          {open && (
            <ul>
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} onClick={() => setOpen(false)}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </aside>
    </div>
  );
}

export default NavMenu;