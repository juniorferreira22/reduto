"use client"

import "./styles/globals.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [open, setOpen] = useState(false);


  return (
    <html lang="pt-br">
      <body className="bg-black text-white min-h-screen selection:text-white">

        {/* Navbar */}
        <header className="w-full bg-zinc-900/60 backdrop-blur shadow-lg fixed top-0 left-0 z-50">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-25">

            {/* Logo */}
            <div className="flex md:scale-0.5">
              <Image src={'/logo nav.png'} height={50} width={400} alt="Logo" className="" />
            </div>

            {/* Botão Mobile */}
            <button
              className="md:hidden text-white text-3xl"
              onClick={() => setOpen((prev) => !prev)}
            >
              ☰
            </button>

            {/* Navegação Desktop */}
            <nav className="hidden md:flex gap-6 text-sm md:text-base">
              <Link href="/" className="hover:text-red-800 transition-colors">Home</Link>
              <Link href="/players" className="hover:text-red-800 transition-colors">Jogadores</Link>
              <Link href="/shuffle" className="hover:text-red-800 transition-colors">Sorteador de Times</Link>
              <a
                href="https://discord.gg/q6WUSGZpSd"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-800 transition-colors"
              >
                Nosso Discord
              </a>
            </nav>
          </div>

          {/* Menu Mobile */}
          <nav
            className={`md:hidden bg-zinc-900/90 backdrop-blur border-t border-zinc-800 flex flex-col px-6 overflow-hidden transition-all duration-300 ${open ? "max-h-60 py-4" : "max-h-0 py-0"
              }`}
          >
            <Link href="/" className="py-2 hover:text-red-800">Home</Link>
            <Link href="/players" className="py-2 hover:text-red-800">Jogadores</Link>
            <Link href="/shuffle" className="py-2 hover:text-red-800">Sorteador de Times</Link>
            <a
              href="https://discord.gg/q6WUSGZpSd"
              target="_blank"
              rel="noreferrer"
              className="py-2 hover:text-red-800"
            >
              Nosso Discord
            </a>
          </nav>
        </header>


        {/* Conteúdo principal */}
        <main className="pt-28 px-6 pb-20 max-w-6xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
