import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, Phone, Mail, MapPin, Instagram, Facebook, Youtube, ExternalLink } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About RRR', href: '/about' },
    { name: 'Political Journey', href: '/political' },
    { name: 'Real Estate', href: '/real-estate' },
    { name: 'Media Gallery', href: '/media' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Voter Registration', href: '/political' },
    { name: 'Real Estate Projects', href: '/real-estate' },
    { name: 'Community Development', href: '/political' },
    { name: 'Booth Committee', href: '/contact' },
  ];

  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com/ramreddy_rrr', icon: Instagram },
    { name: 'Facebook', href: 'https://facebook.com/r.ram.reddy.2025', icon: Facebook },
    { name: 'YouTube', href: 'https://youtube.com/@rrr-official', icon: Youtube },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-saffron-500 to-bjp-orange rounded-full flex items-center justify-center">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-saffron-400">R.R.R</span>
                <span className="text-sm text-gray-400">Ram Reddy</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6">
              Serving the people of Bagh Amberpet with dedication and integrity. 
              BJP Division President and Real Estate Developer.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-saffron-500 transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-saffron-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className="text-gray-400 hover:text-saffron-400 transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-saffron-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">
                    Bagh Amberpet, Hyderabad<br />
                    Telangana 500013
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-saffron-400 flex-shrink-0" />
                <a href="tel:+919399976666" className="text-gray-400 hover:text-saffron-400 transition-colors duration-200">
                  +91 9399976666
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-saffron-400 flex-shrink-0" />
                <a href="mailto:contact@rrrofficial.com" className="text-gray-400 hover:text-saffron-400 transition-colors duration-200">
                  contact@rrrofficial.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>&copy; 2024 Rekulampaty Ram Reddy (R.R.R). All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="https://www.bjptelangana.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-saffron-400 transition-colors duration-200 flex items-center gap-1 text-sm"
              >
                BJP Telangana <ExternalLink className="w-3 h-3" />
              </a>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-saffron-400 transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-saffron-400 transition-colors duration-200 text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;