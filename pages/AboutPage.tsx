
import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="py-16 md:py-24 bg-harmony-purple-50">
      <div className="container mx-auto px-6">
        <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 lg:p-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <p className="text-harmony-purple-600 font-semibold mb-2">Improve your health</p>
              <h1 className="text-3xl md:text-4xl font-bold text-harmony-heading mb-6">
                Best health care brought to you
              </h1>
              <p className="text-harmony-text mb-4">
                Harmony Kenya, an affiliate partner of Harmony Reproductive Choices, was established in 1985 as a locally registered NGO. It is Kenya’s largest and most specialized sexual reproductive health (SRH) and family planning (FP) organization and is renowned for providing a wide range of high-quality, affordable, and client-centered SRH services and information to men, women, and young people throughout Kenya.
              </p>
              <p className="text-harmony-text mb-8">
                Through its mobile outreach units and PSS sites, Harmony Kenya provides approximately 65% of all long-acting and permanent (LAPM) family planning methods in the country.
              </p>
              <Link to="/services">
                <button className="bg-harmony-purple-200 text-harmony-purple-700 font-semibold py-3 px-8 rounded-full hover:bg-harmony-purple-300 transition-colors duration-300">
                  More
                </button>
              </Link>
            </div>
            {/* Image */}
            <div className="flex justify-center">
              <img
                src="https://picsum.photos/seed/about/500/500"
                alt="Doctor with a patient"
                className="rounded-2xl shadow-lg object-cover w-full h-full max-h-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
