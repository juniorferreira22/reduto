'use client';
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Nav({ isAdmin }) {
    const pathname = usePathname();

    const isActive = (href) => pathname === href;

    return (
        <div className="
            fixed top-0 left-0 w-full z-50 
            bg-black/40 backdrop-blur-xl 
            border-b border-white/10
        ">
            <div className="max-w-6xl mx-auto px-4 lg:px-6 flex items-center h-20 justify-between">

                {/* LOGO */}
                <Link href="/" className="flex items-center gap-2 shrink-0">
                    <Image
                        src="/logo nav.png"
                        width={300}
                        height={80}
                        alt="Logo Reduto"
                        className="opacity-90 hover:opacity-100 transition"
                    />
                </Link>

                {/* DESKTOP MENU */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    
                    <Link
                        href="/"
                        className={`
                            transition-all hover:scale-[1.04]
                            ${isActive("/") ? "font-bold text-white" : "text-zinc-300 hover:text-white"}
                        `}
                    >
                        Home
                    </Link>

                    {isAdmin && (
                        <Link
                            href="/players"
                            className={`
                                transition-all hover:scale-[1.04]
                                ${isActive("/players") ? "font-bold text-white" : "text-zinc-300 hover:text-white"}
                            `}
                        >
                            Jogadores
                        </Link>
                    )}

                    <Link
                        href="/shuffle"
                        className={`
                            transition-all hover:scale-[1.04]
                            ${isActive("/shuffle") ? "font-bold text-white" : "text-zinc-300 hover:text-white"}
                        `}
                    >
                        Sorteador
                    </Link>

                    <a
                        href="https://discord.gg/q6WUSGZpSd"
                        target="_blank"
                        rel="noreferrer"
                        className="text-indigo-300 hover:text-indigo-400 transition-all hover:scale-[1.04]"
                    >
                        Discord
                    </a>
                </nav>
            </div>
        </div>
    );
}
