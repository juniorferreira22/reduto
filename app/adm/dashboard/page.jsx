import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyAdmin } from "@/app/lib/auth";
import DashboardPageClient from "./DashboardPageClient";

export default function DashboardPageClient() {
    const cookieStore = cookies();
    const token = cookieStore.get("admin_token")?.value;
    if (!verifyAdmin()) {
        return redirect("/login");
    }

    return <DashboardPageClient />;
}
