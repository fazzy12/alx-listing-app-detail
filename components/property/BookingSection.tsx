// components/property/BookingSection.tsx
import React, { useState, useMemo } from 'react';

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState<string>('');
  const [checkOut, setCheckOut] = useState<string>('');
  
  // Calculate number of nights
  const numNights = useMemo(() => {
    if (checkIn && checkOut) {
      const date1 = new Date(checkIn);
      const date2 = new Date(checkOut);
      const diffTime = date2.getTime() - date1.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      // Ensure checkOut is after checkIn and number of days is non-negative
      return diffDays > 0 ? diffDays : 0;
    }
    return 0;
  }, [checkIn, checkOut]);

  const totalPayment = price * numNights;
  const isReservable = numNights > 0;

  return (
    <div className="lg:sticky lg:top-20 bg-white p-6 shadow-xl rounded-xl border border-gray-100">
      <h3 className="text-2xl font-bold mb-4">
        <span className="text-3xl">${price}</span> <span className="text-lg font-normal text-gray-600">/ night</span>
      </h3>

      {/* Date Picker Section */}
      <div className="border border-gray-300 rounded-lg overflow-hidden flex divide-x mb-4">
        {/* Check-in */}
        <div className="p-3 w-1/2">
          <label htmlFor="check-in" className="text-xs font-semibold block mb-1 text-gray-700">CHECK-IN</label>
          <input 
            id="check-in"
            type="date" 
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full text-base border-none focus:ring-0 p-0 text-gray-800" 
          />
        </div>
        {/* Check-out */}
        <div className="p-3 w-1/2">
          <label htmlFor="check-out" className="text-xs font-semibold block mb-1 text-gray-700">CHECK-OUT</label>
          <input 
            id="check-out"
            type="date" 
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full text-base border-none focus:ring-0 p-0 text-gray-800" 
          />
        </div>
      </div>
      
      {/* Reserve button */}
      <button 
        className={`w-full text-white font-bold py-3 rounded-lg transition duration-200 ${
            isReservable ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'
        }`}
        disabled={!isReservable}
      >
        Reserve now
      </button>
      
      {/* Total payment calculation */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex justify-between text-gray-600 text-sm mb-2">
            <span>${price} x {numNights} nights</span>
            <span>${price * numNights}</span>
        </div>
        <div className="flex justify-between text-xl font-bold text-gray-900">
            <span>Total payment:</span>
            <span>${totalPayment}</span>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;