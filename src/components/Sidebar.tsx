"use client";

import Link from "next/link";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/minecraftBingo", label: "Minecraft Bingo" },
  { href: "/onePieceTwentyQuestions", label: "One Piece Twenty Questions" },
  // { href: "/toDo", label: "To Do" }
];

export default function Sidebar() {
  return (
    <aside className={`sidebar`} role="navigation" aria-label="Sidebar">
      <nav>
        <ul>
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
