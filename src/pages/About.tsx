import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Award, Heart } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('about.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
              alt="Clifford Ondieki"
              className="w-full rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <MapPin className="w-6 h-6 text-orange-500" />
              <span className="text-lg text-gray-700">From Kitale, Kenya to Berlin, Germany</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <Calendar className="w-6 h-6 text-blue-500" />
              <span className="text-lg text-gray-700">Engineering Journey Since 2015</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <Award className="w-6 h-6 text-green-500" />
              <span className="text-lg text-gray-700">Electrical & Software Engineering</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <Heart className="w-6 h-6 text-red-500" />
              <span className="text-lg text-gray-700">Passionate about Innovation & Impact</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="prose prose-lg max-w-none"
        >
          <p className="text-gray-700 leading-relaxed mb-6">
            My journey began in the vibrant town of Kitale, Kenya, where I first discovered my passion for understanding how things work. 
            This curiosity led me to pursue electrical engineering, where I learned to bridge the gap between theoretical knowledge and practical solutions.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Today, I work in Berlin's dynamic tech ecosystem, where I combine my engineering background with cutting-edge software development. 
            My experience spans from power systems in Kenya to AI-driven applications in Germany, always with a focus on creating technology that serves humanity.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            I believe that the best innovations come from understanding diverse perspectives and combining them with technical excellence. 
            My Kenyan heritage teaches me the value of community and resilience, while my European experience shows me the power of systematic innovation.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;