import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyAdmin } from "@/app/lib/auth";
import PlayersPageClient from "./PlayersPageClient";

export default function PlayersPage() {
    const cookieStore = cookies();
    const token = cookieStore.get("admin_token")?.value;
    // verifica a token do jwt e se estiver vazia redireciona para a página de login
    if (!verifyAdmin()) {
        return redirect("/login");
    }

    return <PlayersPageClient />;
}
