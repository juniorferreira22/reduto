"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
            <div className="bg-zinc-900 p-8 rounded-xl w-full max-w-sm shadow-xl">
                <h1 className="text-2xl font-bold mb-6">Painel Administrativo</h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Usuário"
                        className="bg-zinc-800 p-3 rounded-lg border border-zinc-700"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Senha"
                        className="bg-zinc-800 p-3 rounded-lg border border-zinc-700"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <button className="bg-red-700 hover:bg-red-800 transition p-3 rounded-lg font-semibold">
                        Entrar
                    </button>
                </form>

                <button
                    onClick={() => router.push("/")}
                    className="mt-6 text-sm text-zinc-400 hover:text-white"
                >
                    Entrar como player →
                </button>
            </div>
        </div>
    );
}
