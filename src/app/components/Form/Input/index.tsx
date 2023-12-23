import { ComponentProps } from "react";

type InputProps = ComponentProps<"input"> & {
  id?: string,
  type: string,
  label?: string,
  name?: string,
}

// type NameValues = 'sigla' | 'classe' | 'curso' | 'periodo';

export function Input({ type, id, label, name, ...restProps }: InputProps) {

  return (
    <div className="w-full">
      <label htmlFor={id} className="leading-8 text-zinc-700">
        {label}
      </label>
      <input
        id={id}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 focus:border-violet-700'
        type={type}
        {...restProps}
      />
    </div>
  );
}


