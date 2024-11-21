import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom'
const houseTypes = ["Apartment", "House", "Studio", "condominium"]; 
const roomSizes = ["1 Bedroom", "2 Bedroom", "3 Bedroom"]; 
const locations = ["Bole", "gurji roba", "megenagna", "summit", "gurji mebirat"]; 

function HouseSearchForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    preferredHouseType: '',
    roomSize: '',
    minPrice: '',
    maxPrice: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
    navigate('/homePage');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">Welcome!</h1>
      <p className="text-gray-600 mb-6 text-center">
        Please fill out the form below to help us find the best housing option for you.
      </p>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
        </div>

        
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
        </div>

        
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Preferred House Type</label>
          <select
            name="preferredHouseType"
            value={formData.preferredHouseType}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
            required
          >
            <option value="">Select Type</option>
            {houseTypes.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
        </div>

        
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Size</label>
          <select
            name="roomSize"
            value={formData.roomSize}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
            required
          >
            <option value="">Select Size</option>
            {roomSizes.map((size, index) => (
              <option key={index} value={size}>{size}</option>
            ))}
          </select>
        </div>

       
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block text-gray-700 font-semibold mb-1">Min Price</label>
            <input
              type="number"
              name="minPrice"
              value={formData.minPrice}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-700 font-semibold mb-1">Max Price</label>
            <input
              type="number"
              name="maxPrice"
              value={formData.maxPrice}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>
        </div>

        
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Location</label>
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
            required
          >
            <option value="">Select Location</option>
            {locations.map((location, index) => (
              <option key={index} value={location}>{location}</option>
            ))}
          </select>
        </div>

       
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default HouseSearchForm;
