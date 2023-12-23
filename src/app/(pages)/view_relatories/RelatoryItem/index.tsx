import Link from "next/link"
import { File, Download, Eye } from "lucide-react"

export function RelatoryItem() {
  return (
    <div className="w-full shadow2 h-14 rounded-lg bg-white border px-6 flex items-center justify-between">
      <File size={25} className="text-gray-500" />
      <span className="text-gray-500">
        12 de abril de 2023
      </span>
      <div className="w-max flex items-center gap-4 text-gray-500">
        <Link href="">
          <Eye size={18} />
        </Link>
        <Link href="">
          <Download size={18} />
        </Link>
      </div>
    </div>
  )
}
