
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here (e.g., API call)
    setSubmitted(true);
  };
  
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-harmony-purple-50 p-8 md:p-12 rounded-2xl shadow-lg">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Info Section */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-harmony-heading mb-4">Get in Touch</h1>
              <p className="text-harmony-text mb-8">
                We're here to help. Whether you have a question about our services, need assistance with booking, or just want to talk, we'd love to hear from you.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <svg className="w-6 h-6 text-harmony-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <span>123 Harmony Lane, Health City, Nairobi, Kenya</span>
                </div>
                <div className="flex items-center space-x-4">
                  <svg className="w-6 h-6 text-harmony-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  <span>+254 700 123 456</span>
                </div>
                 <div className="flex items-center space-x-4">
                    <svg className="w-6 h-6 text-harmony-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  <span>contact@harmony.co.ke</span>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div>
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full bg-white p-8 rounded-lg">
                   <svg className="w-16 h-16 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <h2 className="text-xl font-bold text-harmony-heading">Thank You!</h2>
                  <p className="text-center">Your message has been sent. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="font-semibold text-harmony-text">Name</label>
                    <input type="text" id="name" required className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-harmony-purple-300" />
                  </div>
                   <div>
                    <label htmlFor="email" className="font-semibold text-harmony-text">Email</label>
                    <input type="email" id="email" required className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-harmony-purple-300" />
                  </div>
                   <div>
                    <label htmlFor="message" className="font-semibold text-harmony-text">Message</label>
                    <textarea id="message" rows={5} required className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-harmony-purple-300"></textarea>
                  </div>
                  <button type="submit" className="w-full py-3 bg-harmony-purple-500 text-white font-bold rounded-lg hover:bg-harmony-purple-600 transition-colors">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
