
import React, { useState } from 'react';
import { ROOMS } from '../constants';
import { Room } from '../types';

const Booking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    name: '',
    email: ''
  });

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  return (
    <div className="pt-20 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Progress Indicator */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center space-x-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${step >= 1 ? 'bg-stone-900 text-white' : 'bg-stone-200 text-stone-500'}`}>1</div>
            <div className={`w-12 h-px ${step >= 2 ? 'bg-stone-900' : 'bg-stone-200'}`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${step >= 2 ? 'bg-stone-900 text-white' : 'bg-stone-200 text-stone-500'}`}>2</div>
            <div className={`w-12 h-px ${step >= 3 ? 'bg-stone-900' : 'bg-stone-200'}`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${step >= 3 ? 'bg-stone-900 text-white' : 'bg-stone-200 text-stone-500'}`}>3</div>
          </div>
        </div>

        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif mb-4">Select Your Sanctuary</h2>
              <p className="text-stone-500">Choose from our curated selection of luxury suites.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {ROOMS.map(room => (
                <div 
                  key={room.id} 
                  className={`bg-white border rounded-sm overflow-hidden transition-all duration-300 hover:shadow-xl ${selectedRoom?.id === room.id ? 'border-stone-900 ring-1 ring-stone-900' : 'border-stone-200'}`}
                  onClick={() => setSelectedRoom(room)}
                >
                  <div className="relative h-64">
                    <img src={room.imageUrl} alt={room.type} className="w-full h-full object-cover" />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider">
                      ${room.price} / Night
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-serif mb-3">{room.type}</h3>
                    <p className="text-stone-500 text-sm mb-6 leading-relaxed">{room.description}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {room.features.map(f => (
                        <span key={f} className="text-[10px] uppercase tracking-widest bg-stone-100 text-stone-600 px-2 py-1 rounded-full">{f}</span>
                      ))}
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedRoom(room);
                        setStep(2);
                      }}
                      className="w-full bg-stone-900 text-white py-4 text-xs uppercase tracking-[0.2em] hover:bg-stone-800 transition-colors"
                    >
                      Select Room
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 2 && selectedRoom && (
          <div className="max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button onClick={() => setStep(1)} className="mb-8 text-stone-500 hover:text-stone-900 flex items-center space-x-2 text-sm">
              <i className="fa-solid fa-arrow-left"></i>
              <span>Back to Room Selection</span>
            </button>
            <div className="bg-white p-10 rounded-sm shadow-sm border border-stone-200">
              <h2 className="text-3xl font-serif mb-8 text-center">Your Stay Details</h2>
              <form onSubmit={handleBooking} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-2">Check-in Date</label>
                    <input 
                      type="date" 
                      required
                      className="w-full border-stone-200 rounded-sm p-3 bg-stone-50 focus:ring-stone-900 focus:border-stone-900"
                      onChange={(e) => setBookingData({...bookingData, checkIn: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-2">Check-out Date</label>
                    <input 
                      type="date" 
                      required
                      className="w-full border-stone-200 rounded-sm p-3 bg-stone-50 focus:ring-stone-900 focus:border-stone-900"
                      onChange={(e) => setBookingData({...bookingData, checkOut: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-2">Number of Guests</label>
                  <select 
                    className="w-full border-stone-200 rounded-sm p-3 bg-stone-50 focus:ring-stone-900 focus:border-stone-900"
                    onChange={(e) => setBookingData({...bookingData, guests: parseInt(e.target.value)})}
                  >
                    {[1, 2, 3, 4].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    required
                    className="w-full border-stone-200 rounded-sm p-3 bg-stone-50 focus:ring-stone-900 focus:border-stone-900"
                    onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="hello@example.com" 
                    required
                    className="w-full border-stone-200 rounded-sm p-3 bg-stone-50 focus:ring-stone-900 focus:border-stone-900"
                    onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                  />
                </div>
                <div className="pt-4">
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-stone-100">
                    <span className="text-stone-500">Selected: {selectedRoom.type}</span>
                    <span className="font-bold">${selectedRoom.price} / Night</span>
                  </div>
                  <button type="submit" className="w-full bg-stone-900 text-white py-4 text-xs uppercase tracking-[0.2em] hover:bg-stone-800 transition-colors">
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="max-w-xl mx-auto text-center py-20 animate-in zoom-in duration-500">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <i className="fa-solid fa-check text-3xl"></i>
            </div>
            <h2 className="text-4xl font-serif mb-4">Reservation Confirmed!</h2>
            <p className="text-stone-500 mb-10 leading-relaxed">
              Thank you, {bookingData.name}. Your booking for the {selectedRoom?.type} has been successfully received. 
              A confirmation email has been sent to {bookingData.email}.
            </p>
            <div className="bg-white border border-stone-200 p-8 rounded-sm mb-12 text-left">
              <h4 className="text-xs uppercase tracking-widest text-stone-400 mb-4">Reservation Details</h4>
              <p className="text-stone-700"><strong>Check-in:</strong> {bookingData.checkIn}</p>
              <p className="text-stone-700"><strong>Check-out:</strong> {bookingData.checkOut}</p>
              <p className="text-stone-700"><strong>Guests:</strong> {bookingData.guests}</p>
            </div>
            <button 
              onClick={() => {setStep(1); setSelectedRoom(null);}} 
              className="bg-stone-900 text-white px-10 py-4 text-xs uppercase tracking-widest hover:bg-stone-800 transition-all"
            >
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;
