import { ElementType } from 'react';
import { DashItemIcon } from './DashItemIcon'

interface DashItemProps {
  title: string,
  icon: ElementType,
  totalStats: string,
}

export function DashItem({ icon: Icon, title, totalStats }: DashItemProps) {

  return (
    <div className="w-full h-32 bg-white flex shadow2  items-center px-4 py-4 justify-between rounded-lg">
      <div className='w-full h-full flex flex-col justify-between'>
        <div className="w-full flex items-end justify-end text-gray-500">
          <h1 className="text-md">
            {title}
          </h1>
        </div>
        <div className='w-full flex items-center justify-between'>
          <DashItemIcon icon={Icon} />
          <span className='font-bold text-zinc-500'>{totalStats}</span>
        </div>
      </div>
    </div>
  )
}
