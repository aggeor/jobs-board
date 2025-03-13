import { ChangeEvent, useState, useEffect, FormEvent } from "react";
import FilterCheckbox from "./Checkbox";
import SearchBar from "./Searchbar";


interface FilterOption {
    value: string;
    label: string;
}

const jobTypeOptions: FilterOption[] = [
  { value: "full-time", label: "Full-time" },
  { value: "internship", label: "Internship" },
  { value: "contract", label: "Contract" },
];

const jobIndustryOptions: FilterOption[] = [
    { value: "Software Engineering", label: "Software Engineering" },
    { value: "Content &amp; Editorial", label: "Content & Editorial" },
    { value: "DevOps &amp; Infrastructure", label: "DevOps & Infrastructure" },
    { value: "Sales", label: "Sales" },
    { value: "Technical Support", label: "Technical Support" },
    { value: "Finance &amp; Accounting", label: "Finance & Accounting" },
    { value: "Marketing &amp; Sales", label: "Marketing & Sales" },
    { value: "Customer Success", label: "Customer Success" },
    { value: "Data Science &amp; Analytics", label: "Data Science & Analytics" },
    { value: "Web &amp; App Design", label: "Web & App Design" },
    { value: "HR &amp; Recruiting", label: "HR & Recruiting" },
    { value: "Legal &amp; Compliance", label: "Legal & Compliance" },
    { value: "Business Development", label: "Business Development" },
  ];

interface FiltersProps {
  filters: string[];
  onFiltersChange: (updatedFilters: string[]) => void;
}

function Filters({ filters, onFiltersChange }: FiltersProps) {

  const [input, setInput] = useState("");
  const [jobTypesFilterState, setJobTypesFilterState] = useState(() =>
    jobTypeOptions.reduce((state, option) => {
      state[option.value] = filters.includes(option.value);
      return state;
    }, {} as Record<string, boolean>)
  );

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  
  const handleSearchClear = () => {
    setInput("");
    onFiltersChange([]);
  };

    const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!input.trim()) {
            return;
        }
        
        const updatedFilters = input !== ""
        ? [...filters, input]
        : filters.filter((f) => f !== input);
        onFiltersChange(updatedFilters);
    };

  const [jobIndustryFilterState, setJobIndustryFilterState] = useState(() =>
    jobIndustryOptions.reduce((state, option) => {
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

  const handleJobTypeChange = (filter: string) => (event: ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setJobTypesFilterState((prevState) => ({ ...prevState, [filter]: isChecked }));
    handleFilterChange(filter, isChecked);
  };

  const handleJobIndustryChange = (filter: string) => (event: ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setJobIndustryFilterState((prevState) => ({ ...prevState, [filter]: isChecked }));
    handleFilterChange(filter, isChecked);
  };

  return (
    <div className="flex flex-col items-start m-4 justify-items-center">
        <div className="mb-2">
            <SearchBar 
                  onSubmit={handleSearchSubmit}
                  onChange={handleSearchChange}
                  onClear={handleSearchClear} 
                  value={input}
                  placeholder="Search for a job location" />
        </div>
        <div className="mb-2">
            <p>Type</p>
            {jobTypeOptions.map((option) => (
                <div key={option.value} className="m-1">
                    <FilterCheckbox
                        key={option.value}
                        value={option.value}
                        label={option.label}
                        isChecked={jobTypesFilterState[option.value]}
                        onChange={handleJobTypeChange(option.value)}
                    />
                </div>
            ))}
        </div>

        <div className="mb-2">
            <p>Industry</p>
            {jobIndustryOptions.map((option) => (
                <div key={option.value} className="m-1">
                    <FilterCheckbox
                        key={option.value}
                        value={option.value}
                        label={option.label}
                        isChecked={jobIndustryFilterState[option.value]}
                        onChange={handleJobIndustryChange(option.value)}
                    />
                </div>
            ))}
        </div>
    </div>
  );
}

export default Filters;

