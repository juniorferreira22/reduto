import "./styles/globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "Reduto dos Loucos" };

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="bg-black text-white min-h-screen selection:text-white">

        {/* Navbar */}
        <header className="w-full bg-zinc-900/60 backdrop-blur shadow-lg fixed top-0 left-0 z-50">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-6">

            {/* Logo */}
            <div className="flex">
              <Image src={'/logo nav.png'} height={100} width={500}></Image>
            </div>

            {/* Navegação */}
            <nav className="flex gap-6 text-sm md:text-base">
              <Link
                href="/"
                className="hover:text-red-800 transition-colors"
              >
                Home
              </Link>

              <Link
                href="/players"
                className="hover:text-red-800 transition-colors"
              >
                Jogadores
              </Link>

              <Link
                href="/shuffle"
                className="hover:text-red-800 transition-colors"              >
                Sorteador de Times
              </Link>

              <a
                href="https://discord.gg/q6WUSGZpSd"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-800  transition-colors"              >
                Nosso Discord
              </a>
            </nav>
          </div>
        </header>

        {/* Conteúdo principal */}
        <main className="pt-28 px-6 pb-20 max-w-6xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
