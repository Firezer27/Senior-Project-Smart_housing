import React, { useState } from "react";

const Filter = () => {
  const [filters, setFilters] = useState({
    category: "",
    propertySize: "",
    period: "",
    minPrice: "",
    maxPrice: "",
    minBedroom: "",
    maxBedroom: "",
    minBathroom: "",
    maxBathroom: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyFilter = () => {
    console.log(filters); // Handle your filter logic here
  };

  return (
    <div className="bg-gradient-to-r from-teal-400 via-emerald-500 to-teal-600 h-full p-6 w-full sm:w-64 fixed sm:static top-0 left-0 text-gray-100">
      <h2 className="text-lg font-semibold mb-6 text-center sm:text-left">
        Filter Rentals
      </h2>

      <div className="space-y-6">
        {/* Category */}
        <div>
          <label className="block mb-2 text-sm font-medium">Category</label>
          <select
            name="category"
            value={filters.category}
            onChange={handleInputChange}
            className="w-full px-4 py-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-emerald-500"
          >
            <option value="" disabled>
              Select category
            </option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="villa">Villa</option>
          </select>
        </div>

        {/* Property Size */}
        <div>
          <label className="block mb-2 text-sm font-medium">
            Property Size
          </label>
          <select
            name="propertySize"
            value={filters.propertySize}
            onChange={handleInputChange}
            className="w-full px-4 py-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-emerald-500"
          >
            <option value="" disabled>
              Select property size
            </option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>

        {/* Rental Period */}
        <div>
          <label className="block mb-2 text-sm font-medium">Period</label>
          <select
            name="period"
            value={filters.period}
            onChange={handleInputChange}
            className="w-full px-4 py-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-emerald-500"
          >
            <option value="" disabled>
              Select your rental period
            </option>
            <option value="short-term">Short-term</option>
            <option value="long-term">Long-term</option>
          </select>
        </div>

        {/* Price Range */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-sm font-medium">Min Price</label>
            <input
              type="number"
              name="minPrice"
              value={filters.minPrice}
              onChange={handleInputChange}
              placeholder="Min"
              className="w-full px-4 py-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Max Price</label>
            <input
              type="number"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleInputChange}
              placeholder="Max"
              className="w-full px-4 py-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Bedroom */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-sm font-medium">
              Min Bedroom
            </label>
            <input
              type="number"
              name="minBedroom"
              value={filters.minBedroom}
              onChange={handleInputChange}
              placeholder="Min"
              className="w-full px-4 py-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">
              Max Bedroom
            </label>
            <input
              type="number"
              name="maxBedroom"
              value={filters.maxBedroom}
              onChange={handleInputChange}
              placeholder="Max"
              className="w-full px-4 py-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Bathroom */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-sm font-medium">
              Min Bathroom
            </label>
            <input
              type="number"
              name="minBathroom"
              value={filters.minBathroom}
              onChange={handleInputChange}
              placeholder="Min"
              className="w-full px-4 py-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">
              Max Bathroom
            </label>
            <input
              type="number"
              name="maxBathroom"
              value={filters.maxBathroom}
              onChange={handleInputChange}
              placeholder="Max"
              className="w-full px-4 py-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-emerald-500"
            />
          </div>
        </div>
      </div>

      <button
        onClick={applyFilter}
        className="w-full mt-8 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-md hover:from-emerald-400 hover:to-teal-400"
      >
        Apply Filter
      </button>
    </div>
  );
};

export default Filter;
