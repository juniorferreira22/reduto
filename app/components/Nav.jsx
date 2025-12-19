'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav({ isAdmin }) {
    const pathname = usePathname();

    const isActive = (href) => pathname === href;

    return (
        <div className="fixed top-0 left-0 w-full z-50 py-4">

            <div className="absolute inset-0 bg-black/60 backdrop-blur-xl border-b border-white/10" />

            <div className="relative max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between">

                   
                    <Link href="/" className="relative group">
                        <div className="absolute inset-0 bg-linear-to-r from-purple-600/20 to-pink-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <h3 className="bg-linear-to-r font-extrabold text-xl from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                            <strong className="bg-white! bg-clip-text!">
                                [
                            </strong>
                            RDL
                            <strong className="bg-white! bg-clip-text!">
                                ]
                            </strong>
                        </h3>
                    </Link>

                 
                    <nav className="hidden md:flex items-center gap-2">
                        <NavLink href="/" isActive={isActive("/")} label="HOME" />

                        {isAdmin && (
                            <NavLink href="/adm/players" isActive={isActive("/adm/players")} label="JOGADORES" />
                        )}

                        <NavLink href="/shuffle" isActive={isActive("/shuffle")} label="SORTEADOR" />
                        <NavLink href="/about/cs2" isActive={isActive("/about/cs2")} label="CS2" />
                        <NavLink href="/about/gta-rp" isActive={isActive("/about/gta-rp")} label="GTARP" />

                        <a
                            href="https://discord.gg/q6WUSGZpSd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 px-6 py-2.5 rounded-full font-bold text-sm bg-linear-to-r from-purple-600 to-indigo-600 
                            hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105
                            shadow-lg shadow-purple-600/30"
                        >
                            Discord
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    );
}

function NavLink({ href, isActive, label }) {
    return (
        <Link
            href={href}
            className={`relative px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 group
                ${isActive
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }
            `}
        >
          
            {isActive && (
                <>
                    <div className="absolute inset-0 bg-linear-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-md" />
                    <div className="absolute inset-0 bg-white/10 rounded-full backdrop-blur-sm border border-white/20" />
                </>
            )}

     
            <div className={`absolute inset-0 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300
                ${isActive ? "hidden" : ""}
            `} />

            <span className="relative">{label}</span>
        </Link>
    );
}