import Link from "next/link";

export default function ButtonCT(){
     const url = "steam://rungameid/730//+connect 177.54.146.23:27108 +password rdl@2025@ +jointeam CT";

    return (
        <Link href={url} className="bg-indigo-600 hover:bg-indigo-700 transition px-8 py-3 rounded-lg text-lg font-semibold shadow-lg m-auto">
            Entrar no time CT
        </Link>
    )
}