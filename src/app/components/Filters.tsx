import { ChangeEvent, useState, useEffect } from "react";
import FilterCheckbox from "./Checkbox";


interface FilterOption {
    value: string;
    label: string;
}

const filterOptions: FilterOption[] = [
  { value: "full-time", label: "Full-time" },
  { value: "internship", label: "Internship" },
  { value: "contract", label: "Contract" },
];

interface FiltersProps {
  filters: string[];
  onFiltersChange: (updatedFilters: string[]) => void;
}

function Filters({ filters, onFiltersChange }: FiltersProps) {

  const [filterState, setFilterState] = useState(() =>
    filterOptions.reduce((state, option) => {
      state[option.value] = filters.includes(option.value);
      return state;
    }, {} as Record<string, boolean>)
  );

  const handleFilterChange = (filter: string, isChecked: boolean) => {
    const updatedFilters = isChecked
      ? [...filters, filter]
      : filters.filter((f) => f !== filter);
    onFiltersChange(updatedFilters);
  };

  const handleCheckboxChange = (filter: string) => (event: ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setFilterState((prevState) => ({ ...prevState, [filter]: isChecked }));
    handleFilterChange(filter, isChecked);
  };

  return (
    <div className="flex items-center m-4 justify-items-center">
        {filterOptions.map((option) => (
            <FilterCheckbox
                key={option.value}
                value={option.value}
                label={option.label}
                isChecked={filterState[option.value]}
                onChange={handleCheckboxChange(option.value)}
            />
        ))}
    </div>
  );
}

export default Filters;
