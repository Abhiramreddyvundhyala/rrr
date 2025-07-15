import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, Users, Building, Award, ArrowRight, MapPin, Phone, Mail } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-saffron-600 to-bjp-orange text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Rekulampati<br />
                <span className="text-yellow-200">Ram Reddy</span><br />
                <span className="text-3xl md:text-4xl">(R.R.R)</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-orange-100">
                Bagh Amberpet Division<br />
                Leadership over five booth-level teams<br />
                Dedicated Real Estate Developer
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-saffron-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2"
                >
                  Join Our Booth <ArrowRight size={20} />
                </Link>
                <Link
                  to="/real-estate"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-saffron-600 transition-colors duration-200"
                >
                  Real Estate Projects
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
          <div className="w-80 h-80 bg-white rounded-full flex items-center justify-center shadow-2xl">
            <div className="w-72 h-72 bg-gradient-to-br from-saffron-500 to-bjp-orange rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src={`${import.meta.env.BASE_URL}IMG_4049.JPG`} 
                alt="Profile or Symbol" 
                className="w-full h-full object-cover rounded-full" 
              />
            </div>
          </div>
        </div>
       </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving the People of Bagh Amberpet
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Committed to the development of our community through dedicated political service and 
              innovative real estate solutions that transform lives and build stronger neighborhoods.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-saffron-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Crown className="w-16 h-16 text-saffron-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">BJP Leader</h3>
              <p className="text-gray-600 mt-2">Vice President</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Users className="w-16 h-16 text-saffron-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">5 Booths</h3>
              <p className="text-gray-600 mt-2">Team Leadership</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Building className="w-16 h-16 text-saffron-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">Real Estate</h3>
              <p className="text-gray-600 mt-2">Developer</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Award className="w-16 h-16 text-saffron-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">Community</h3>
              <p className="text-gray-600 mt-2">Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Connect with R.R.R
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-saffron-500 to-bjp-orange p-8 rounded-lg text-white text-center hover:shadow-xl transition-shadow duration-300">
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Bagh Amberpet Division</h3>
              <p className="mb-4">Serving the community with dedicated leadership</p>
              <Link
                to="/political"
                className="bg-white text-saffron-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-lg text-white text-center hover:shadow-xl transition-shadow duration-300">
              <Building className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real Estate Projects</h3>
              <p className="mb-4">Quality developments across Hyderabad</p>
              <Link
                to="/real-estate"
                className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                View Projects
              </Link>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-8 rounded-lg text-white text-center hover:shadow-xl transition-shadow duration-300">
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Get In Touch</h3>
              <p className="mb-4">Contact us for any assistance or inquiries</p>
              <Link
                to="/contact"
                className="bg-white text-green-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BJP Connection */}
      <section className="py-16 bg-saffron-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Proud Member of Bharatiya Janata Party
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Working towards the vision of a developed and prosperous India under the guidance of BJP's principles and values.
          </p>
          <a
            href="https://www.bjptelangana.org"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-saffron-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center gap-2"
          >
            Visit BJP Telangana <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;