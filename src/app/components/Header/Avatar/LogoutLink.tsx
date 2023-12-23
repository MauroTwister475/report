import Link from "next/link"
import { LogOut } from "lucide-react";

export function LogoutLink() {
  return (
    <Link href="/" className="w-ful flex items-center gap-6">
      <LogOut className="w-6 text-main-500" />
      <span className="text-base">Sair</span>
    </Link>
  )
}