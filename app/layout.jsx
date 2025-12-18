import "./styles/globals.css";
import { verifyAdmin } from "./lib/auth";
import Nav from "./components/Nav";
import MobileMenu from "./components/MobileMenu";

export default function RootLayout({ children }) {

  const isAdmin = verifyAdmin();

  return (
    <html lang="pt-br">
      <body className="">
        <div className="">
          <Nav isAdmin={isAdmin} />
          {/* MOBILE MENU */}
          <div className="">
            <MobileMenu isAdmin={isAdmin} />
          </div>
        </div>
    
        {/* CONTEÚDO */}
        <main className="">
          {children}
        </main>
        <footer className="bg-black border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-zinc-500">
          <p>© 2025 Junior Ferreira. Todos os direitos reservados.</p>
        </div>
      </footer>
      </body>
    </html>
  );
}
