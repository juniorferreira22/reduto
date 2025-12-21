"use client";

import { useState, useEffect } from "react";
import { Search, ChevronDown, ChevronUp, Loader2 } from "lucide-react";

export default function CS2BlogPage() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [expandedPosts, setExpandedPosts] = useState(new Set());

    const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdbNc8RmZQ2PEKq6ZYPlCxZcqiG-It3Jvhoi3EESjS7u5IxHSEGHsN7Ez1OjMotIRKw9AkFC5wRO-3/pub?gid=833973635&single=true&output=csv";

    useEffect(() => {
        fetchPosts();
    }, []);

    async function fetchPosts() {
        try {
            setLoading(true);
            const response = await fetch(SHEET_CSV_URL);
            const csvText = await response.text();

            
            const rows = csvText.split('\n').slice(1); // Remove o header
            const parsedPosts = rows
                .filter(row => row.trim()) // Remove as linhas vazias
                .map((row, index) => {
                    const columns = row.split(',');
                    return {
                        id: index + 1,
                        title: columns[1]?.trim() || '',
                        preview: columns[2]?.trim() || '',
                        fullContent: columns[3]?.trim() || ''
                    };
                })
                .filter(post => post.title);

            setPosts(parsedPosts);
        } catch (error) {
            console.error('Erro ao carregar posts:', error);
        } finally {
            setLoading(false);
        }
    }

    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.preview.toLowerCase().includes(search.toLowerCase())
    );

    const toggleExpand = (id) => {
        setExpandedPosts((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    return (
        <div className="bg-black text-white min-h-screen overflow-x-hidden">

            <div className="absolute inset-0 bg-linear-to-b from-orange-900/20 via-black to-black" />

            <div className="absolute inset-0 opacity-20">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
              linear-linear(rgba(251,146,60,.25) 1px, transparent 1px),
              linear-linear(90deg, rgba(251,146,60,.25) 1px, transparent 1px)
            `,
                        backgroundSize: "50px 50px",
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

                {/* Title */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
                        <span className="bg-linear-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                            BLOG CS2
                        </span>
                    </h1>
                    <p className="text-zinc-400 text-lg">
                        Dicas, estratégias e conteúdos para melhorar seu jogo
                    </p>
                </div>

                {/* Search Bar */}
                <div className="mb-12 max-w-2xl mx-auto">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-linear-to-r from-orange-600/20 to-red-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                        <div className="relative bg-zinc-900/50 backdrop-blur-xl rounded-xl border border-white/5 p-4 flex items-center gap-3">
                            <Search className="text-zinc-400" size={20} />
                            <input
                                type="text"
                                placeholder="Pesquisar posts..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="
                  flex-1 bg-transparent outline-none
                  text-white placeholder-zinc-500
                "
                            />
                        </div>
                    </div>
                </div>

                {/* Loading State */}
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-24">
                        <Loader2 className="animate-spin text-orange-400 mb-4" size={48} />
                        <p className="text-zinc-400 text-lg">Carregando posts...</p>
                    </div>
                ) : (
                    <>
                        {/* Posts Grid */}
                        <div className="space-y-6">
                            {filteredPosts.length > 0 ? (
                                filteredPosts.map((post) => {
                                    const isExpanded = expandedPosts.has(post.id);

                                    return (
                                        <article key={post.id} className="relative group">
                                            <div className="absolute inset-0 bg-linear-to-r from-orange-600/20 to-red-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                                            <div className="relative bg-zinc-900/50 backdrop-blur-xl rounded-xl border border-white/5 p-8 shadow-2xl transition-all duration-300">

                                                {/* Title */}
                                                <h2 className="text-2xl md:text-3xl font-black mb-4 flex items-center gap-3">
                                                    <span className="text-orange-400">🔫</span>
                                                    {post.title}
                                                </h2>

                                                {/* Content */}
                                                <div className="text-zinc-300 leading-relaxed mb-6">
                                                    <p className={`transition-all duration-300 ${isExpanded ? '' : 'line-clamp-3'}`}>
                                                        {isExpanded ? post.fullContent : post.preview}
                                                    </p>
                                                </div>

                                                {/* Toggle Button */}
                                                <button
                                                    onClick={() => toggleExpand(post.id)}
                                                    className="
                            inline-flex items-center gap-2
                            px-6 py-3 rounded-lg font-semibold
                            bg-linear-to-r from-orange-600 to-red-600
                            hover:from-orange-500 hover:to-red-500
                            transition-all duration-300
                            shadow-lg shadow-orange-600/30
                            hover:scale-105 active:scale-95
                          "
                                                >
                                                    {isExpanded ? (
                                                        <>
                                                            Ver Menos
                                                            <ChevronUp size={20} />
                                                        </>
                                                    ) : (
                                                        <>
                                                            Ver Mais
                                                            <ChevronDown size={20} />
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                        </article>
                                    );
                                })
                            ) : (
                                <div className="text-center py-16">
                                    <p className="text-zinc-400 text-xl">
                                        Nenhum post encontrado para "{search}"
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Footer Info */}
                        <div className="mt-16 text-center">
                            <p className="text-zinc-500 text-sm">
                                {filteredPosts.length} {filteredPosts.length === 1 ? 'post encontrado' : 'posts encontrados'}
                            </p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}