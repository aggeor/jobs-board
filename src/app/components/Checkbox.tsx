import { ChangeEvent } from "react";


export default function FilterCheckbox ({
    value,
    label,
    isChecked,
    onChange,
  }: {
    value: string;
    label: string;
    isChecked: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  }) {
    return (
        <div className="flex items-center">
        <input
            id={`${value}-checkbox`}
            type="checkbox"
            checked={isChecked}
            onChange={onChange}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
            htmlFor={`${value}-checkbox`}
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
            {label}
        </label>
        </div>
    )
  }