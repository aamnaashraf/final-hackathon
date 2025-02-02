'use client';

import { useState } from 'react';

interface Item {
  name: string;
  price: number;
  slug: { current: string };
  category?: string;
}

interface Category {
  name: string;
  slug: string;
}

interface FilterSectionProps {
  data: Item[];
  categories?: Category[]; // Make categories optional
  onSortChange: (value: string) => void;
  onShowChange: (value: number) => void;
  onCategoryChange: (value: string) => void;
  onSearchChange: (value: string) => void; // New prop for search functionality
}

const FilterSection: React.FC<FilterSectionProps> = ({
  data,
  categories = [], // Default value for categories
  onSortChange,
  onShowChange,
  onCategoryChange,
  onSearchChange, // Destructure the new prop
}) => {
  const [show, setShow] = useState(16);
  const [sortBy, setSortBy] = useState('Default');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  const handleShowChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number(e.target.value);
    setShow(value);
    onShowChange(value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSortBy(value);
    onSortChange(value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedCategory(value);
    onCategoryChange(value);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearchChange(value); // Pass the search query to the parent component
  };

  return (
    <div className="bg-[#FAF5EF] py-4 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top Row: Filter Button and Results Count */}
        <div className="flex flex-wrap justify-between items-center mb-4">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
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
            <p className="text-gray-600 text-sm">Showing {data.length} results</p>
          </div>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full md:w-auto border-gray-300 rounded-md px-2 py-1 text-sm mb-4 md:mb-0"
          />
        </div>

        {/* Bottom Row: Category, Show, and Sort By */}
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center space-x-2">
            <label className="text-sm text-gray-600">Category</label>
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="border-gray-300 rounded-md px-2 py-1 text-sm"
            >
              <option value="">All Categories</option>
              {categories?.map((category) => (
                <option key={category.slug} value={category.slug}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-2">
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
          </div>

          <div className="flex items-center space-x-2">
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
    </div>
  );
};

export default FilterSection;