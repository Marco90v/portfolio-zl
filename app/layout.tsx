'use client'
import Sidebar from "@/components/Sidebar";
import "../styles/globals.css";
import favicon from "../assets/min-zoimar-lezama.jpg"

import { Bad_Script } from "next/font/google"
import { AnimatePresence } from "framer-motion";

const font = Bad_Script(
  {
    weight:["400"],
    subsets: ["latin"]
  }
)

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <title>Tonsang - Zoimar Lemaza | Portfolio</title>
      <meta name="description" content="Portfolio of illustrations" />
      <meta name="author" content="Marco Velasquez Figarella" />
      <link rel="icon" type="image/x-icon" href="/min-zoimar-lezama.png" />
      <body className={`bg-black ${font.className}`}>
        <main className="lg:grid gap-0 grid-cols-6 grid-rows-1">
          <Sidebar />
          <AnimatePresence
              mode="wait"
              initial={false}
              onExitComplete={() => window.scrollTo(0, 0)}
            >
              {children}
          </AnimatePresence>
        </main>
        </body>
    </html>
  )
}
