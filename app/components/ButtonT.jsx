import Link from "next/link";

export default function ButtonT(){
    const url = "steam://rungameid/730//+connect 177.54.146.23:27108 +password rdl@2025@ +jointeam T";
    return (
        <Link href={url} className="bg-orange-600 hover:bg-orange-700 transition px-8 py-3 rounded-lg text-lg font-semibold shadow-lg m-auto">
            Entrar no time TR
        </Link>
    )
}