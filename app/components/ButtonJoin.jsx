import Link from "next/link";

export default function ButtonJoin(){
    const url = "steam://connect/177.54.146.23:27108/rdl@2025@"
    return (
        <Link href={url} className="text-center m-auto w-full bg-blue-600/10 backdrop-blur-sm border border-cyan-600 hover:bg-blue-700 transition px-8 py-3 rounded-lg text-lg font-semibold shadow-lg">
            Entrar no servidor - CS2 💥🔫
        </Link>
    )
}