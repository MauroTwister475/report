import { ChangeEvent, ComponentProps } from "react";

type SelectProps = ComponentProps<"select"> & {
  id: string;
  label?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export function Select({ id, onChange, label }: SelectProps) {
  return (
    <div className="w-full">
      <label htmlFor={id} className="text-white">
        {label}
      </label>
      <select
        id={id}
        onChange={onChange}
        className='bg-gray-50 border uppercase border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 focus:border-violet-700'
      >
        <option>Acção</option>
        <option>Arcada</option>
        <option>Aventura</option>
        <option>Battle Royale</option>
      </select>
    </div>
  );
}
