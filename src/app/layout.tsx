import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JTProject",
  description: "Fun side project to hone my React/Nextjs/Nodejs skills",
};

export default function RootLayout({
  children,
  sidebar,
  modal,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`} style={{ height: "1000px", backgroundColor: "#504f4f" }}>
        <div style={{ display: "flex", height: "100%" }}>
          <aside style={{ width: "250px", backgroundColor: "#504f4f" }}>
            {sidebar}
          </aside>
          <main style={{ flex: 1, padding: "20px", height: "100%" }}>
            {children}
          </main>
        </div>
        {modal}
      </body>
    </html>
  );
}
