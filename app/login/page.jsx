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
        });

        if (res.ok) {
            router.push("/players");
        } else {
            setError("Usuário ou senha incorretos.");
        }
    }

    return (
        <div className="min-h-screen w-full grid lg:grid-cols-2 text-white ">
            
            <div className="flex justify-center px-6">
                <div className="bg-white text-gray-800 p-16 py-24 shadow-2xl w-full max-w-md">
                    
                    <h1 className="text-3xl font-bold text-red-700 py-2">
                        Seja bem-vindo(a)!
                    </h1>
                    <p className="text-gray-500 mt-1">
                        Insira o login e senha para continuar.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-8">
                        <input
                            type="text"
                            placeholder="Usuário"
                            className="bg-gray-100 p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-600 outline-none transition placeholder:text-gray-400"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <input
                            type="password"
                            placeholder="Senha"
                            className="bg-gray-100 p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-600 outline-none transition placeholder:text-gray-400"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        {error && (
                            <p className="text-red-600 text-sm">{error}</p>
                        )}

                        <button className="bg-red-600 hover:bg-red-400 transition p-3 rounded-lg shadow-lg shadow-red-400/30 font-semibold text-white cursor-pointer">
                            Entrar
                        </button>
                    </form>

                    <button
                        onClick={() => router.push("/")}
                        className="bg-white p-2 px-6 w-full rounded-lg shadow-lg font-semibold cursor-pointer shadow-red-400/30 mt-6 text-lg text-center text-red-600 hover:text-white hover:bg-red-600 transition"
                    >
                        Entrar como player
                    </button>
                </div>
            </div>

            {/* --- RIGHT AREA (LOGO / VISUAL) --- */}
            <div className="hidden lg:flex items-center justify-center">
                <InteractiveLogo className="max-w-md opacity-90" />
            </div>
        </div>
    );
}
