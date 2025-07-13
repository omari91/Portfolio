import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Lightbulb, TrendingUp, Star, Globe, Target } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useTranslation();

  const sections = [
    {
      key: 'spark',
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      key: 'evolution',
      icon: TrendingUp,
      color: 'from-blue-500 to-purple-500'
    },
    {
      key: 'guiding',
      icon: Star,
      color: 'from-purple-500 to-pink-500'
    },
    {
      key: 'heritage',
      icon: Globe,
      color: 'from-green-500 to-teal-500'
    },
    {
      key: 'vision',
      icon: Target,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
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
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 leading-relaxed">
            {t('about.intro')}
          </p>
        </motion.div>

        <div className="space-y-16">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.key}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-8`}
              >
                <div className="flex-shrink-0">
                  <div className={`w-20 h-20 bg-gradient-to-br ${section.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {t(`about.${section.key}.title`)}
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t(`about.${section.key}.content`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Core Competencies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Excellence</h3>
              <div className="space-y-2">
                {['Energy Systems Optimization', 'Predictive Analytics & AI', 'System Architecture', 'Data-Driven Decision Making'].map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Leadership & Impact</h3>
              <div className="space-y-2">
                {['Cross-Cultural Team Leadership', 'Strategic Program Management', 'Stakeholder Engagement', 'Mentoring & Development'].map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;