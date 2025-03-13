import { ChangeEvent, useState, useEffect } from "react";

interface FiltersProps {
  filters: string[];
  onFiltersChange: (updatedFilters: string[]) => void;
}

function Filters({ filters, onFiltersChange }: FiltersProps) {
  const [isFulltime, setIsFulltime] = useState(filters.includes("full-time"));
  const [isInternship, setIsInternship] = useState(filters.includes("internship"));
  const [isContract, setIsContract] = useState(filters.includes("contract"));

  const handleFulltimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newFulltimeState = event.target.checked;
    setIsFulltime(newFulltimeState);
    updateFilters("full-time", newFulltimeState);
  };

  const handleInternshipChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newInternshipState = event.target.checked;
    setIsInternship(newInternshipState);
    updateFilters("internship", newInternshipState);
  };
  const handleContractChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newContractState = event.target.checked;
    setIsContract(newContractState);
    updateFilters("contract", newContractState);
  };

  const updateFilters = (filter: string, isChecked: boolean) => {
    let updatedFilters = [...filters];
    if (isChecked && !updatedFilters.includes(filter)) {
      updatedFilters.push(filter);
    } else {
      updatedFilters = updatedFilters.filter((f) => f !== filter);
    }
    onFiltersChange(updatedFilters);
  };

  return (
    <div className="flex items-center m-4 justify-items-center">
      <div className="flex items-center">
        <input
          id="fulltime-checkbox"
          type="checkbox"
          checked={isFulltime}
          onChange={handleFulltimeChange}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="fulltime-checkbox"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Full-time
        </label>
      </div>

      <div className="flex items-center">
        <input
          id="internship-checkbox"
          type="checkbox"
          checked={isInternship}
          onChange={handleInternshipChange}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="internship-checkbox"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Internship
        </label>
      </div>
      <div className="flex items-center">
        <input
          id="contract-checkbox"
          type="checkbox"
          checked={isContract}
          onChange={handleContractChange}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="contract-checkbox"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Contract
        </label>
      </div>
    </div>
  );
}

export default Filters;
