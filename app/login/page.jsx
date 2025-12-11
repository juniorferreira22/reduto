"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import InteractiveLogo from "../components/InteractiveLogo";

export default function LoginPage() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");

        const res = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: { "Content-Type": "application/json" }
        });

        if (res.ok) {
            router.push("/adm/players");
        } else {
            setError("Usuário ou senha incorretos.");
        }
    }

    return (
        <div className="
            my-6 w-full grid 
            lg:grid-cols-2 
        ">

            {/* --- CARD --- */}
            <div className="
                flex justify-center items-center 
                px-4 py-8 
                lg:px-10 lg:py-0
            ">
                <div className="
                    bg-white text-gray-800 
                    w-full max-w-md 
                    shadow-2xl 
                    rounded-3xl 
                    p-6 sm:p-10 md:p-12 lg:p-14
                    transition-all
                ">

                    {/* TITLE */}
                    <h1 className="
                        text-2xl sm:text-3xl font-bold text-red-600 
                        text-center lg:text-left
                    ">
                        Seja bem-vindo(a)!
                    </h1>
                    <p className="
                        text-gray-600 mt-1 
                        text-center lg:text-left
                    ">
                        Insira o login e senha para continuar.
                    </p>

                    {/* FORM */}
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-5 mt-8"
                    >
                        <input
                            type="text"
                            placeholder="Usuário"
                            className="
                                bg-gray-100 p-3 rounded-xl 
                                border border-gray-300
                                outline-none transition
                                focus:ring-2 focus:ring-red-500
                            "
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <input
                            type="password"
                            placeholder="Senha"
                            className="
                                bg-gray-100 p-3 rounded-xl 
                                border border-gray-300
                                outline-none transition
                                focus:ring-2 focus:ring-red-500
                            "
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        {error && (
                            <p className="text-red-600 text-sm font-medium">
                                {error}
                            </p>
                        )}

                        <button className="
                            bg-red-600 hover:bg-red-500 
                            transition p-3 rounded-xl
                            shadow-md shadow-red-400/30 
                            font-semibold text-white
                            active:scale-[0.98]
                        ">
                            Entrar
                        </button>
                    </form>

                    {/* PLAYER LOGIN */}
                    <button
                        onClick={() => router.push("/")}
                        className="
                            mt-6 w-full 
                            bg-white text-red-600 border border-red-600
                            p-3 rounded-xl font-semibold
                            shadow-md shadow-red-400/20
                            hover:bg-red-600 hover:text-white 
                            transition active:scale-[0.98]
                        "
                    >
                        Entrar como player
                    </button>
                </div>
            </div>

            {/* --- LOGO (DESKTOP ONLY) --- */}
            <div className="hidden lg:flex items-center justify-center">
                <InteractiveLogo className="max-w-lg opacity-95 scale-110" />
            </div>
        </div>
    );
}
