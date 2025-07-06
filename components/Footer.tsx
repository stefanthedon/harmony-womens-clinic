
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-harmony-purple-100 mt-16">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo and Info */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-serif font-bold text-harmony-heading tracking-widest mb-4">
              HARMONY
            </h2>
            <p className="text-harmony-text text-sm">
              Harmony Hospital in Kenya offers world-class medical care indistinctly.
            </p>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="font-bold text-harmony-heading mb-4">COMPANY</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-harmony-purple-600">About</Link></li>
              <li><Link to="/services" className="hover:text-harmony-purple-600">Services</Link></li>
              <li><Link to="/contact" className="hover:text-harmony-purple-600">Works</Link></li>
              <li><Link to="/contact" className="hover:text-harmony-purple-600">Career</Link></li>
            </ul>
          </div>

          {/* Column 3: Help */}
          <div>
            <h3 className="font-bold text-harmony-heading mb-4">HELP</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="hover:text-harmony-purple-600">Customer Support</Link></li>
              <li><Link to="/booking" className="hover:text-harmony-purple-600">Booking Details</Link></li>
              <li><Link to="#" className="hover:text-harmony-purple-600">Terms & Conditions</Link></li>
              <li><Link to="#" className="hover:text-harmony-purple-600">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="font-bold text-harmony-heading mb-4">SUBSCRIBE FOR A NEWSLETTER</h3>
            <form>
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2 text-sm bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-harmony-purple-300"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-sm text-white bg-harmony-purple-500 rounded-md hover:bg-harmony-purple-600 transition-colors"
                >
                  Subscribe Now
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-harmony-purple-200 pt-6 text-center text-sm text-harmony-text">
          <p>&copy; {new Date().getFullYear()} Harmony Clinic. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
