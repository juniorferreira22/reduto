import Link from "next/link";
import InteractiveLogo from "./components/InteractiveLogo";
import Image from "next/image";

export const metadata = { title: "Reduto dos Loucos" };

export default function Home() {
  return (
    <main className="min-h-screen text-white py-16 px-4">
      <div className="max-w-[75vw] mx-auto">

        <section className="flex flex-row justify-around items-center text-center mb-16 h-[75vh] gap-30">

          <div className="flex gap-3 flex-col w-[25vw]">
            <p className="text-zinc-300 text-sm leading-relaxed text-justify mt-6">
              A comunidade onde estratégia, loucura e amizade se juntam! <br />
              Se cadastre no nosso Discord agora mesmo clicando no botão abaixo!
            </p>

            <Link
              href="https://discord.gg/q6WUSGZpSd"
              target="_blank"
              className="mt-8 px-7 py-3 rounded-xl font-semibold text-md
              bg-linear-to-r from-indigo-600 to-purple-600 hover:opacity-90 hover:scale-110 transition
              shadow-xl shadow-indigo-600/30"
            >
              🚀 Entre no nosso Discord!
            </Link>
          </div>
          <div>
            <InteractiveLogo/>
          </div>
        </section>

          <div className="fixed left-0 top-50">
            Em breve
          </div>
        <div className="grid gap-3 md:grid-cols-2">

          {/* O Reduto */}
          <section
            className="rounded-2xl p-8 border border-white/5 bg-white/5 backdrop-blur-xl
              shadow-[0_0_2.1875rem_rgba(255,255,255,0.06)]
              hover:shadow-[0_0_3.75rem_rgba(255,255,255,0.08)]
              transition-all duration-300 gap-2 flex flex-col"
          >
            <Image className="rounded-lg mb-6" src={"/reduto-wp.png"} width={450} height={200}></Image>
            <h2 className="text-[1.875rem] font-semibold mb-5">👾 O Reduto</h2>
            <p className="text-zinc-300 leading-relaxed">
              Estamos desde 2020 reunindo jogadores que não se levam a sério. Se você gosta de resenha, jogabilidade for-fun e boas risadas, achou o lugar certo!
              <br /><br />
              Aqui você encontra uma equipe inteira igualmente fracassada para rir dos seus clutches perdidos, HSs cagados e NUNCA vamos deixar você para baixo (até porque já estamos lá te esperando).
              <br /><br />
              No nosso GTA RP e CS2, quando você der TK, capotar num poste, perder uma corrida contra uma lambreta ou perder um round fácil, não se preocupe:
              a gente finge que foi planejamento estratégico.
            </p>
          </section>

          {/* GTARP */}
          <section
            className="rounded-2xl p-8 border border-white/5 bg-white/5 backdrop-blur-xl
              shadow-[0_0_2.1875rem_rgba(255,255,255,0.06)]
              hover:shadow-[0_0_3.75rem_rgba(255,255,255,0.08)]
              transition-all duration-300"
          >
            <Image className="rounded-lg mb-6" src={"/rp.jpg"} width={450} height={200}></Image>
            <h3 className="text-[1.875rem] font-semibold mb-5">🚓 GTA RP</h3>
            <p className="text-zinc-300 leading-relaxed">
              Aqui o bom senso pegou férias e nunca mais voltou.
              <br /><br />
              Personagens malucos, situações imprevisíveis e muita zoeira.
              <br /><br />
              Eventos? Completo caos.
              Interações? Provavelmente você vai parar na prisão.
              Final feliz? Raramente acontece, mas quando acontece é bem perto do reset.
              <br /><br />
              Vem viver histórias insanas — seja o ladrão… ou a vítima... Ou sei lá, um mendigo, tanto faz!
              <br />
              <br />
              O importante é se divertir.
            </p>
          </section>

          {/* CS2 */}
          <section
            className="flex flex-col gap-4 rounded-2xl p-8 border border-white/5 bg-white/5 backdrop-blur-xl
              shadow-[0_0_2.1875rem_rgba(255,255,255,0.06)]
              hover:shadow-[0_0_3.75rem_rgba(255,255,255,0.08)]
              transition-all duration-300 md:col-span-2"
          >
            <div>
              <h3 className="text-center text-[1.875rem] font-semibold mb-5">🔫 Counter-Strike 2</h3>
            </div>
            <div className="flex content-evenly gap-7 items-center">
              <span>
                <Image className="rounded-lg mb-6" src={"/howl.png"} width={1000} height={200}></Image>
              </span>
              <span>
                <p className="text-zinc-300 leading-relaxed">
                  <strong>Perde ELO só de abrir o jogo? Bem-vindo ao lar!</strong>
                  <br /><br />
                  Mix equilibrado, treinos e análises feitas pelos melhores noobs do planeta, tudo para provar
                  que seu clutch foi lindo mesmo depois de morrer nos 3 primeiros segundos.
                  <br /><br />
                  Nosso sorteio de times é tão bom que coloca AWP no time ruim
                  contra quem joga com o monitor desligado… e ainda ganha!
                  <br /><br />
                  Vem sofrer com a gente! O VAC é livre, o rage não, tilt é coisa de pro-player e você não é bom.
                </p>
              </span>
            </div>

            <div>
              <h3 className=" my-4 text-center text-[1.875rem] font-semibold mb-5">🎟️ NOSSA MODERAÇÃO 🎟️</h3>
            </div>

            <p className="text-zinc-300 leading-relaxed">
              Nossa equipe de moderação é formada pelos jogadores mais pacientes e compreensivos que você já viu.
              Eles entendem que, às vezes, a loucura toma conta e estão sempre prontos para ajudar a manter o ambiente divertido e acolhedor para todos.
              <br /><br />
              Seja você um novato ou um veterano, nossa moderação está aqui para garantir que todos possam aproveitar ao máximo a experiência no Reduto.
            </p>
            <p>
              Contamos com um canal específico para denúncias e sugestões anônimas dentro do nosso discord, onde você pode compartilhar suas preocupações ou ideias para melhorar ainda mais nossa comunidade.
            </p>

            <div>
              <h3 className=" my-4 text-center text-[1.875rem] font-semibold mb-5">🎭 O SORTEIO DE TIMES 🎭</h3>
            </div>
            <p className="text-zinc-300 leading-relaxed">
              Nosso sistema de sorteio de times é tão justo que até o mais azarado dos jogadores sente que tem uma chance de vencer.
              <br /><br />
              Ele leva em consideração o desempenho passado, o humor do dia e até a cor da camisa que você está vestindo (ok, talvez não isso).
              <br /><br />
              O resultado? Times equilibrados que garantem partidas emocionantes e cheias de reviravoltas. Acesse ele clickando abaixo:
              <br />
            </p>
            <Link href="/shuffle" target="_blank" className="mt-4 text-center px-7 py-5 rounded-xl font-semibold text-lg bg-linear-to-r from-indigo-600 to-purple-600 hover:opacity-90 hover:scale-102 transition shadow-xl shadow-indigo-600/30">Acessar o sorteador de times 🎲</Link>
          </section>

        </div>
      </div>
    </main>
  );
}
