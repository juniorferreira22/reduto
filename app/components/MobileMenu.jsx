"use client";

import Link from "next/link";
import { useState } from "react";

export default function MobileMenu({ isAdmin }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Botão Mobile */}
            <button
                className="md:hidden text-white text-3xl"
                onClick={() => setOpen((prev) => !prev)}
            >
                ☰
            </button>

            {/* Menu Mobile */}
            <nav
                className={`md:hidden bg-zinc-900/90 backdrop-blur border-t border-zinc-800 flex flex-col px-6 overflow-hidden transition-all duration-300 ${open ? "max-h-60 py-4" : "max-h-0 py-0"
                    }`}
            >
                <Link href="/" className="py-2 hover:text-red-800">Home</Link>

                {isAdmin && (
                    <Link href="/players" className="py-2 hover:text-red-800">
                        Jogadores
                    </Link>
                )}

                <Link href="/shuffle" className="py-2 hover:text-red-800">
                    Sorteador de Times
                </Link>

                <a
                    href="https://discord.gg/q6WUSGZpSd"
                    target="_blank"
                    rel="noreferrer"
                    className="py-2 hover:text-red-800"
                >
                    Nosso Discord
                </a>
            </nav>
        </>
    );
}
