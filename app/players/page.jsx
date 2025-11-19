'use client';
import React, { useEffect, useState } from 'react';
import PlayerModal from '../components/PlayerModal';
import PlayerRow from '../components/PlayerRow';

export default function PlayersPage() {
    const [players, setPlayers] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [editing, setEditing] = useState(null);
    const [search, setSearch] = useState('');

    async function fetchPlayers() {
        const res = await fetch('/api/players');
        const data = await res.json();
        setPlayers(data);
    }

    const filteredPlayers = players.filter((player) =>
        player.nickname.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => { fetchPlayers(); }, []);

    function handleEdit(player) {
        setEditing(player);
        setModalOpen(true);
    }

    async function handleDelete(id) {
        if (!confirm('Excluir este player?')) return;
        await fetch(`/api/players?id=${id}`, { method: 'DELETE' });
        setPlayers(prev => prev.filter(p => p._id !== id));
    }

    function handleSaved(saved) {
        // atualizar a lista - substituir ou inserir
        setPlayers(prev => {
            const found = prev.find(p => p._id === saved._id);
            if (found) return prev.map(p => p._id === saved._id ? saved : p);
            return [saved, ...prev];
        });
    }

    return (
        <section className="bg-zinc-900/40 p-8 rounded-xl mt-16 shadow-xl">

            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold tracking-wide">Jogadores</h2>

                <button
                    onClick={() => {
                        setEditing(null);
                        setModalOpen(true);
                    }}
                    className="bg-red-600 hover:bg-red-900  transition-all px-5 py-2 rounded-lg font-semibold shadow-md"
                >
                    + Cadastrar Player
                </button>
            </div>

            {/* Pesquisa */}
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Buscar por nickname..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-2 outline-none focus:border-indigo-500"
                />
            </div>

            {/* Tabela */}
            <div className="overflow-x-auto rounded-lg border border-zinc-800">
                <table className="w-full text-left border-collapse bg-zinc-950/60">
                    <thead className="bg-zinc-800/60 border-b border-zinc-700">
                        <tr>
                            <th className="py-3 px-4 font-semibold text-zinc-300 text-center">Nickname</th>
                            <th className="py-3 px-4 font-semibold text-zinc-300 text-center">Tier</th>
                            <th className="py-3 px-4 font-semibold text-zinc-300 text-center">Perfil da Steam </th>
                            <th className="py-3 px-4 font-semibold text-zinc-300 text-center">VIP</th>
                            <th className="py-3 px-4 font-semibold text-zinc-300 text-center">Ações</th>
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

            {/* Modal */}
            <PlayerModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                onSaved={handleSaved}
                initial={editing}
            />
        </section>
    );
}
