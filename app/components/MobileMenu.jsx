"use client";

import Link from "next/link";
import { useState } from "react";

export default function MobileMenu({ isAdmin }) {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button
                className="md:hidden text-white text-3xl transition-transform"
                onClick={() => setOpen((prev) => !prev)}
            >
                {open ? "✖" : "☰"}
            </button>

            {/* menu de navegação */}
            <nav
                className={`md:hidden absolute left-0 right-0 top-16 mx-auto w-[90%] rounded-xl bg-zinc-900/95 backdrop-blur-xl border border-zinc-800 shadow-2xl transition-all duration-300 overflow-hidden
                ${open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}
            `}
            >
                <ul className="flex flex-col py-2">
                    <li>
                        <Link
                            href="/"
                            className="block py-3 px-6 text-lg text-zinc-300 hover:text-white border-l-4 border-transparent hover:border-red-700 transition-all"
                        >
                            Home
                        </Link>
                    </li>

                    {/* somente visto pra quem é admin */}
                    {isAdmin && (
                        <li>
                            <Link
                                href="/players"
                                className="block py-3 px-6 text-lg text-zinc-300 hover:text-white border-l-4 border-transparent hover:border-red-700 transition-all"
                            >
                                Jogadores
                            </Link>
                        </li>
                    )}

                    <li>
                        <Link
                            href="/shuffle"
                            className="block py-3 px-6 text-lg text-zinc-300 hover:text-white border-l-4 border-transparent hover:border-red-700 transition-all"
                        >
                            Sorteador de Times
                        </Link>
                    </li>

                    <li>
                        <a
                            href="https://discord.gg/q6WUSGZpSd"
                            target="_blank"
                            rel="noreferrer"
                            className="block py-3 px-6 text-lg text-zinc-300 hover:text-white border-l-4 border-transparent hover:border-red-700 transition-all"
                        >
                            Nosso Discord
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
