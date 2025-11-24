"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ButtonCT from "../components/ButtonCT";
import ButtonT from "../components/ButtonT";

export default function ShufflePage() {
    const [players, setPlayers] = useState([]);
    const [selected, setSelected] = useState([]);
    const [teamA, setTeamA] = useState([]);
    const [teamB, setTeamB] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");

    // carrega os players do backend com useEffect
    useEffect(() => {
        async function load() {
            try {
                const res = await fetch("/api/players");
                const data = await res.json();
                setPlayers(data);
            } catch {
                setError("Erro ao carregar jogadores.");
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

    // pesquisa de players pelo nick
    const filteredPlayers = players.filter((p) =>
        p.nickname.toLowerCase().includes(search.toLowerCase())
    );

    // algoritmo de balanceamento de times
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
            const shuffled = randomShuffle(selected);
            const team1 = shuffled.slice(0, 5);
            const team2 = shuffled.slice(5, 10);

            const sum1 = team1.reduce((acc, p) => acc + p.tier, 0);
            const sum2 = team2.reduce((acc, p) => acc + p.tier, 0);

            const diff = Math.abs(sum1 - sum2);

            if (diff < bestDiff) {
                bestDiff = diff;
                bestA = team1;
                bestB = team2;
            }

            if (diff === 0) break;
        }

        setTeamA(bestA);
        setTeamB(bestB);
        setLoading(false);
    };

    return (
        <div className="p-5 md:p-10 max-w-5xl mx-auto text-white">

            <div className="text-center mb-8">

                <h1 className="text-3xl md:text-4xl mt-8 font-extrabold tracking-wide">
                    SORTEADOR DE TIMES - MIX REDUTO DOS LOUCOS
                </h1>
            </div>

            {error && (
                <div className="bg-red-700/80 border border-red-500 text-sm p-3 rounded mb-6 text-center">
                    {error}
                </div>
            )}

            <p className="text-gray-300 max-w-6xl text-xs p-2 m-auto my-8 text-left md:text-lg">
                Selecione exatamente <span className="text-yellow-400 font-semibold">10 jogadores</span> da lista abaixo. Os jogadores selecionados serão divididos em dois times balanceados com base no tier de cada um. <br /> <br />
                Cada jogador possui um tier que representa sua habilidade e experiência no jogo, de 1 (menor) a 5 (maior), garantindo partidas justas e competitivas.
            </p>

            {/* pesquisa o player por nick */}
            <div className="flex justify-center mb-6 w-full">
                <input
                    type="text"
                    placeholder="Pesquisar jogador..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/70 border border-zinc-700 text-white 
                               placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-lg"
                />
            </div>

            {/* tabela que dispõe após os dados serem puxados do server */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                {filteredPlayers.map((p) => {
                    const active = selected.find((s) => s._id === p._id);
                    return (
                        <button
                            key={p._id}
                            onClick={() => toggleSelect(p)}
                            className={`p-5 rounded-xl border shadow-lg transition-all flex flex-col items-center text-center
                                ${active
                                    ? "bg-green-700 border-green-400 shadow-green-500/20 scale-[1.02]"
                                    : "bg-zinc-800 border-zinc-700 hover:bg-zinc-700 hover:scale-[1.02]"
                                }`}
                        >
                            <strong className="text-lg">{p.nickname}</strong>
                            <br />
                            <p className="text-sm text-gray-300">Tier {p.tier}</p>
                            <br />
                            <strong className="text-md flex text-center justify-center bg-blue-600 border border-blue-200 p-2 rounded-lg w-full">
                                <a href={p.steamProfile} target={"_blank"}>Perfil Steam <Image src={'/steam.png'} height={20} width={20} className="m-auto"></Image></a>
                            </strong>
                        </button>
                    );
                })}
            </div>

            <p className="text-center mb-8 font-medium text-lg">
                Selecionados:{" "}
                <span className="text-indigo-400 font-bold">{selected.length}</span> / 10
            </p>

            {/* botão pra gerar times */}
            <div className="text-center mb-10">
                <button
                    onClick={shuffleBalanced}
                    disabled={loading}
                    className="bg-red-600 hover:bg-red-900 px-15 py-4 rounded-xl text-xl font-bold 
                               shadow-xl disabled:opacity-40 transition-all active:scale-95"
                >
                    {loading ? "Gerando Times..." : "Gerar Times"}
                </button>
            </div>

            {/* resultados depois da função de balanceamento dita acima */}
            {(teamA.length > 0 || teamB.length > 0) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                    {/* time A - CT */}
                    <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 shadow-xl">
                        <h2 className="text-2xl font-bold mb-4 text-indigo-400">Time A</h2>
                        <ul className="space-y-3">
                            {teamA.map((p) => (
                                <li key={p._id} className="flex justify-between border-b border-zinc-800 pb-1 text-lg">
                                    <span>{p.nickname}</span>
                                    <span className="text-gray-300">Tier {p.tier}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-5 text-gray-300 font-semibold text-xl">
                            Total:{" "}
                            <span className="text-indigo-400">
                                {teamA.reduce((acc, p) => acc + p.tier, 0)}
                            </span>
                        </p>
                        <div className="text-white p-4 px-8 m-auto bg-indigo-700">
                            <ButtonCT/>
                        </div>
                    </div>

                    {/* time B - TR */}
                    <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 shadow-xl">
                        <h2 className="text-2xl font-bold mb-4 text-pink-400">Time B</h2>
                        <ul className="space-y-3">
                            {teamB.map((p) => (
                                <li key={p._id} className="flex justify-between border-b border-zinc-800 pb-1 text-lg">
                                    <span>{p.nickname}</span>
                                    <span className="text-gray-300">Tier {p.tier}</span>
                                </li>
                            ))}
                        </ul>
                        {/* mostra o total da soma dos tiers para demonstrar o balanceamento calculado */}
                        <p className="mt-5 text-gray-300 font-semibold text-xl">
                            Total:{" "}
                            <span className="text-pink-400">
                                {teamB.reduce((acc, p) => acc + p.tier, 0)}
                            </span>
                        </p>
                        <div className="text-white p-4 px-8 m-auto">
                            <ButtonT/>
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
}
