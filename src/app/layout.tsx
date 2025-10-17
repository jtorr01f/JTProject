import type { Metadata } from "next";
import "./globals.css";
import Shell from "../components/Shell";

export const metadata: Metadata = {
  title: "JAT Project",
  description: "A collection of fun projects built with Next.js and React.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}