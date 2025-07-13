import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Heart, Lightbulb, Compass, Users } from 'lucide-react';

const Philosophy: React.FC = () => {
  const { t } = useTranslation();

  const insights = t('philosophy.insights', { returnObjects: true }) as string[];

  const philosophyIcons = [Heart, Lightbulb, Compass, Users];

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
            {t('philosophy.title')}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 leading-relaxed">
            {t('philosophy.subtitle')}
          </p>
        </motion.div>

        {/* Core Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-orange-50 via-white to-blue-50 rounded-2xl p-8 mb-16 border border-orange-100"
        >
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Engineering Empathy</h2>
            <p className="text-lg text-gray-700 italic">
              "The most robust systems—whether technical or human—are built with deep understanding and a commitment to shared purpose."
            </p>
          </div>
        </motion.div>

        {/* Insights Grid */}
        <div className="space-y-8">
          {insights.map((insight, index) => {
            const Icon = philosophyIcons[index % philosophyIcons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-6 p-6 bg-white rounded-xl shadow-lg`}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                    "{insight}"
                  </blockquote>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Purpose-Driven Innovation</h3>
              <p className="text-gray-700">Every solution must serve a meaningful purpose, improving lives and communities.</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaborative Excellence</h3>
              <p className="text-gray-700">The best solutions emerge from diverse perspectives and collective wisdom.</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuous Learning</h3>
              <p className="text-gray-700">Every challenge is an opportunity to grow, adapt, and discover new possibilities.</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Human-Centered Design</h3>
              <p className="text-gray-700">Technology should amplify human potential, not replace human connection.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Philosophy;