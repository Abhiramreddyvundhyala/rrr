import React from 'react';
import { Crown, Users, MapPin, Phone, FileText, Award, Calendar, Vote } from 'lucide-react';

const Political = () => {
  const boothServices = [
    {
      title: 'Voter Registration',
      description: 'Complete assistance with voter ID card registration and updates',
      icon: Vote,
    },
    {
      title: 'Documentation Help',
      description: 'Support with government documentation and certificate processes',
      icon: FileText,
    },
    {
      title: 'Grievance Redressal',
      description: 'Quick resolution of citizen complaints and issues',
      icon: Phone,
    },
    {
      title: 'Community Programs',
      description: 'Educational and health awareness programs for the community',
      icon: Users,
    },
  ];

  const initiatives = [
    {
      title: 'Digital Voter Services',
      description: 'Launched online portal for voter registration and query resolution',
      impact: '2000+ citizens benefited',
      date: '2023',
    },
    {
      title: 'Youth Development Program',
      description: 'Skill development and employment opportunities for youth',
      impact: '500+ youth trained',
      date: '2023',
    },
    {
      title: 'Women Empowerment',
      description: 'Self-help groups and entrepreneurship programs for women',
      impact: '300+ women empowered',
      date: '2022',
    },
    {
      title: 'Senior Citizen Care',
      description: 'Healthcare and pension assistance for senior citizens',
      impact: '1000+ seniors assisted',
      date: '2022',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-saffron-600 to-bjp-orange text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Political Journey</h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Dedicated service to the people of Bagh Amberpet through effective political leadership
            </p>
          </div>
        </div>
      </section>

      {/* Position Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                BJP Division President
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                As the BJP Division President of Bagh Amberpet, R.R.R leads a dedicated team committed to 
                serving the constituents with integrity and transparency. His leadership extends to heading 
                5 booth divisions, ensuring comprehensive coverage of the constituency.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-saffron-100 rounded-full flex items-center justify-center">
                    <Crown className="w-6 h-6 text-saffron-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Division President</h3>
                    <p className="text-gray-600">Bagh Amberpet Constituency</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-saffron-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-saffron-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Head of 5 Booth Divisions</h3>
                    <p className="text-gray-600">Comprehensive constituency coverage</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-saffron-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-saffron-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Hyderabad, Telangana</h3>
                    <p className="text-gray-600">Serving the community since 2020</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-saffron-50 p-8 rounded-lg">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-saffron-500 to-bjp-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  <Crown size={64} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Bharatiya Janata Party</h3>
                <p className="text-gray-600 mb-6">
                  Committed to the principles of nationalism, integral humanism, and good governance
                </p>
                <a
                  href="https://www.bjptelangana.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-saffron-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-saffron-600 transition-colors duration-200"
                >
                  Visit BJP Telangana
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booth Services */}
      <section className="py-16 bg-saffron-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Booth Level Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive services available at all 5 booth divisions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {boothServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-saffron-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Initiatives
            </h2>
            <p className="text-xl text-gray-600">
              Major programs and initiatives launched for community development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="bg-white border-2 border-saffron-100 p-8 rounded-lg hover:border-saffron-300 transition-colors duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-saffron-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{initiative.title}</h3>
                      <span className="text-sm text-saffron-600 font-medium">{initiative.date}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{initiative.description}</p>
                    <div className="bg-saffron-50 px-4 py-2 rounded-lg">
                      <p className="text-saffron-700 font-medium">{initiative.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Political Issues */}
      <section className="py-16 bg-gradient-to-r from-saffron-600 to-bjp-orange text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Political Assistance?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us for voter registration, documentation help, or any political guidance. 
              We're here to serve you 24/7.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+919000000000"
                className="bg-white text-saffron-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2"
              >
                <Phone size={20} />
                Call Now
              </a>
              <a
                href="https://wa.me/919000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
              >
                WhatsApp
              </a>
              <a
                href="mailto:contact@rrrpolitical.com"
                className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Political;