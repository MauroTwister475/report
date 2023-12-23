"use client"
import { ChangeEvent, ComponentProps, ReactNode, useState } from "react";

type InputProps = ComponentProps<"input"> & {
  type: string,
  icon: ReactNode,
  placeholder?: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
};

export function InputIcon({ icon: Icon, type, placeholder, onChange, ...restProps }: InputProps) {
  const [border, setBorder] = useState(false);
  
  return (
    <div className={`${border && 'border-violet-700' } w-full border border-gray-300 flex transition-colors items-center rounded-lg justify-center`}>
      <span className="w-8 flex items-center justify-center text-gray-900 ml-1 p-2">
        {Icon}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onMouseEnter={() => setBorder(true)}
        onMouseOut={() => setBorder(false)}
        className='rounded-r-lg text-gray-900 text-sm outline-none focus:ring-primary-500 focus:border-violet-700 block w-full py-3 px-4'
        {...restProps}
      />
    </div>
  );
}