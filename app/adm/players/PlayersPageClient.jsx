"use client";

import React, { useState, useEffect } from "react";
import PlayerModal from "@/app/components/PlayerModal";
import PlayerRow from "@/app/components/PlayerRow";

export default function PlayersPageClient() {
    const [players, setPlayers] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [editing, setEditing] = useState(null);
    const [search, setSearch] = useState("");

    async function fetchPlayers() {
        const res = await fetch("/api/players");
        const data = await res.json();
        setPlayers(data);
    }

    const filteredPlayers = players.filter((player) =>
        player.nickname.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        startTransition(() => {
            fetch("/api/players")
                .then((res) => res.json())
                .then(setPlayers);
        });
    }, []);



    function handleEdit(player) {
        setEditing(player);
        setModalOpen(true);
    }

    async function handleDelete(id) {
        if (!confirm("Excluir este player?")) return;
        await fetch(`/api/players?id=${id}`, { method: "DELETE" });
        setPlayers((prev) => prev.filter((p) => p._id !== id));
    }

    function handleSaved(saved) {
        setPlayers((prev) => {
            const found = prev.find((p) => p._id === saved._id);
            if (found) return prev.map((p) => (p._id === saved._id ? saved : p));
            return [saved, ...prev];
        });
    }

    return (
        <div className="bg-black text-white min-h-screen overflow-x-hidden">

            {/* background effects */}
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

            {/* content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

                {/* title */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight">
                        <span className="bg-linear-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                            JOGADORES
                        </span>
                    </h1>
                    <p className="text-zinc-400 text-lg mt-4">
                        Gerencie os players da comunidade
                    </p>
                </div>

                {/* card */}
                <section className="relative group">
                    <div className="absolute inset-0 bg-linear-to-r from-purple-600/20 to-indigo-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                    <div className="relative bg-zinc-900/50 backdrop-blur-xl rounded-xl border border-white/5 p-8 shadow-2xl">

                        {/* header */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
                            <h2 className="text-3xl font-black flex items-center gap-3">
                                🎮 Lista de Players
                            </h2>

                            <button
                                onClick={() => {
                                    setEditing(null);
                                    setModalOpen(true);
                                }}
                                className="
                  px-6 py-3 font-bold rounded-full
                  bg-linear-to-r from-purple-600 to-indigo-600
                  hover:scale-105 transition-all
                  shadow-xl shadow-purple-600/40
                "
                            >
                                + Cadastrar Player
                            </button>
                        </div>

                        {/* search */}
                        <div className="mb-6">
                            <input
                                type="text"
                                placeholder="Buscar por nickname..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="
                  w-full rounded-lg p-3
                  bg-zinc-800/80 border border-zinc-700
                  outline-none focus:border-purple-500
                  transition-all
                "
                            />
                        </div>

                        {/* table */}
                        <div className="overflow-x-auto rounded-lg border border-white/5">
                            <table className="w-full text-left bg-zinc-950/60 border-collapse">
                                <thead className="bg-zinc-800/60 border-b border-zinc-700">
                                    <tr>
                                        {["Nickname", "Tier", "Steam", "VIP", "Ações"].map((h) => (
                                            <th
                                                key={h}
                                                className="py-4 px-4 text-center text-zinc-300 font-semibold tracking-wide"
                                            >
                                                {h}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>

                                <tbody>
                                    {filteredPlayers.map((p) => (
                                        <PlayerRow
                                            key={p._id}
                                            player={p}
                                            onEdit={handleEdit}
                                            onDelete={handleDelete}
                                        />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* modal */}
                <PlayerModal
                    open={modalOpen}
                    onClose={() => setModalOpen(false)}
                    onSaved={handleSaved}
                    initial={editing}
                />
            </div>
        </div>
    );
}
