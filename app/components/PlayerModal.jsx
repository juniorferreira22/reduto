"use client";

import React, { useState } from "react";

export default function PlayerModal({ open, onClose, onSaved, initial }) {
    
    const [nickname, setNickname] = useState(initial?.nickname || "");
    const [tier, setTier] = useState(initial?.tier || 1);
    const [steamProfile, setSteamProfile] = useState(initial?.steamProfile || "");
    const [vip, setVip] = useState(initial?.vip || false);
    
    if (!open) return null;
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const player = {
            nickname,
            tier: Number(tier),
            steamProfile,
            vip,
        };

        let saved;

        if (initial?._id) {
            const res = await fetch("/api/players", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...player, _id: initial._id }),
            });
            saved = await res.json();
        } else {
            const res = await fetch("/api/players", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(player),
            });
            saved = await res.json();
        }

        onSaved(saved);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 w-full max-w-md shadow-2xl animate-scaleIn">

                <h3 className="text-2xl font-bold mb-6 text-center">
                    {initial ? "Editar Player" : "Cadastrar Player"}
                </h3>

                {/* formulario */}
                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* nick do jogador */}
                    <div className="flex flex-col">
                        <label className="mb-1 text-sm text-zinc-300">Nickname</label>
                        <input
                            className="bg-zinc-800 border border-zinc-700 rounded-lg p-2 outline-none focus:border-indigo-500"
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                            required
                        />
                    </div>

                    {/* tier do jogador (será calculado de acordo com o percentil das partidas em breve) */}
                    <div className="flex flex-col">
                        <label className="mb-1 text-sm text-zinc-300">Tier (1 a 5)</label>
                        <input
                            type="number"
                            min="1"
                            max="5"
                            className="bg-zinc-800 border border-zinc-700 rounded-lg p-2 outline-none focus:border-indigo-500"
                            value={tier}
                            onChange={(e) => setTier(e.target.value)}
                            required
                        />
                    </div>

                    {/* ativar ou desativar vip */}
                    <div className="flex flex-col">
                        <label className="mb-1 text-sm text-zinc-300">VIP?</label>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={vip}
                                onChange={(e) => setVip(e.target.checked)}
                            />
                            <div className="w-11 h-6 bg-zinc-700 rounded-full peer-checked:bg-indigo-600 transition-colors" />
                            <span className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-transform peer-checked:translate-x-5" />
                        </label>
                    </div>

                    {/* link da steam */}
                    <div className="flex flex-col">
                        <label className="mb-1 text-sm text-zinc-300">Link do Perfil Steam</label>
                        <input
                            className="bg-zinc-800 border border-zinc-700 rounded-lg p-2 outline-none focus:border-indigo-500"
                            value={steamProfile}
                            onChange={(e) => setSteamProfile(e.target.value)}
                        />
                    </div>

                    <div className="flex justify-end gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 rounded-lg bg-zinc-700 hover:bg-zinc-600 transition"
                        >
                            Cancelar
                        </button>

                        <button
                            type="submit"
                            className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition font-semibold shadow"
                        >
                            Salvar
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
}
