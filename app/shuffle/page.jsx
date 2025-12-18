"use client";

import { useEffect, useState } from "react";
import { Suspense } from "react";

export default function ShufflePage() {
    const [players, setPlayers] = useState([]);
    const [selected, setSelected] = useState([]);
    const [teamA, setTeamA] = useState([]);
    const [teamB, setTeamB] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function load() {
            try {
                const res = await fetch("/api/players");
                const data = await res.json();
                setPlayers(data);
            } catch {
                setError("❗ Erro ao carregar jogadores.");
            }
        }
        load();
    }, []);

    const toggleSelect = (player) => {
        if (selected.find((p) => p._id === player._id)) {
            setSelected(selected.filter((p) => p._id !== player._id));
            return;
        }
        if (selected.length >= 10) return;
        setSelected([...selected, player]);
    };

    const filteredPlayers = players.filter((p) =>
        p.nickname.toLowerCase().includes(search.toLowerCase())
    );

    const shuffleBalanced = () => {
        setError("");
        setTeamA([]);
        setTeamB([]);

        if (selected.length !== 10) {
            setError("Selecione exatamente 10 jogadores.");
            return;
        }

        setLoading(true);

        const attempts = 2000;
        let bestA = [];
        let bestB = [];
        let bestDiff = Infinity;

        const randomShuffle = (arr) => {
            const a = [...arr];
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        };

        for (let i = 0; i < attempts; i++) {
            const s = randomShuffle(selected);
            const t1 = s.slice(0, 5);
            const t2 = s.slice(5, 10);

            const diff = Math.abs(
                t1.reduce((acc, p) => acc + p.tier, 0) -
                t2.reduce((acc, p) => acc + p.tier, 0)
            );

            if (diff < bestDiff) {
                bestDiff = diff;
                bestA = t1;
                bestB = t2;
            }
            if (diff === 0) break;
        }

        setTeamA(bestA);
        setTeamB(bestB);
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden">
                
                <div className="absolute inset-0 bg-linear-to-b from-purple-900/20 via-black to-black" />
                
               
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-linear(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                                         linear-linear(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }} />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
                            <span className="bg-linear-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                                SORTEADOR
                            </span>
                            <br />
                            <span className="text-white">DE TIMES</span>
                        </h1>
                        <p className="text-xl text-zinc-400 font-light">
                            Mix Reduto dos Loucos
                        </p>
                    </div>

                    {error && (
                        <div className="max-w-2xl mx-auto mb-8 bg-red-500/10 border border-red-500/50 rounded-2xl p-6 text-center backdrop-blur-xl">
                            <p className="text-red-400 text-lg font-semibold">{error}</p>
                        </div>
                    )}

                    <div className="max-w-2xl mx-auto mb-12">
                        <p className="text-zinc-300 text-lg leading-relaxed text-center">
                            Selecione exatamente{" "}
                            <span className="text-purple-400 font-bold">10 jogadores</span>.
                            <br />
                            O sistema criará 2 times balanceados com base no Tier.
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto mb-8">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-linear-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                            <input
                                type="text"
                                placeholder="🔎 Pesquisar jogador por nickname..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="relative w-full px-6 py-5 rounded-2xl bg-zinc-900/50 border border-white/10 text-white text-lg
                                placeholder-zinc-500 focus:outline-none focus:border-purple-500/50 backdrop-blur-xl transition-all"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Players Grid */}
            <div className="max-w-7xl mx-auto px-6 pb-48">
                <Suspense fallback={
                    <div className="text-center py-20">
                        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent" />
                    </div>
                }>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredPlayers.map((p) => {
                            const active = selected.some((s) => s._id === p._id);
                            return (
                                <button
                                    key={p._id}
                                    onClick={() => toggleSelect(p)}
                                    className={`relative group overflow-hidden rounded-2xl transition-all duration-300
                                        ${active
                                            ? "scale-105"
                                            : "hover:scale-105"
                                        }
                                    `}
                                >
                                    {/* Glow effect */}
                                    <div className={`absolute inset-0 rounded-2xl blur-xl transition-all duration-500
                                        ${active
                                            ? "bg-linear-to-r from-green-600/40 to-emerald-600/40 opacity-100"
                                            : "bg-linear-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100"
                                        }
                                    `} />
                                    
                                    {/* Card content */}
                                    <div className={`relative bg-zinc-900/50 backdrop-blur-xl rounded-2xl border transition-all duration-300
                                        ${active
                                            ? "border-green-500/50 shadow-lg shadow-green-500/20"
                                            : "border-white/5 group-hover:border-white/20"
                                        }
                                    `}>
                                        <div className="p-6 text-center">
                                            {active && (
                                                <div className="absolute top-3 right-3 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                            )}
                                            
                                            <h3 className="text-xl font-bold mb-2">{p.nickname}</h3>
                                            <div className="inline-block px-4 py-1 rounded-full bg-purple-500/20 border border-purple-500/30">
                                                <span className="text-purple-400 font-semibold">Tier {p.tier}</span>
                                            </div>
                                        </div>

                                        <a
                                            href={p.steamProfile}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="block w-full py-4 bg-blue-600/20 hover:bg-blue-600/30 border-t border-white/5 rounded-b-2xl
                                            text-blue-400 font-semibold transition-colors items-center justify-center gap-2"
                                        >
                                            Perfil Steam
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.002 19.323a7.322 7.322 0 01-5.476-12.477l3.825 1.58a2.01 2.01 0 011.163 1.85 2.011 2.011 0 01-2.01 2.01 2.012 2.012 0 01-1.163-.368l-3.825-1.58a7.322 7.322 0 0010.486 5.985 7.322 7.322 0 00-3-14z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </Suspense>
            </div>

            {/* Fixed Bottom Bar */}
            <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-black/80 backdrop-blur-xl">
                <div className="max-w-4xl mx-auto px-6 py-6">
                    <div className="flex flex-col gap-4">
                        {/* Progress */}
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-lg font-semibold">Selecionados</span>
                            <span className="text-2xl font-black">
                                <span className={selected.length === 10 ? "text-green-400" : "text-purple-400"}>
                                    {selected.length}
                                </span>
                                <span className="text-zinc-500">/10</span>
                            </span>
                        </div>

                        <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
                            <div
                                className={`h-full transition-all duration-500 ${
                                    selected.length === 10 
                                        ? "bg-linear-to-r from-green-500 to-emerald-500" 
                                        : "bg-linear-to-r from-purple-500 to-pink-500"
                                }`}
                                style={{ width: `${selected.length * 10}%` }}
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4">
                            <button
                                onClick={() => setSelected([])}
                                disabled={selected.length === 0}
                                className="flex-1 px-6 py-4 rounded-xl text-lg font-bold bg-zinc-800/50 border border-zinc-700
                                hover:bg-zinc-700/50 disabled:opacity-40 disabled:cursor-not-allowed
                                transition-all duration-300 active:scale-95"
                            >
                                ✖️ Limpar
                            </button>
                            
                            <button
                                onClick={shuffleBalanced}
                                disabled={loading || selected.length !== 10}
                                className="flex-1 px-6 py-4 rounded-xl text-lg font-bold bg-linear-to-r from-purple-600 to-indigo-600
                                hover:from-purple-700 hover:to-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed
                                shadow-xl shadow-purple-600/30 transition-all duration-300 active:scale-95"
                            >
                                {loading ? "⏳ Gerando..." : "🔥 Gerar Times"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Results */}
            {(teamA.length > 0 || teamB.length > 0) && (
                <div className="max-w-7xl mx-auto px-6 py-24 mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-7xl font-black mb-4">
                            <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                RESULTADO
                            </span>
                        </h2>
                        <p className="text-zinc-400 text-xl">Times gerados com sucesso!</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <TeamCard title="TIME A" list={teamA} color="blue" />
                        <TeamCard title="TIME B" list={teamB} color="orange" />
                    </div>
                </div>
            )}
        </div>
    );
}

function TeamCard({ title, list, color }) {
    const sum = list.reduce((acc, p) => acc + p.tier, 0);
    
    const colorClasses = {
        blue: {
            linear: "from-blue-600/20 to-cyan-600/20",
            border: "border-blue-500/50",
            text: "text-blue-400",
            glow: "shadow-blue-500/20"
        },
        orange: {
            linear: "from-orange-600/20 to-red-600/20",
            border: "border-orange-500/50",
            text: "text-orange-400",
            glow: "shadow-orange-500/20"
        }
    };

    const colors = colorClasses[color];

    return (
        <div className="relative group">
            {/* Glow effect */}
            <div className={`absolute inset-0 bg-linear-to-r ${colors.linear} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100`} />
            
            {/* Card */}
            <div className={`relative bg-zinc-900/50 backdrop-blur-xl rounded-3xl border ${colors.border} p-8 ${colors.glow} shadow-xl`}>
                <h3 className={`text-3xl font-black mb-8 ${colors.text}`}>{title}</h3>
                
                <div className="space-y-4 mb-8">
                    {list.map((p, idx) => (
                        <div
                            key={p._id}
                            className="flex items-center justify-between py-4 px-4 rounded-xl bg-white/5 border border-white/10
                            hover:bg-white/10 transition-all"
                        >
                            <div className="flex items-center gap-4">
                                <span className={`text-2xl font-black ${colors.text}`}>
                                    {idx + 1}
                                </span>
                                <span className="text-lg font-semibold">{p.nickname}</span>
                            </div>
                            <div className={`px-4 py-2 rounded-full bg-white/10 border border-white/20`}>
                                <span className="text-sm font-bold">Tier {p.tier}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`pt-6 border-t border-white/10`}>
                    <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-zinc-400">Total de Tier</span>
                        <span className={`text-4xl font-black ${colors.text}`}>{sum}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}