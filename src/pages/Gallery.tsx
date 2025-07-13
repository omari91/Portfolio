import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Camera, Users } from 'lucide-react';

const Gallery: React.FC = () => {
  const galleryItems = [
    {
      image: 'https://images.pexels.com/photos/2850347/pexels-photo-2850347.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Power Infrastructure in Kenya',
      description: 'Hands-on problem-solving in Kenya\'s energy infrastructure',
      location: 'Kitale, Kenya',
      icon: MapPin
    },
    {
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Berlin Tech Innovation',
      description: 'Collaborating and innovating at the heart of Berlin\'s tech scene',
      location: 'Berlin, Germany',
      icon: Users
    },
    {
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Moments of Reflection',
      description: 'Finding clarity in moments of stillness: My world beyond the code',
      location: 'Personal',
      icon: Camera
    },
    {
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'AI & Machine Learning',
      description: 'Developing predictive systems for industrial applications',
      location: 'Research Lab',
      icon: Users
    },
    {
      image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Healthcare Technology',
      description: 'Building systems that ensure reliable access to vital services',
      location: 'Health Tech',
      icon: Users
    },
    {
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Community Engagement',
      description: 'Fostering STEM education and mentoring the next generation',
      location: 'Community',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Visual Journey
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700">
            From the Grids of Kenya to the Innovations of Berlin: A Visual Story
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon className="w-4 h-4" />
                      <span className="text-sm">{item.location}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Journey Milestones
          </h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 to-blue-600"></div>
            
            <div className="space-y-12">
              {[
                { year: '2018', title: 'Engineering Foundation', description: 'Started journey in electrical engineering, Kenya' },
                { year: '2020', title: 'First Major Project', description: 'Kinangop Wind Integration project launched' },
                { year: '2022', title: 'Berlin Innovation', description: 'Moved to Berlin, embracing tech innovation' },
                { year: '2024', title: 'Purpose-Driven Leadership', description: 'Leading technical programs with empathy' }
              ].map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="text-orange-600 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-700">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500 to-blue-600 rounded-full border-4 border-white shadow-lg">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;