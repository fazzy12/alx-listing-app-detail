// components/property/ReviewSection.tsx
import React from 'react';
// Defining a placeholder StarIcon since external libraries (Heroicons) cannot be imported here
const StarIcon = ({ className = 'w-5 h-5' }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path fillRule="evenodd" d="M10.788 3.212a.75.75 0 0 1 1.424 0l1.83 5.578h5.836a.75.75 0 0 1 .555 1.28l-4.72 3.44a.75.75 0 0 1-.265.86l1.83 5.578a.75.75 0 0 1-1.154.832L12 17.202l-4.72 3.44a.75.75 0 0 1-1.154-.832l1.83-5.578a.75.75 0 0 1-.265-.86l-4.72-3.44a.75.75 0 0 1 .555-1.28h5.836l1.83-5.578Z" clipRule="evenodd" />
  </svg>
);

// Using 'any[]' as per the snippet, but using the actual interface is better practice
const ReviewSection: React.FC<{ reviews: any[] }> = ({ reviews }) => {
  return (
    <div className="mt-8 pt-8 border-t border-gray-200">
      <h3 className="text-2xl font-bold mb-6">Reviews ({reviews.length})</h3>
      
      {/* Responsive Grid for Reviews */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
        {reviews.map((review, index) => (
          <div key={index} className="pb-4">
            <div className="flex items-center mb-3">
              {/* Profile Picture */}
              <img 
                src={review.avatar} 
                alt={review.name} 
                className="w-12 h-12 rounded-full object-cover mr-4" 
              />
              <div>
                <p className="font-semibold text-gray-900">{review.name}</p>
                {/* Rating Stars */}
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon 
                      key={i} 
                      className={`w-4 h-4 ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;