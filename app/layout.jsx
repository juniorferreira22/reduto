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
        <footer className="">
          <div className="">
            &copy; 2025 Junior Ferreira. Todos os direitos reservados.
          </div>
        </footer>
      </body>
    </html>
  );
}
