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
            headers: { "Content-Type": "application/json" }
        });

        if (res.ok) {
            router.push("/adm/players");
        } else {
            setError("Usuário ou senha incorretos.");
        }
    }

    return (
        <div className="bg-black text-white min-h-screen overflow-x-hidden">
            
            {/* Background effects */}
            <div className="absolute inset-0 bg-linear-to-b from-purple-900/20 via-black to-black" />
            
            <div className="absolute inset-0 opacity-20">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(139,92,246,.25) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(139,92,246,.25) 1px, transparent 1px)
                        `,
                        backgroundSize: "50px 50px",
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
                
                <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Logo Section */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tight">
                            <span className="bg-linear-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                                REDUTO
                            </span>
                            <br />
                            <span className="text-white">DOS LOUCOS</span>
                        </h1>
                        <p className="text-xl text-zinc-400 font-light">
                            Faça login para gerenciar a comunidade
                        </p>
                    </div>

                    {/* Login Card */}
                    <section className="relative group">
                        <div className="absolute inset-0 bg-linear-to-r from-purple-600/20 to-indigo-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                        <div className="relative bg-zinc-900/50 backdrop-blur-xl rounded-xl border border-white/5 p-8 md:p-12 shadow-2xl">
                            
                            <h2 className="text-3xl font-black mb-2">
                                Seja bem-vindo(a)!
                            </h2>
                            <p className="text-zinc-400 mb-8">
                                Insira o login e senha para continuar.
                            </p>

                            {/* Form */}
                            <div className="space-y-5">
                                <div className="flex flex-col">
                                    <label className="mb-2 text-sm text-zinc-300">Usuário</label>
                                    <input
                                        type="text"
                                        placeholder="Digite seu usuário"
                                        className="
                                            bg-zinc-800 border border-zinc-700 
                                            rounded-lg p-3 
                                            outline-none 
                                            focus:border-purple-500
                                            transition-all
                                        "
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="mb-2 text-sm text-zinc-300">Senha</label>
                                    <input
                                        type="password"
                                        placeholder="Digite sua senha"
                                        className="
                                            bg-zinc-800 border border-zinc-700 
                                            rounded-lg p-3 
                                            outline-none 
                                            focus:border-purple-500
                                            transition-all
                                        "
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                {error && (
                                    <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3">
                                        <p className="text-red-400 text-sm font-medium">
                                            {error}
                                        </p>
                                    </div>
                                )}

                                <button
                                    onClick={handleSubmit}
                                    className="
                                        w-full px-6 py-3 font-bold rounded-lg
                                        bg-linear-to-r from-purple-600 to-indigo-600
                                        hover:scale-[1.02] active:scale-[0.98]
                                        transition-all
                                        shadow-xl shadow-purple-600/40
                                    "
                                >
                                    Entrar
                                </button>

                                <button
                                    onClick={() => router.push("/")}
                                    className="
                                        w-full px-6 py-3 font-semibold rounded-lg
                                        bg-zinc-800 border border-zinc-700
                                        hover:bg-zinc-700 hover:border-purple-500
                                        transition-all
                                    "
                                >
                                    Entrar como player
                                </button>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}