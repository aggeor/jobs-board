import { ChangeEvent, FC, FormEvent } from 'react'

interface SearchBarProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onClear: () => void;
  placeholder?: string
}

export default function SearchBar ({
  onSubmit,
  value,
  onChange,
  onClear,
  placeholder = 'Search...',
}: SearchBarProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto flex w-full max-w-md flex-col items-center gap-3 rounded-xl border-2 border-[#EBEEF7] bg-white px-2 py-1 md:flex-row"
    >
      <div className="ml-4 flex w-full items-center gap-2">
        <input
          name="search"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full py-2 text-[#939AAD] outline-none"
        />
        {value && (
          <button
            type="button"
            onClick={onClear}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        )}
      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-md bg-[#00AAFF] px-4 py-1 text-lg text-white transition duration-300 ease-in-out hover:bg-[#037AB6] focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 md:w-auto"
      >
        Search
      </button>
    </form>
  )
}
