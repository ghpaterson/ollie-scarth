import { Inter } from "next/font/google";
import "./globals.css";
import { AnimatePresence, motion as m } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OLLIE SCARTH-SAUNDERS",
  description: "Ollie Scarth-Saunders Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
