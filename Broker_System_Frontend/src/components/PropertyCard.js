"use client";

import React, { useState } from "react";
import { Card, Button } from "flowbite-react";
import { GiMoneyStack } from "react-icons/gi";

function PropertyCard() {
  // State for property details
  const [propertyDetails, setPropertyDetails] = useState({
    location: "Gerji, Addis Ababa",
    title: "Modern Luxury Villa with Private Pool",
    bedrooms: 4,
    bathrooms: 2,
    size: 98,
    price: "120,000",
    image: "/images/property/sample-house.jpg",
  });

  // State to manage hover effect
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={`max-w-lg m-4 shadow-lg ${
        isHovered ? "shadow-2xl scale-105" : "shadow-md"
      } transition duration-300 ease-in-out bg-gray-50 border border-emerald-300`}
      onMouseEnter={() => setIsHovered(true)} // Hover start
      onMouseLeave={() => setIsHovered(false)} // Hover end
    >
      {/* Property Image */}
      <img
        src={propertyDetails.image}
        alt={propertyDetails.title}
        className="rounded-t-lg object-cover h-48 w-full"
      />

      {/* Card Content */}
      <div className="p-1">
        {/* Location */}
        <p className="text-sm text-gray-600 mb-1">
          📍 {propertyDetails.location}
        </p>

        {/* Title */}
        <h5
          className={`text-xl font-bold tracking-tight ${
            isHovered ? "text-emerald-600" : "text-gray-900"
          }`}
        >
          {propertyDetails.title}
        </h5>

        {/* Property Features */}
        <ul className="flex flex-wrap gap-1 mt-3 text-gray-800 text-sm">
          <li>
            🛏️ <strong>{propertyDetails.bedrooms} Bedrooms</strong>
          </li>
          <li>
            🛁 <strong>{propertyDetails.bathrooms} Bathrooms</strong>
          </li>
          <li>
            📐 <strong>{propertyDetails.size} Sq Ft</strong>
          </li>
        </ul>

        {/* Price */}
        <p className="mt-2 text-md font-semibold text-emerald-700 flex flex-row items-center">
          <GiMoneyStack className="mr-2" /> {propertyDetails.price}
        </p>

        {/* Action Button */}
        <Button
          className="mt-5 w-full bg-emerald-600 text-white hover:bg-emerald-700"
          href="#"
          onClick={() =>
            console.log("Viewing details for", propertyDetails.title)
          }
        >
          View Details
        </Button>
      </div>
    </Card>
  );
}

export default PropertyCard;
