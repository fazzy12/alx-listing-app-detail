// components/property/PropertyDetail.tsx
import React, { useState } from 'react';
import { PropertyProps } from '@/interfaces';
import BookingSection from './BookingSection';
import ReviewSection from './ReviewSection';

// Simplified icon placeholders
const StarIcon = ({ className = 'w-5 h-5' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M10.788 3.212a.75.75 0 0 1 1.424 0l1.83 5.578h5.836a.75.75 0 0 1 .555 1.28l-4.72 3.44a.75.75 0 0 1-.265.86l1.83 5.578a.75.75 0 0 1-1.154.832L12 17.202l-4.72 3.44a.75.75 0 0 1-1.154-.832l1.83-5.578a.75.75 0 0 1-.265-.86l-4.72-3.44a.75.75 0 0 1 .555-1.28h5.836l1.83-5.578Z" clipRule="evenodd" />
  </svg>
);
const MapPinIcon = ({ className = 'w-5 h-5' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M11.54 22.385a.75.75 0 0 1-1.08 0L2.24 10.72a9 9 0 0 1 15.52 0l-8.22 11.665Z" clipRule="evenodd" />
      <path fillRule="evenodd" d="M15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM12 9a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clipRule="evenodd" />
    </svg>
);
const CheckIcon = ({ className = 'w-5 h-5' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9.5 13.5a.75.75 0 0 1-1.189.155l-4.5-5.25a.75.75 0 1 1 1.13-1.096l3.96 4.62 9.073-12.914a.75.75 0 0 1 1.04-.208Z" clipRule="evenodd" />
    </svg>
);

const TABS = [
    { key: 'description', title: 'What we offer' },
    { key: 'host', title: 'About Host' },
    { key: 'reviews', title: 'Reviews' },
];

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
    const [activeTab, setActiveTab] = useState<'description' | 'host' | 'reviews'>('description');
    const { name, rating, address, description, host, category, images, pricePerNight, reviews } = property;

    const renderTabContent = () => {
        switch (activeTab) {
            case 'description':
                // Renders the full property description
                return <p className="text-gray-700 leading-relaxed">{description}</p>;
            case 'host':
                // Renders the host information
                return (
                    <div className="p-4 border border-gray-100 rounded-lg bg-gray-50">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{host.name}</h3>
                        <p className="text-gray-700">{host.about}</p>
                    </div>
                );
            case 'reviews':
                // Renders the full ReviewSection content as a tab
                return <ReviewSection reviews={reviews} />;
            default:
                return null;
        }
    };

    return (
        <div className="container mx-auto px-4 md:px-6 py-8">
            {/* Header and Info */}
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{name}</h1>
            <div className="flex items-center space-x-4 mt-2 text-lg text-gray-600">
                <div className="flex items-center text-yellow-500">
                    <StarIcon className="w-5 h-5 mr-1" />
                    <span className="font-semibold">{rating} stars</span>
                </div>
                <div className="flex items-center">
                    <MapPinIcon className="w-5 h-5 mr-1" />
                    <span>{address.city}, {address.country}</span>
                </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-4 sm:grid-rows-2 gap-3 mt-6 rounded-xl overflow-hidden shadow-lg h-[400px] md:h-[500px]">
                {/* Main Image (Span 2x2 on desktop/tablet) */}
                <img 
                    src={images[0]} 
                    alt={name} 
                    // Use col-span-full for mobile, then span 2 for sm/md/lg screens
                    className="col-span-full sm:col-span-2 sm:row-span-2 w-full h-full object-cover" 
                />
                
                {/* Smaller Images (Hidden on mobile, 3 images fill remaining space) */}
                {images.slice(1, 4).map((img, index) => (
                    <img 
                        key={index} 
                        src={img} 
                        alt={`${name} image ${index + 2}`} 
                        className="hidden sm:block w-full h-full object-cover" 
                    />
                ))}
            </div>

            {/* Main Content Layout: Details (Left) and Booking (Right) */}
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
                
                {/* Left Column: Details & Amenities */}
                <div className="lg:col-span-2">
                    
                    {/* Tabs Section */}
                    <div className="border-b border-gray-200 mb-6">
                        <nav className="flex space-x-6 overflow-x-auto whitespace-nowrap">
                            {TABS.map((tab) => (
                                <button
                                    key={tab.key}
                                    onClick={() => setActiveTab(tab.key as 'description' | 'host' | 'reviews')}
                                    className={`py-3 text-lg font-medium transition duration-150 ${
                                        activeTab === tab.key
                                            ? 'border-b-2 border-gray-900 text-gray-900'
                                            : 'text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300'
                                    }`}
                                >
                                    {tab.title}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Tab Content Area */}
                    <div className="mb-8">
                        {renderTabContent()}
                    </div>

                    {/* Amenities (What this place offers - static display below description if needed, or included in tabs) */}
                    <div className="pt-6 border-t border-gray-200">
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">Amenities</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {category.map((amenity, index) => (
                                <div key={index} className="flex items-center space-x-3 text-gray-700">
                                    <CheckIcon className="w-5 h-5 text-green-600" />
                                    <span>{amenity}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Booking Section (Sticky on large screens) */}
                <div className="lg:col-span-1">
                    <BookingSection price={pricePerNight} />
                </div>
            </div>
        </div>
    );
};

export default PropertyDetail;