import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const TRAVEL_BAG_ICON_URL = "/assets/icons/bag.png";
const LOGO = "/assets/images/logo.png";

// 2. Search Icon Component (Kept locally for convenience, but simplified to only contain the SVG path)
const SearchIcon = ({ className = 'h-5 w-5' }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
    </svg>
);


const Header: React.FC = () => {
  const accommodationTypes = [
    { name: 'Living Room', icon: '/assets/icons/living-room.svg' },
    { name: 'Rooms', icon: '/assets/icons/rooms.svg' },
    { name: 'Mansion', icon: '/assets/icons/mansion.svg' },
    { name: 'Countryside', icon: '/assets/icons/countryside.svg' },
    { name: 'Villa', icon: '/assets/icons/villa.svg' },
    { name: 'Tropical', icon: '/assets/icons/tropical.svg' },
    { name: 'New', icon: '/assets/icons/new.svg' },
    { name: 'Amazing pool', icon: '/assets/icons/amazing_pool.svg' },
    { name: 'Beach house', icon: '/assets/icons/beach_house.svg' },
    { name: 'Island', icon: '/assets/icons/island.svg' },
    { name: 'Camping', icon: '/assets/icons/camping.svg' },
    { name: 'Apartment', icon: '/assets/icons/apartment.svg' },
    { name: 'House', icon: '/assets/icons/house.svg' },
    { name: 'Lakefront', icon: '/assets/icons/lakefront.svg' },
    { name: 'Farm house', icon: '/assets/icons/farm_house.svg' },
    { name: 'Treehouse', icon: '/assets/icons/treehouse.svg' },
    { name: 'Cabins', icon: '/assets/icons/cabins.svg' },
    { name: 'Castles', icon: '/assets/icons/castles.svg' },
    { name: 'Lakeside', icon: '/assets/icons/lakeside.svg' },
    { name: 'SWimming pool', icon: '/assets/icons/pool.svg' },
    { name: 'Vacation', icon: '/assets/icons/vacation.svg' },
    { name: 'Cottage', icon: '/assets/icons/cottage.svg' },
  ];

  return (
    <header className="w-full">
      {/* Top Info Bar */}
      <div className="bg-emerald-600 text-white text-center py-2 text-sm">
        <div className="w-[90%] mx-auto flex justify-center items-center gap-2">
          
          <Image 
            src={TRAVEL_BAG_ICON_URL} 
            alt="Travel Guide" 
            width={20}
            height={20} 
            className="w-5 h-5"
          />
          
          <span>Overseas trip? Get the latest information on travel guides</span>
          <Link href="#" className="ml-4 bg-gray-800 text-white px-3 py-1 rounded-full hover:bg-gray-700">
            More Info
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-gray-200">
        <div className="w-[90%] mx-auto py-4 px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 inline-flex items-center">
            <Image
              src={LOGO}
              alt="ALX Listing"
              width={120}
              height={34}
              className="object-contain"
            />
          </Link>

          {/* Search Bar */}
          <div className="flex-grow flex justify-center mx-9">
            <div className="flex border border-gray-300 rounded-full shadow-sm">
              <div className="flex flex-col border-r px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-l-full">
                <span className="text-xs font-semibold">Location</span>
                <input
                  type="text"
                  placeholder="Search for destination"
                  className="text-sm border-none focus:outline-none bg-transparent w-48"
                />
              </div>
              <div className="flex flex-col border-r px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <span className="text-xs font-semibold">Check in</span>
                <input
                  type="text"
                  placeholder="Add date"
                  className="text-sm border-none focus:outline-none bg-transparent w-24"
                />
              </div>
              <div className="flex flex-col border-r px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <span className="text-xs font-semibold">Check out</span>
                <input
                  type="text"
                  placeholder="Add date"
                  className="text-sm border-none focus:outline-none bg-transparent w-24"
                />
              </div>
              <div className="flex flex-col px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-r-full">
                <span className="text-xs font-semibold">People</span>
                <input
                  type="text"
                  placeholder="Add guest"
                  className="text-sm border-none focus:outline-none bg-transparent w-24"
                />
              </div>
              <button className="bg-orange-500 text-white p-5 rounded-full m-1 ml-2 mr-2">
                {/* Using the SearchIcon component */}
                <SearchIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <Link href="#" className="bg-emerald-600 text-white px-5 py-2 rounded-lg hover:bg-emerald-700">
              Sign in
            </Link>
            <Link href="#" className="border border-gray-300 px-5 py-2 rounded-lg hover:bg-gray-50">
              Sign up
            </Link>
          </div>
        </div>
      </div>

      {/* Accommodation Types */}
  <div className="w-[90%] mx-auto py-3 px-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <nav className="flex space-x-8">
          {accommodationTypes.map((type) => (
            <Link
              href="#"
              key={type.name}
              className={`flex flex-col items-center p-2 border-b-2 ${
                type.name === 'Villa' ? 'border-gray-800' : 'border-transparent'
              } text-gray-700 hover:border-gray-400`}
            >
              {/* NOTE: These use placeholder paths and assume you have static SVG files */}
              <img src={type.icon} alt={type.name} className="h-6 w-6 mb-1" />
              <span className="text-xs font-medium">{type.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
