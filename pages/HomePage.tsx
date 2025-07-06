
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="relative h-[calc(100vh-80px)] min-h-[600px] flex items-center justify-center text-white text-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(https://picsum.photos/seed/pregnant/1600/1200)` }}
      ></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-harmony-purple-400 opacity-50 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 flex flex-col items-start text-left max-w-4xl">
         <div className="bg-white/20 backdrop-blur-sm p-12 rounded-lg">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 text-white drop-shadow-lg">
            Empowering <br />
            Women's Health
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-md font-light text-white drop-shadow-md">
            Compassionate Care for Every Stage of Your Journey
            </p>
            <Link to="/booking">
                <button className="bg-white text-harmony-purple-600 font-bold py-3 px-8 rounded-full hover:bg-harmony-purple-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                BOOK NOW
                </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
