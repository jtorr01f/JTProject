import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JTProject",
  description: "Fun side project to hone my React/Nextjs/Nodejs skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ height: "1000px", backgroundColor: "#504f4f" }}>
        <div style={{ display: "flex", height: "100%" }}>
          <main style={{ flex: 1, padding: "20px", height: "100%" }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
