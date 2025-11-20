import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyAdmin } from "../lib/auth";
import PlayersPageClient from "./PlayersPageClient";

export default function PlayersPage() {
    const cookieStore = cookies();
    const token = cookieStore.get("admin_token")?.value;

    console.log("TOKEN NO SERVER:", token);
    console.log("VALIDAÇÃO:", verifyAdmin(token));

    if (!verifyAdmin(token)) {
        return redirect("/login");
    }

    return <PlayersPageClient />;
}
