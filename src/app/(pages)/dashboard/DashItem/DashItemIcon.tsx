import { ElementType } from "react"

interface IconProps {
  icon: ElementType,
}

export function DashItemIcon({ icon: Icon }: IconProps) {
  return (
    <Icon size={25} className="text-main-500" />
  )
}


