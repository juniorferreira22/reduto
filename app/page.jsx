import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Reduto dos Loucos" };

export default function Home() {
  return (
    <main className="min-h-screen text-white py-20 px-2">
      <div className="max-w-8xl mx-auto">

        {/* hero section */}
        <section className="text-center mb-24">
          <Image src={'/logo.png'} height={'600'} width={'600'} alt={'reduto dos loucos'} className="m-auto mb-16"></Image>
          <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto">
            A comunidade onde estratégia, caos e amizade se encontram! Nos encontre no GTA RP e no CS2 agora mesmo!
          </p>

          <Link
            href={"https://discord.gg/q6WUSGZpSd"}
            target={"_blank"}
            className="inline-block mt-8 bg-indigo-600 hover:bg-indigo-700 transition px-8 py-3 rounded-lg text-lg font-semibold shadow-lg"
          >
            Entrar no Discord
          </Link>
        </section>

        <div className="grid md:grid-cols-2 gap-4">

          {/* about */}
          <section className="bg-[url(/logo.png)] bg-fixed backdrop-blur-sm rounded-xl p-8 border border-zinc-700 shadow-xl">
            <section className="backdrop-blur-sm backdrop-brightness-40 rounded-md p-4">
              <h2 className="text-3xl font-bold mb-4 ">O reduto</h2>
              <p className="text-zinc-300 leading-relaxed">
                Cansado de ser ruim? A gente também, mas a diferença é que você é ruim sozinho e a gente é ruim junto!
                <br /><br />Se você tem a ambição de ser um inútil de marca maior, mas precisa de amigos igualmente fracassados para rir da sua desgraça, este é o seu lugar.
                <br /><br />Entra logo no nosso servidor de GTA RP e CS2! Venha falhar conosco! Pelo menos aqui, quando você der friendly fire ou capotar o carro num poste, a gente finge que foi de propósito.
                <br /> <br />Entra, seu noob (em potencial)!
              </p>
            </section>
          </section>

          {/* gta rp */}
          <section className="bg-[url(/rp.jpg)] bg-fixed rounded-xl p-8 border border-zinc-700 shadow-xl">
            <section className="backdrop-blur-sm backdrop-brightness-40 rounded-md p-4">
              <h3 className="text-2xl font-bold mb-4">GTA RP</h3>
              <p className="text-zinc-300 leading-relaxed">
                Chega de história de 'super-herói' careta!<br />
                Nossos servidores são o hospício onde o bom senso foi de férias e não volta nunca mais.<br />
                <br />
                Venha participar dos nossos 'eventos' (que quase sempre terminam em caos e treta generalizada) e, o mais importante, venha 'viver histórias insanas', que geralmente envolvem você sendo roubado por um entregador de pizza, atropelando o delegado e terminando na prisão por roubar um picolé.<br />
                Se a sua vida real é chata, cola pra estragar a nossa junto!<br />
                <br />
                Conheça nossos servidores e vire o criminoso que você nasceu pra ser! (Ou o coitado que vai ser roubado por ele, você decide.)
              </p>
            </section>
          </section>

          {/* CS2 */}
          <section className="bg-[url(/howl.png)] bg-fixed rounded-xl p-8 border border-zinc-700 shadow-xl md:col-span-2">
            <section className="backdrop-blur-sm backdrop-brightness-40 rounded-md p-4">
              <h3 className="text-2xl font-bold mb-4">CS2</h3>
              <p className="text-zinc-300 leading-relaxed">

                Você já perdeu tanto ELO que tem medo de abrir o placar? Perfeito! Venha sofrer nas nossas Partidas Ranqueadas e descobrir que não importa o quanto você treine, a culpa nunca é sua, é sempre do Mix mal-sorteado!<br />
                <br />
                Nossos Treinos vão te ensinar a ser um clutch lendário (ou a morrer nos primeiros 3 segundos, 50/50). Temos até Análises para provar cientificamente que seu headshot foi lindo, mesmo que você tenha morrido logo depois.<br />
                <br />
                E a melhor parte: nossa ferramenta EXCLUSIVA de Sorteio Balanceado de Times! Ela é tão perfeita que garante que a gente se zoa por termos colocado o time ruim com o AWP que só acerta o chão contra o time que joga com o monitor desligado e ainda assim ganha.<br />
                <br />
                Entra logo e para de ser lurker na vida! O VAC é livre, o rage não!<br />
              </p>
            </section>
          </section>
        </div>
      </div>
    </main>
  );
}
