import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/Navbar";
import {
  SiFacebook,
  SiYoutube,
  SiLinkedin,
  SiInstagram,
  SiX,
} from "react-icons/si";

export const metadata: Metadata = {
  title: "Cosmoversity",
  description: "",
  generator: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <Navbar />
        <div className="fixed z-50 right-6 bottom-1/3 flex flex-col gap-6 bg-white/90 rounded-full shadow-lg p-3 border border-gray-200">
          <a
            href="#"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <SiFacebook size={28} className="text-blue-600" />
          </a>
          <a
            href="#"
            aria-label="X (formerly Twitter)"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <SiX size={28} className="text-black-600" />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <SiYoutube size={28} className="text-red-600" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <SiLinkedin size={28} className="text-blue-700" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <SiInstagram size={28} className="text-pink-500" />
          </a>
        </div>
        {children}
      </body>
    </html>
  );
}
