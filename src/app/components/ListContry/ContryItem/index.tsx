import {  } from "lucide-react"

interface ContryProps {
  contryName: string,
}

export function ContryItem({ contryName }: ContryProps) {
  return (
    <div className="w-full shadow2 h-14 rounded-lg bg-white border px-6 flex items-center justify-between">
      <span className="text-gray-500">
        {contryName}
      </span>
      <div className="w-max flex items-center gap-4 text-gray-500">
        <select>
          <option>Concorda icon</option>
          <option>Disconcorda icon</option>
          <option>Em abstenção icon</option>
        </select>
      </div>
    </div>
  )
}
