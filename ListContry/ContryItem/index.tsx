import { Check, X, Minus } from "lucide-react"

interface ContryProps {
  contryName: string,
}

const Icons = [
  {
    state: "Em abstenção",
    icon: <Minus className="text-amber-400" />
  },
  {
    state: "Concorda",
    icon: <Check className="text-emerald-600" />
  },
  {
    state: "Discorda",
    icon: <X className="text-red-600" />
  },
];

export function ContryItem({ contryName }: ContryProps) {
  return (
    <div className="w-full shadow2 h-14 rounded-lg bg-white border px-6 flex items-center justify-between ">
      <span className="text-gray-500">
        {contryName}
      </span>
      <div className="w-max flex items-center gap-4 text-gray-500">
        <select
          className='bg-gray-50 border uppercase border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:ring-primary-600 focus:border-primary-600 block w-full p-1 focus:border-violet-700'
        >
          {Icons.map(({ icon, state }) => (
            <option key={state}>
              <span className="flex items-center gap-2 justify-normal border">
                {state}
              </span>
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
