import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Users } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      inquiryType: 'general'
    });
  };

  const officeLocations = [
    {
      name: 'Main Office',
      address: 'Bagh Amberpet,DD Colony, Hyderabad, Telangana 500013',
      phone: '+91 9399976666',
      email: 'contact@rrrofficial.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
      type: 'Political Office'
    },
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9399976666',
      link: 'tel:+919000000000',
      description: 'Call us for immediate assistance'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+91 9399976666',
      link: 'https://wa.me/9399976666',
      description: 'Chat with us on WhatsApp'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@rrrofficial.com',
      link: 'mailto:contact@rrrofficial.com',
      description: 'Send us an email'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-saffron-600 to-bjp-orange text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact R.R.R</h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Get in touch with us for political assistance, real estate inquiries, or community support
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : '_self'}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-white border-2 border-saffron-100 p-8 rounded-lg text-center hover:border-saffron-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-saffron-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-saffron-600 font-medium text-lg mb-2">{method.value}</p>
                <p className="text-gray-600">{method.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Office Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 outline-none transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 outline-none transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 outline-none transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 outline-none transition-colors"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="political">Political Assistance</option>
                    <option value="realestate">Real Estate Inquiry</option>
                    <option value="voter">Voter Services</option>
                    <option value="community">Community Support</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 outline-none transition-colors"
                    placeholder="Enter the subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 outline-none transition-colors resize-none"
                    placeholder="Enter your message"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-saffron-500 text-white py-4 px-6 rounded-lg font-semibold hover:bg-saffron-600 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Office Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Office Locations</h2>
                <div className="space-y-6">
                  {officeLocations.map((office, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-saffron-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{office.name}</h3>
                          <div className="space-y-2">
                            <p className="text-gray-600 flex items-start gap-2">
                              <MapPin className="w-4 h-4 text-saffron-500 mt-0.5 flex-shrink-0" />
                              {office.address}
                            </p>
                            <p className="text-gray-600 flex items-center gap-2">
                              <Phone className="w-4 h-4 text-saffron-500 flex-shrink-0" />
                              {office.phone}
                            </p>
                            <p className="text-gray-600 flex items-center gap-2">
                              <Mail className="w-4 h-4 text-saffron-500 flex-shrink-0" />
                              {office.email}
                            </p>
                            <p className="text-gray-600 flex items-center gap-2">
                              <Clock className="w-4 h-4 text-saffron-500 flex-shrink-0" />
                              {office.hours}
                            </p>
                          </div>
                          <div className="mt-3">
                            <span className="inline-block bg-saffron-50 text-saffron-600 px-3 py-1 rounded-full text-sm font-medium">
                              {office.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Join Our Booth */}
              <div className="bg-gradient-to-r from-saffron-500 to-bjp-orange p-8 rounded-lg text-white">
                <Users className="w-16 h-16 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Join Our Booth</h3>
                <p className="mb-6">
                  Become a part of our political movement and contribute to the development of Bagh Amberpet. 
                  Join our booth committee and make a difference in your community.
                </p>
                <a
                  href="https://wa.me/919000000000?text=I%20want%20to%20join%20the%20booth%20committee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-saffron-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Join Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Us Here
            </h2>
            <p className="text-xl text-gray-600">
              Visit our office or contact us for appointments
            </p>
          </div>
          
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-saffron-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive Map</h3>
              <p className="text-gray-600 mb-4">
                Integrate with Google Maps to show office locations
              </p>
              <a
                href="https://maps.google.com/maps?q=Bagh+Amberpet,+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-saffron-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-saffron-600 transition-colors duration-200"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;