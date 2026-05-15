import type { Metadata } from "next";
import { Press_Start_2P, Space_Mono, VT323 } from "next/font/google";
import "./globals.css";

const pressStart = Press_Start_2P({
  variable: "--font-press-start",
  subsets: ["latin"],
  weight: "400",
});

const vt323 = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  weight: "400",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Ahmad Farhan | Retro Futuristic Developer Portfolio",
  description:
    "Retro futuristic developer portfolio with terminal-inspired UI, neon glow, and smooth interactions.",
  keywords: [
    "Ahmad Farhan",
    "Frontend Developer",
    "Full Stack Developer",
    "Retro Portfolio",
    "CRT",
    "Synthwave",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${pressStart.variable} ${vt323.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#050505] text-white flex flex-col">
        {children}
      </body>
    </html>
  );
}
