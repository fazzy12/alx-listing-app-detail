import React from 'react';
import Image from "next/image";
import Pill from "@/components/Pill";
import PropertyCard from "@/components/PropertyCard";
import { HERO_IMAGE_URL, PROPERTYLISTINGSAMPLE } from "@/constants";

// 1. Hero Section Component
const HeroSection = () => {
  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-hidden">
      <Image
        src={HERO_IMAGE_URL}
        alt="Scenic view with a lake and mountains"
        fill
        style={{ objectFit: 'cover' }}
        className="rounded-lg"
      />
      <div className="absolute inset-0 bg-opacity-5 rounded-lg flex flex-col justify-center items-center text-white text-center p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Find your favorite place here!
        </h1>
        <p className="text-lg md:text-xl">
          The best prices for over 2 million properties worldwide
        </p>
      </div>
    </div>
  );
};

// 2. Filter Section Component
const filterLabels = [
  "All", "Top Villa", "Free Reschedule", "Book Now, Pay Later",
  "Self Checkin", "Instant Book",
];

const FilterSection = () => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 py-8">
      <div className="flex flex-wrap gap-2">
        {filterLabels.map((label) => (
          <Pill key={label} label={label} active={label === "All"} />
        ))}
      </div>
      <div className="flex items-center gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-1 cursor-pointer hover:text-gray-900">
          <svg /* ... Filter Icon ... */ />
          <span>Filter</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-gray-900">
          <svg /* ... Sort Icon ... */ />
          <span>Sort by:</span>
          <span className="font-semibold text-gray-900">Highest Price</span>
        </div>
      </div>
    </div>
  );
};

// 3. Listing Section Component
const ListingSection = () => {
  return (
    <section className="py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {PROPERTYLISTINGSAMPLE.map((property) => (
          <PropertyCard key={property.name} property={property} />
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="px-6 py-3 rounded-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors">
          Show more
        </button>
      </div>
    </section>
  );
};

// 4. Main Home Page Component (The default export)
const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <HeroSection />
      <FilterSection />
      <ListingSection />
    </div>
  );
};

export default Home;