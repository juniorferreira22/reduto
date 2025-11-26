import "./styles/globals.css";
import { verifyAdmin } from "./lib/auth";
import Nav from "./components/Nav";
import MobileMenu from "./components/MobileMenu";

export default function RootLayout({ children }) {

  const isAdmin = verifyAdmin();

  return (
    <html lang="pt-br">
      <body className="overflow-x-hidden bg-black text-white">
        <div className="flex flex-row justify-between">
          <Nav isAdmin={isAdmin} />
          {/* MOBILE MENU */}
          <div className="md:hidden flex items-center justify-center">
            <MobileMenu isAdmin={isAdmin} />
          </div>
        </div>

        {/* CONTEÚDO */}
        <main className="pt-20 max-w-6xl mx-auto px-4">
          {children}
        </main>
        <footer>
          <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6 text-center text-sm text-white/50">
            &copy; 2025 Junior Ferreira. Todos os direitos reservados.
          </div>
        </footer>
      </body>
    </html>
  );
}
