'use client'

import { useState, useEffect } from 'react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        
        <div 
          className="absolute inset-0 bg-linear-to-b from-purple-900/20 via-black to-black"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        
       
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-linear(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                             linear-linear(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollY * 0.3}px)`
          }} />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <h1 className="text-7xl md:text-9xl font-black mb-8 tracking-tight">
            <span className="bg-linear-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              REDUTO
            </span>
            <br />
            <span className="text-white">DOS LOUCOS</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto font-light">
            A comunidade onde estratégia, loucura e amizade se juntam
          </p>

          <a
            href="https://discord.gg/q6WUSGZpSd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 text-lg font-bold bg-linear-to-r from-purple-600 to-indigo-600 rounded-full hover:scale-105 transition-transform duration-300 shadow-2xl shadow-purple-600/50"
          >
            🚀 ENTRE NO DISCORD
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            EXPLORE NOSSA
            <br />
            <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              COMUNIDADE
            </span>
          </h2>
        </div>

        {/* O Reduto - Full width */}
        <section className="mb-12 relative group">
          <div className="absolute inset-0 bg-linear-to-r from-purple-600/20 to-pink-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
          
          <div className="relative bg-zinc-900/50 backdrop-blur-xl rounded-xl overflow-hidden border border-white/5">
            <div className="aspect-21/9 relative overflow-hidden">
              <img 
                src="/reduto-wp.png" 
                alt="Reduto"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
            </div>
            
            <div className="p-12 md:p-16">
              <h3 className="text-4xl md:text-5xl font-black mb-8 flex items-center gap-4">
                <span className="text-4xl">👾</span>
                O REDUTO
              </h3>
              
              <div className="text-zinc-300 text-lg leading-relaxed space-y-6 max-w-4xl">
                <p>
                  Estamos desde 2020 reunindo jogadores que não se levam a sério. Se você gosta de resenha, 
                  jogabilidade for-fun e boas risadas, achou o lugar certo!
                </p>
                <p>
                  Aqui você encontra uma equipe inteira igualmente fracassada para rir dos seus clutches perdidos, 
                  HSs cagados e NUNCA vamos deixar você para baixo (até porque já estamos lá te esperando).
                </p>
                <p>
                  No nosso GTA RP e CS2, quando você der TK, capotar num poste, perder uma corrida contra uma lambreta 
                  ou perder um round fácil, não se preocupe: a gente finge que foi planejamento estratégico.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GTA RP e CS2 - Two columns */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* GTA RP */}
          <section className="relative group">
            <div className="absolute inset-0 bg-linear-to-r from-yellow-600/20 to-orange-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
            
            <div className="relative bg-zinc-900/50 backdrop-blur-xl rounded-xl overflow-hidden border border-white/5 h-full">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src="/rp.jpg" 
                  alt="GTA RP"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-zinc-900/30 to-transparent" />
              </div>
              
              <div className="p-8">
                <h3 className="text-3xl font-black mb-6 flex items-center gap-3">
                  <span className="text-3xl">🚓</span>
                  GTA RP
                </h3>
                
                <div className="text-zinc-300 leading-relaxed space-y-4">
                  <p>Aqui o bom senso pegou férias e nunca mais voltou.</p>
                  <p>Personagens malucos, situações imprevisíveis e muita zoeira.</p>
                  <p>
                    Eventos? Completo caos.<br />
                    Interações? Provavelmente você vai parar na prisão.<br />
                    Final feliz? Raramente acontece, mas quando acontece é bem perto do reset.
                  </p>
                  <p>
                    Vem viver histórias insanas — seja o ladrão… ou a vítima... Ou sei lá, um mendigo, tanto faz!
                  </p>
                  <p className="font-semibold text-purple-400">O importante é se divertir.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CS2 Preview */}
          <section className="relative group">
            <div className="absolute inset-0 bg-linear-to-r from-orange-600/20 to-red-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
            
            <div className="relative bg-zinc-900/50 backdrop-blur-xl rounded-xl overflow-hidden border border-white/5 h-full">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src="/howl.png" 
                  alt="CS2"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-zinc-900/30 to-transparent" />
              </div>
              
              <div className="p-8">
                <h3 className="text-3xl font-black mb-6 flex items-center gap-3">
                  <span className="text-3xl">🔫</span>
                  COUNTER-STRIKE 2
                </h3>
                
                <div className="text-zinc-300 leading-relaxed space-y-4">
                  <p className="font-bold text-white">Perde ELO só de abrir o jogo? Bem-vindo ao lar!</p>
                  <p>
                    Mix equilibrado, treinos e análises feitas pelos melhores noobs do planeta, tudo para provar 
                    que seu clutch foi lindo mesmo depois de morrer nos 3 primeiros segundos.
                  </p>
                  <p>
                    Nosso sorteio de times é tão bom que coloca AWP no time ruim contra quem joga com o monitor 
                    desligado… e ainda ganha!
                  </p>
                  <p className="text-purple-400 font-semibold">
                    Vem sofrer com a gente! O VAC é livre, o rage não, tilt é coisa de pro-player e você não é bom.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Moderação Section */}
        <section className="mb-12 relative group">
          <div className="absolute inset-0 bg-linear-to-r from-blue-600/20 to-cyan-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
          
          <div className="relative bg-zinc-900/50 backdrop-blur-xl rounded-xl p-12 md:p-16 border border-white/5">
            <h3 className="text-4xl md:text-5xl font-black mb-8 text-center">
              <span className="text-3xl">🎟️</span> NOSSA MODERAÇÃO <span className="text-3xl">🎟️</span>
            </h3>
            
            <div className="text-zinc-300 text-lg leading-relaxed space-y-6 max-w-4xl mx-auto">
              <p>
                Nossa equipe de moderação é formada pelos jogadores mais pacientes e compreensivos que você já viu. 
                Eles entendem que, às vezes, a loucura toma conta e estão sempre prontos para ajudar a manter o 
                ambiente divertido e acolhedor para todos.
              </p>
              <p>
                Seja você um novato ou um veterano, nossa moderação está aqui para garantir que todos possam 
                aproveitar ao máximo a experiência no Reduto.
              </p>
              <p>
                Contamos com um canal específico para denúncias e sugestões anônimas dentro do nosso discord, 
                onde você pode compartilhar suas preocupações ou ideias para melhorar ainda mais nossa comunidade.
              </p>
            </div>
          </div>
        </section>

        {/* Sorteio de Times */}
        <section className="mb-12 relative group">
          <div className="absolute inset-0 bg-linear-to-r from-purple-600/20 to-indigo-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
          
          <div className="relative bg-zinc-900/50 backdrop-blur-xl rounded-xl p-12 md:p-16 border border-white/5">
            <h3 className="text-4xl md:text-5xl font-black mb-8 text-center">
              <span className="text-3xl">🎭</span> O SORTEIO DE TIMES <span className="text-3xl">🎭</span>
            </h3>
            
            <div className="text-zinc-300 text-lg leading-relaxed space-y-6 max-w-4xl mx-auto mb-12">
              <p>
                Nosso sistema de sorteio de times é tão justo que até o mais azarado dos jogadores sente que tem 
                uma chance de vencer.
              </p>
              <p>
                Ele leva em consideração o desempenho passado, o humor do dia e até a cor da camisa que você está 
                vestindo (ok, talvez não isso).
              </p>
              <p>
                O resultado? Times equilibrados que garantem partidas emocionantes e cheias de reviravoltas.
              </p>
            </div>

            <div className="text-center">
              <a
                href="/shuffle"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-6 text-xl font-bold bg-linear-to-r from-purple-600 to-indigo-600 rounded-full hover:scale-105 transition-transform duration-300 shadow-2xl shadow-purple-600/50"
              >
                🎲 ACESSAR O SORTEADOR DE TIMES
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}