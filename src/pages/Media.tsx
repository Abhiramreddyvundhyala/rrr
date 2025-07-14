import React from 'react';
import { Instagram, Facebook, Youtube, Camera, Play, ExternalLink } from 'lucide-react';

const Media = () => {
  const socialMedia = [
    {
      platform: 'Instagram',
      handle: '@ramreddy_rrr',
      url: 'https://instagram.com/ramreddy_rrr',
      icon: Instagram,
      color: 'from-pink-500 to-purple-600',
      followers: '10.5K',
      description: 'Follow for daily updates, project launches, and community events'
    },
    {
      platform: 'Facebook',
      handle: 'r.ram.reddy.2025',
      url: 'https://facebook.com/r.ram.reddy.2025',
      icon: Facebook,
      color: 'from-blue-500 to-blue-600',
      followers: '25.2K',
      description: 'Connect with our community and stay updated on political activities'
    },
    {
      platform: 'YouTube',
      handle: 'RRR Official',
      url: 'https://youtube.com/@rrr-official',
      icon: Youtube,
      color: 'from-red-500 to-red-600',
      followers: '5.8K',
      description: 'Watch speeches, project walkthroughs, and community events'
    },
  ];

  

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-saffron-600 to-bjp-orange text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Media Gallery</h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Stay connected with R.R.R through our social media channels and latest updates
            </p>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Follow R.R.R on Social Media
            </h2>
            <p className="text-xl text-gray-600">
              Connect with us on various platforms for regular updates
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {socialMedia.map((platform, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className={`bg-gradient-to-r ${platform.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <platform.icon className="w-12 h-12" />
                    <div className="text-right">
                      <h3 className="text-2xl font-bold">{platform.followers}</h3>
                      <p className="text-sm opacity-90">Followers</p>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{platform.platform}</h3>
                  <p className="text-sm opacity-90">@{platform.handle}</p>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{platform.description}</p>
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-saffron-500 text-white py-3 px-4 rounded-lg hover:bg-saffron-600 transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    Follow <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* Instagram Feed Integration Note */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg p-8 text-white text-center">
            <Instagram className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Live Instagram Feed</h2>
            <p className="text-xl mb-6">
              See our latest Instagram posts, stories, and reels directly from @ramreddy_rrr
            </p>
            <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-6">
              <p className="text-sm">
                Note: To display live Instagram feed, you'll need to integrate with Instagram Basic Display API
                using your Instagram App ID and Access Token.
              </p>
            </div>
            <a
              href="https://instagram.com/ramreddy_rrr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center gap-2"
            >
              Visit Instagram <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Facebook Feed Integration Note */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-8 text-white text-center">
            <Facebook className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Live Facebook Feed</h2>
            <p className="text-xl mb-6">
              Stay updated with our latest Facebook posts and community interactions
            </p>
            <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-6">
              <p className="text-sm">
                Note: To display live Facebook feed, you'll need to integrate with Facebook Graph API
                using your Facebook App ID and Page Access Token.
              </p>
            </div>
            <a
              href="https://facebook.com/r.ram.reddy.2025"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center gap-2"
            >
              Visit Facebook <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;