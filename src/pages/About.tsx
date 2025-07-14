import React from 'react';
import { Crown, Users, Building, Award, Calendar, MapPin } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      year: '2020',
      title: 'Appointed as BJP Division President',
      description: 'Elected as Division President of Bagh Amberpet, leading community development initiatives.',
      icon: Crown,
    },
    {
      year: '2021',
      title: 'Head of 5 Booth Divisions',
      description: 'Expanded leadership role to oversee multiple booth divisions across the constituency.',
      icon: Users,
    },
    {
      year: '2022',
      title: 'Real Estate Ventures',
      description: 'Launched successful real estate projects focusing on affordable housing solutions.',
      icon: Building,
    },
    {
      year: '2023',
      title: 'Community Service Awards',
      description: 'Recognized for outstanding service to the community and voter assistance programs.',
      icon: Award,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-saffron-600 to-bjp-orange text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About R.R.R</h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Learn about the journey, vision, and commitment of Rekulampaty Ram Reddy
            </p>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Political & Business Leader
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Rekulampaty Ram Reddy, popularly known as R.R.R, is a dedicated political leader and successful entrepreneur 
                who has been serving the people of Bagh Amberpet with unwavering commitment and integrity.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                As the BJP Division President of Bagh Amberpet and Head of 5 Booth Divisions, R.R.R has implemented 
                numerous community development programs and has been instrumental in bringing positive change to the region.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                His dual expertise in politics and real estate has enabled him to understand the ground realities of 
                urban development and housing needs, making him a valuable asset to both the political and business communities.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-saffron-50 px-4 py-2 rounded-lg">
                  <span className="text-saffron-600 font-medium">BJP Leader</span>
                </div>
                <div className="bg-blue-50 px-4 py-2 rounded-lg">
                  <span className="text-blue-600 font-medium">Real Estate Developer</span>
                </div>
                <div className="bg-green-50 px-4 py-2 rounded-lg">
                  <span className="text-green-600 font-medium">Community Servant</span>
                </div>
              </div>
            </div>
          <div className="flex justify-center">
            <div className="w-96
             h-96 bg-gradient-to-br from-saffron-500 to-bjp-orange rounded-lg flex items-center justify-center shadow-2xl overflow-hidden">
              <img 
                src="/IMG_4049.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-saffron-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Journey of Success
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in R.R.R's political and business career
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-saffron-200"></div>
            
            {achievements.map((achievement, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-saffron-500 rounded-full flex items-center justify-center mr-4">
                        <achievement.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-saffron-600 font-bold text-lg">{achievement.year}</span>
                        <h3 className="text-xl font-semibold text-gray-900">{achievement.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-saffron-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-saffron-500 to-bjp-orange p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Vision</h3>
              <p className="text-lg">
                To create a developed, prosperous, and self-reliant Bagh Amberpet where every citizen has access to 
                quality infrastructure, affordable housing, and opportunities for growth while preserving our cultural values.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Mission</h3>
              <p className="text-lg">
                To serve the people with dedication, transparency, and integrity while promoting sustainable development 
                through innovative real estate solutions and effective political leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Focus */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Areas of Focus
            </h2>
            <p className="text-xl text-gray-600">
              Key areas where R.R.R is making a significant impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <Users className="w-16 h-16 text-saffron-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Community Development</h3>
              <p className="text-gray-600">
                Implementing programs for education, healthcare, and infrastructure development in Bagh Amberpet.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <Building className="w-16 h-16 text-saffron-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Affordable Housing</h3>
              <p className="text-gray-600">
                Developing quality residential projects that provide affordable housing solutions for all income groups.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <MapPin className="w-16 h-16 text-saffron-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Voter Services</h3>
              <p className="text-gray-600">
                Providing assistance with voter registration, documentation, and addressing citizen grievances effectively.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;