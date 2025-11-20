import "./styles/globals.css";
import Link from "next/link";
import Image from "next/image";
import { verifyAdmin } from "./lib/auth";
import MobileMenu from "./components/MobileMenu";

export default function RootLayout({ children }) {
  const isAdmin = verifyAdmin(); // ✔ sem argumentos

  return (
    <html lang="pt-br">
      <body className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-8 overflow-x-hidden">

        <header className="w-full bg-zinc-900/60 backdrop-blur shadow-lg fixed top-0 left-0 z-50">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-25">

            {/* Logo */}
            <div className="flex md:scale-0.5">
              <Image src={'/logo nav.png'} height={50} width={400} alt="Logo" />
            </div>

            {/* Mobile */}
            <MobileMenu isAdmin={isAdmin} />

            {/* Navbar Desktop */}
            <nav className="hidden md:flex gap-6 text-sm md:text-base">
              <Link href="/" className="hover:text-red-800 transition-colors">Home</Link>

              {isAdmin && (
                <Link href="/players" className="hover:text-red-800 transition-colors">
                  Jogadores
                </Link>
              )}

              <Link href="/shuffle" className="hover:text-red-800 transition-colors">
                Sorteador de Times
              </Link>

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
        </header>

        <main className="pt-28 px-6 pb-20 max-w-6xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
