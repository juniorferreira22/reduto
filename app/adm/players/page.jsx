import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyAdmin } from "@/app/lib/auth";
import PlayersPageClient from "./PlayersPageClient";

export default async function PlayersPage() {
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_token")?.value;
    if (!await verifyAdmin(token)) {
        return redirect("/login");
    }

    return <PlayersPageClient />;
}
