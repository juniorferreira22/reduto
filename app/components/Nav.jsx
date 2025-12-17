'use client';
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Nav({ isAdmin }) {
    const pathname = usePathname();

    const isActive = (href) => pathname === href;

    return (
        <div className="
            fixed top-6 left-0 w-full z-50 border-white/10 flex flex-row items-center
        ">
            <div className="flex flex-row items-center justify-between w-full px-6">

                {/* LOGO */}
                <Link href="/">
                    <Image
                        src="/logo nav.png"
                        width={200}
                        height={80}
                        alt="Logo Reduto"
                        className="max-w-[20vw] md:max-w-[7vw]"
                    />
                </Link>

                {/* DESKTOP MENU */}
                <nav className="flex flex-row gap-6">
                    
                    <Link
                        href="/"
                        className={isActive("/") ? "font-bold" : ""}
                    >
                        Home
                    </Link>

                    {isAdmin && (
                        <Link
                            href="/players"
                            className={isActive("/players") ? "font-bold" : ""}
                        >
                            Jogadores
                        </Link>
                    )}

                    <Link
                        href="/shuffle"
                        className={isActive("/shuffle") ? "font-bold" : ""}
                    >
                        Sorteador
                    </Link>

                    {/* CS2 PAGE */}
                    <Link
                        href="/about/cs2"
                        className={isActive("/about/cs2") ? "font-bold" : ""}
                    >
                        CS2
                    </Link>

                    {/* GTA RP PAGE */}
                    <Link
                        href="/about/gta-rp"
                        className={isActive("/about/gta-rp") ? "font-bold" : ""}
                    >
                        GTA RP
                    </Link>

                    <a
                        href="https://discord.gg/q6WUSGZpSd"
                        target="_blank"
                        rel="noreferrer"
                        className=""
                    >
                        Discord
                    </a>
                    
                </nav>

                <div>
                    <p>Futuramente</p>
                </div>
            </div>
        </div>
    );
}
