
import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-harmony-purple-50/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-serif font-bold text-harmony-heading tracking-widest">
          HARMONY
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.filter(l => l.name !== 'Book Now' && l.name !== 'Contact Us').map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-harmony-text hover:text-harmony-purple-600 transition-colors ${
                  isActive ? 'text-harmony-purple-600 font-semibold' : ''
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
             <div className="relative group">
                <button className="px-4 py-2 text-sm text-harmony-purple-600 border border-harmony-purple-600 rounded-full hover:bg-harmony-purple-600 hover:text-white transition-colors">
                    Welcome, {user?.name.split(' ')[0]}
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Logout
                    </button>
                </div>
            </div>
          ) : (
            <Link to="/auth">
              <button className="px-4 py-2 text-sm text-harmony-purple-600 border border-harmony-purple-600 rounded-full hover:bg-harmony-purple-600 hover:text-white transition-colors">
                Login / Sign Up
              </button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
