import Link from "next/link";
import InteractiveLogo from "./components/InteractiveLogo";

export const metadata = { title: "Reduto dos Loucos" };

export default function Home() {
  return (
    <main className="min-h-screen text-white py-16 px-4">
      <div className="max-w-5xl mx-auto">

        {/* hero */}
        <section className="flex flex-col items-center text-center mb-20">

          <InteractiveLogo />

          <p className="text-zinc-300 text-lg md:text-xl max-w-140 leading-relaxed mt-6">
            A comunidade onde estratégia, loucura e amizade se juntam! <br />
            Se cadastre no nosso Discord agora mesmo clicando no botão abaixo!
          </p>

          <Link
            href="https://discord.gg/q6WUSGZpSd"
            target="_blank"
            className="mt-8 px-7 py-3 rounded-xl font-semibold text-lg
              bg-linear-to-r from-indigo-600 to-purple-600 hover:opacity-90 hover:scale-110 transition
              shadow-xl shadow-indigo-600/30"
          >
            🚀 Entre no nosso Discord!
          </Link>
        </section>

        <div className="grid gap-3 md:grid-cols-2">

          {/* O Reduto */}
          <section
            className="rounded-2xl p-8 border border-white/5 bg-white/5 backdrop-blur-xl
              shadow-[0_0_2.1875rem_rgba(255,255,255,0.06)]
              hover:shadow-[0_0_3.75rem_rgba(255,255,255,0.08)]
              transition-all duration-300"
          >
            <h2 className="text-[1.875rem] font-semibold mb-5">🏴 O Reduto</h2>
            <p className="text-zinc-300 leading-relaxed">
              Cansado de ser ruim? A gente também — a diferença é que você é ruim sozinho
              e a gente é ruim junto!
              <br /><br />
              Sonha em ser um inútil de respeito? Aqui você encontra uma equipe inteira
              igualmente fracassada para rir da sua tragédia digital.
              <br /><br />
              No nosso GTA RP e CS2, quando você der TK ou capotar num poste,
              a gente finge que foi planejamento estratégico.
              <br /><br />
              Entra, seu noob (em potencial)!
            </p>
          </section>

          {/* GTARP */}
          <section
            className="rounded-2xl p-8 border border-white/5 bg-white/5 backdrop-blur-xl
              shadow-[0_0_2.1875rem_rgba(255,255,255,0.06)]
              hover:shadow-[0_0_3.75rem_rgba(255,255,255,0.08)]
              transition-all duration-300"
          >
            <h3 className="text-[1.875rem] font-semibold mb-5">🚓 GTA RP</h3>
            <p className="text-zinc-300 leading-relaxed">
              Aqui o bom senso pegou férias e nunca mais voltou.
              <br /><br />
              Eventos? Caos.
              Interações? Prisão.
              Final feliz? Raramente.
              <br /><br />
              Vem viver histórias insanas — seja o ladrão… ou a vítima.
            </p>
          </section>

          {/* CS2 */}
          <section
            className="rounded-2xl p-8 border border-white/5 bg-white/5 backdrop-blur-xl
              shadow-[0_0_2.1875rem_rgba(255,255,255,0.06)]
              hover:shadow-[0_0_3.75rem_rgba(255,255,255,0.08)]
              transition-all duration-300 md:col-span-2"
          >
            <h3 className="text-[1.875rem] font-semibold mb-5">🔫 Counter-Strike 2</h3>
            <p className="text-zinc-300 leading-relaxed">
              Perde ELO só de abrir o jogo? Bem-vindo ao lar.
              <br /><br />
              Mix equilibrado, treinos e análises — tudo para provar
              que seu clutch foi lindo mesmo depois de morrer nos 3 primeiros segundos.
              <br /><br />
              Nosso sorteio de times é tão bom que coloca AWP no time ruim
              contra quem joga com o monitor desligado… e ainda ganha.
              <br /><br />
              Vem sofrer — o VAC é livre, o rage não.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
