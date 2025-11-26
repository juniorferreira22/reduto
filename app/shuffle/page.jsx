"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ButtonJoin from "../components/ButtonJoin";
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
        <div className="p-6 md:p-10 max-w-5xl mx-auto text-white mb-28">
            {/* Header */}
            <div className="text-center mb-4">
                <h1 className="text-2xl md:text-4xl font-bold tracking-wide">
                    🎯 SORTEADOR DE TIMES
                </h1>
                <p className="text-zinc-400 mt-1 text-sm">
                    Mix Reduto dos Loucos
                </p>
            </div>

            {error && (
                <div className="bg-red-600/50 border border-red-400 text-sm p-3 rounded mb-6 text-center">
                    {error}
                </div>
            )}

            {/* cabecalho */}
            <p className="text-gray-300 text-sm md:text-lg mb-6 leading-relaxed">
                Selecione exatamente{" "}
                <span className="text-yellow-400 font-semibold">10 jogadores</span>.
                O sistema criará 2 times balanceados com base no Tier.
            </p>


            {/* pesquisa */}
            <div>
                <input
                    type="text"
                    placeholder="🔎 Pesquisar jogador por nickname..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-zinc-900/70 border border-zinc-700 text-white 
                    placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-lg"
                />
            </div>

            <div className="my-5 flex justify-center">
                <ButtonJoin />
            </div>

            {/* cards dos players */}
            <Suspense fallback={<div>Carregando...</div>}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    {filteredPlayers.map((p) => {
                        const active = selected.some((s) => s._id === p._id);
                        return (
                            <button
                                key={p._id}
                                onClick={() => toggleSelect(p)}
                                className={`pt-4 rounded-xl border backdrop-blur-sm
                                    flex flex-col items-center text-center gap-1
                                    transition-all duration-200 cursor-pointer
                                    ${active
                                        ? "bg-zinc-900 border-green-400 shadow-[0_0_12px_#22c55e66]"
                                        : "bg-zinc-800/60 border-zinc-700 hover:border-zinc-500 hover:bg-zinc-700/70"
                                    }
                                `}
                            >
                                <span className=""></span>
                                <span className="text-lg font-semibold">{p.nickname}</span>
                                <span className="opacity-80 text-sm">Tier {p.tier}</span>

                                <a
                                    href={p.steamProfile}
                                    target="_blank"
                                    className="mt-2 w-full flex items-center justify-center gap-2 text-sm font-bold
                                        bg-blue-600/90 hover:bg-blue-700 rounded-xl rounded-t-none py-4"
                                >
                                    Perfil Steam
                                    <Image src="/steam.png" width={16} height={16} alt="Steam" />
                                </a>
                            </button>
                        );
                    })}
                </div>
            </Suspense>

            {/* barra de selecao e botao de sortear */}
            <div className="fixed translate-x-1/4 w-2xl bottom-8 rounded-2xl border border-zinc-600 bg-indigo-500/20 backdrop-blur-lg p-4 px-8">
                <div className="flex flex-col">

                    <div className="justify-between items-center mb-2">
                        <p className="font-medium text-xl flex flex-row justify-between gap-2">
                            <span>Selecionados:{" "}</span>
                            <span>
                                <span className="text-indigo-400 font-bold">{selected.length}</span>/10

                            </span>
                        </p>

                        <div className="w-full h-3 mt-3 bg-zinc-700 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-indigo-500 transition-all"
                                style={{ width: `${selected.length * 10}%` }}
                            />
                        </div>
                    </div>

                    <div className="flex flex-row w-full gap-2 text-center items-center justify-center my-2">
                        <button
                            onClick={() => setSelected([])}
                            className="px-8 py-4 w-md rounded-xl text-xl font-bold bg-slate-600/30 border border-slate-400 backdrop-blur-xl hover:bg-slate-400
                        shadow-md shadow-slate-600 disabled:opacity-40 active:scale-95 transition-all">
                            {loading ? "" : "✖️ Limpar seleção"}
                        </button>
                        
                        <button
                            onClick={shuffleBalanced}
                            disabled={loading}
                            className="px-8 py-4 w-md rounded-xl text-xl font-bold bg-green-600/30 border border-green-600 backdrop-blur-xl hover:bg-green-700
                        shadow-md shadow-green-600 disabled:opacity-40 active:scale-95 transition-all"
                        >
                            {loading ? "⏳ Gerando..." : "🔥 Gerar times"}
                        </button>

                        
                    </div>
                </div>
            </div>


            {/* resultados se o numero de players do dois times forem maior que zero */}
            {(teamA.length > 0 || teamB.length > 0) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <TeamCardA title="Time A" list={teamA} />
                    <TeamCardB title="Time B" list={teamB} />
                </div>
            )}


        </div>
    );
}

function TeamCardA({ title, list }) {
    const sum = list.reduce((acc, p) => acc + p.tier, 0);

    return (
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 shadow-lg">
            <h2 className={`text-xl font-bold mb-4 text-blue-400`}>{title}</h2>
            <ul className="space-y-2">
                {list.map((p) => (
                    <li
                        key={p._id}
                        className="flex justify-between pb-1 text-base border-b border-zinc-800/60"
                    >
                        <span>{p.nickname}</span>
                        <span className="text-gray-300">Tier {p.tier}</span>
                    </li>
                ))}
            </ul>

            <p className="mt-4 text-gray-300 text-xl font-semibold">
                Total:{" "}
                <span className={`text-blue-400`}>{sum}</span>
            </p>
        </div>
    );
}
function TeamCardB({ title, list }) {
    const sum = list.reduce((acc, p) => acc + p.tier, 0);

    return (
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 shadow-lg">
            <h2 className={`text-xl font-bold mb-4 text-orange-400`}>{title}</h2>
            <ul className="space-y-2">
                {list.map((p) => (
                    <li
                        key={p._id}
                        className="flex justify-between pb-1 text-base border-b border-zinc-800/60"
                    >
                        <span>{p.nickname}</span>
                        <span className="text-gray-300">Tier {p.tier}</span>
                    </li>
                ))}
            </ul>

            <p className="mt-4 text-gray-300 text-xl font-semibold">
                Total:{" "}
                <span className={`text-orange-400`}>{sum}</span>
            </p>
        </div>
    );
}
