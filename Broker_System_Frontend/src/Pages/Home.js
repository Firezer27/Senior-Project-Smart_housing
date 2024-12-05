"use client";


// import { Footer } from "flowbite-react";
import Filter from "../components/Filter";
import NavBar from "../components/NavBar";
import PropertyCard from "../components/PropertyCard";
import Footer from "../components/Footer"
import React from "react";

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Navbar */}
      <NavBar />

      {/* Main Content */}
      <div className="flex flex-1 pt-20 container mx-auto gap-6">
        {/* Filter Section */}
        <aside className="max-w-full  md:w-1/4">
          <Filter />
        </aside>

        {/* Property Cards Section */}
        <main className="flex-1 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-1">
          {/* Example Property Cards */}
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
