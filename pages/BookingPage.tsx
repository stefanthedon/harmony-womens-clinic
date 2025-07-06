
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { SERVICES_DATA, TIME_SLOTS } from '../constants';
import { Link } from 'react-router-dom';

type BookingStep = 'service' | 'datetime' | 'details' | 'confirmation';

const BookingPage: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const [step, setStep] = useState<BookingStep>('service');
  
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [patientDetails, setPatientDetails] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    if (isAuthenticated && user) {
      setPatientDetails(prev => ({ ...prev, name: user.name, email: user.email }));
    }
  }, [isAuthenticated, user]);

  const handleDetailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPatientDetails(prev => ({ ...prev, [name]: value }));
  };

  const today = new Date().toISOString().split('T')[0];

  const renderStep = () => {
    switch (step) {
      case 'service':
        return (
          <div>
            <h2 className="text-2xl font-bold text-harmony-heading mb-6">1. Select a Service</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SERVICES_DATA.map(service => (
                <button
                  key={service.title}
                  onClick={() => { setSelectedService(service.title); setStep('datetime'); }}
                  className={`p-6 text-left border-2 rounded-lg transition-all ${selectedService === service.title ? 'border-harmony-purple-500 bg-harmony-purple-100' : 'border-gray-200 hover:border-harmony-purple-300'}`}
                >
                  <h3 className="font-bold text-harmony-purple-700">{service.title}</h3>
                </button>
              ))}
            </div>
          </div>
        );
      case 'datetime':
        return (
          <div>
            <h2 className="text-2xl font-bold text-harmony-heading mb-6">2. Select Date & Time</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <label className="block font-semibold mb-2" htmlFor="date">Date</label>
                    <input type="date" id="date" min={today} value={selectedDate} onChange={e => setSelectedDate(e.target.value)} className="w-full p-3 border rounded-lg"/>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">Available Times</h3>
                    {selectedDate ? (
                        <div className="grid grid-cols-3 gap-2">
                        {TIME_SLOTS.map(time => (
                            <button key={time} onClick={() => setSelectedTime(time)} className={`p-2 rounded-lg border-2 ${selectedTime === time ? 'bg-harmony-purple-500 text-white border-harmony-purple-500' : 'bg-white hover:border-harmony-purple-400'}`}>
                            {time}
                            </button>
                        ))}
                        </div>
                    ) : <p className="text-gray-500">Please select a date first.</p>}
                </div>
            </div>
            <div className="mt-8 flex justify-between">
              <button onClick={() => setStep('service')} className="py-2 px-6 bg-gray-200 rounded-lg">Back</button>
              <button onClick={() => setStep('details')} disabled={!selectedDate || !selectedTime} className="py-2 px-6 bg-harmony-purple-500 text-white rounded-lg disabled:bg-gray-300">Next</button>
            </div>
          </div>
        );
      case 'details':
        if (!isAuthenticated) {
          return (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-harmony-heading mb-4">Please Login to Continue</h2>
              <p className="mb-6">For a seamless booking experience, please log in or create an account.</p>
              <Link to="/auth">
                <button className="py-3 px-8 bg-harmony-purple-500 text-white font-bold rounded-lg">Login / Sign Up</button>
              </Link>
              <button onClick={() => setStep('datetime')} className="mt-4 text-gray-600">Go Back</button>
            </div>
          );
        }
        return (
          <div>
            <h2 className="text-2xl font-bold text-harmony-heading mb-6">3. Confirm Your Details</h2>
            <div className="space-y-4">
              <input type="text" name="name" value={patientDetails.name} onChange={handleDetailChange} placeholder="Full Name" className="w-full p-3 border rounded-lg bg-gray-100" />
              <input type="email" name="email" value={patientDetails.email} onChange={handleDetailChange} placeholder="Email" className="w-full p-3 border rounded-lg bg-gray-100" />
              <input type="tel" name="phone" value={patientDetails.phone} onChange={handleDetailChange} placeholder="Phone Number" className="w-full p-3 border rounded-lg" />
            </div>
             <div className="mt-8 flex justify-between">
              <button onClick={() => setStep('datetime')} className="py-2 px-6 bg-gray-200 rounded-lg">Back</button>
              <button onClick={() => setStep('confirmation')} disabled={!patientDetails.name || !patientDetails.email} className="py-2 px-6 bg-harmony-purple-500 text-white rounded-lg disabled:bg-gray-300">Confirm Booking</button>
            </div>
          </div>
        );
      case 'confirmation':
        return (
          <div className="text-center">
            <svg className="w-16 h-16 mx-auto text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <h2 className="text-2xl font-bold text-harmony-heading mb-2">Thank You, {patientDetails.name}!</h2>
            <p className="text-harmony-text">Your appointment is confirmed.</p>
            <div className="mt-6 p-4 bg-harmony-purple-100 rounded-lg text-left max-w-md mx-auto">
                <p><strong>Service:</strong> {selectedService}</p>
                <p><strong>Date:</strong> {selectedDate}</p>
                <p><strong>Time:</strong> {selectedTime}</p>
            </div>
            <p className="mt-4 text-sm text-gray-500">A confirmation has been sent to {patientDetails.email}.</p>
            <Link to="/">
                <button className="mt-6 py-2 px-6 bg-harmony-purple-500 text-white rounded-lg">Back to Home</button>
            </Link>
          </div>
        );
    }
  };

  return (
    <div className="py-16 md:py-24 bg-harmony-purple-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl">
          {renderStep()}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
