'use client'
import { useState } from 'react';

// Define a type for the items in your data array
interface Item {
  id: number;
  name: string;
  price: number;
  // add other fields here as needed
}

interface FilterSectionProps {
  data: Item[];  // data is an array of items of type `Item`
}

const FilterSection: React.FC<FilterSectionProps> = ({ data }) => {
  // State for show filter and sorting
  const [show, setShow] = useState(16);
  const [sortBy, setSortBy] = useState('Default');

  // Handle Show change
  const handleShowChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setShow(Number(e.target.value));
  };

  // Handle Sort change
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="bg-[#FAF5EF] py-4 shadow-sm">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
        <div className="flex items-center space-x-4">
          <button className="flex items-center bg-gray-100 text-gray-600 px-4 py-2 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10h18M3 14h18m-2 6H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2z"
              />
            </svg>
            Filter
          </button>
          <p className="text-gray-600 text-sm">
            Showing {data.length} results
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <label className="text-sm text-gray-600">Show</label>
          <select
            value={show}
            onChange={handleShowChange}
            className="border-gray-300 rounded-md px-2 py-1 text-sm"
          >
            <option value={16}>16</option>
            <option value={32}>32</option>
            <option value={48}>48</option>
          </select>

          <label className="text-sm text-gray-600">Sort by</label>
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="border-gray-300 rounded-md px-2 py-1 text-sm"
          >
            <option value="Default">Default</option>
            <option value="Price Low to High">Price Low to High</option>
            <option value="Price High to Low">Price High to Low</option>
            <option value="Newest First">Newest First</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
