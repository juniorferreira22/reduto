"use client";

import Link from "next/link";
import { useState } from "react";

export default function MobileMenu({ isAdmin }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="md:hidden fixed w-full z-50">
            {/* botão hamburguer */}
            <div className="flex justify-end items-center p-4">
                <button
                    className="text-white text-3xl items-center active:scale-95 transition-transform"
                    onClick={() => setOpen(prev => !prev)}
                >
                    {open ? "✖" : "☰"}
                </button>
            </div>

            {/* NAV container */}
            <nav
                className={`absolute left-0 top-16 w-full rounded-b-xl
                bg-zinc-950/10 backdrop-blur-xl border-t border-zinc-800 
                shadow-xl transition-all duration-300 overflow-hidden
                ${open ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}
            `}
            >
                <ul className="flex flex-col p-2">
                    <NavItem href="/">Home</NavItem>

                    {isAdmin && (
                        <NavItem href="/players">Jogadores</NavItem>
                    )}

                    <NavItem href="/shuffle">Sorteador de Times</NavItem>

                    <NavItem href="/about/cs2">Blog CS2</NavItem>
                    
                    <li>
                        <a
                            href="https://discord.gg/q6WUSGZpSd"
                            target="_blank"
                            rel="noreferrer"
                            className="block py-3 px-6 text-lg text-zinc-300 hover:text-white
                            border-l-4 border-transparent hover:border-red-600 transition-all"
                        >
                            Nosso Discord
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

function NavItem({ href, children }) {
    return (
        <li>
            <Link
                href={href}
                className="block py-3 px-6 text-lg text-zinc-300 hover:text-white
                border-l-4 border-transparent hover:border-red-600 transition-all"
            >
                {children}
            </Link>
        </li>
    );
}
