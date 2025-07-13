import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Lightbulb, Heart, Globe, Zap } from 'lucide-react';

const Philosophy: React.FC = () => {
  const { t } = useTranslation();

  const principles = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation with Purpose",
      description: "Technology should solve real problems and improve lives, not just showcase technical prowess."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Engineering with Empathy",
      description: "Understanding human needs and cultural contexts is essential for creating meaningful solutions."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Perspective",
      description: "Combining diverse viewpoints from Kenya and Germany to create universally applicable solutions."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Continuous Learning",
      description: "Embracing challenges as opportunities to grow and adapt in an ever-evolving technological landscape."
    }
  ];

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
            {t('philosophy.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('philosophy.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg max-w-none mb-16"
        >
          <p className="text-gray-700 leading-relaxed mb-6">
            My engineering philosophy is rooted in the belief that technology should be a bridge—connecting cultures, 
            solving problems, and creating opportunities for everyone. Growing up in Kenya taught me that the best 
            solutions often come from understanding constraints and working creatively within them.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            In Germany, I've learned the value of systematic thinking and precision. But I've also discovered that 
            innovation flourishes when we combine methodical approaches with the resourcefulness and community spirit 
            I learned in Africa.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            Every project I undertake is guided by a simple question: "How can this serve humanity better?" 
            Whether it's optimizing power systems or developing AI applications, the human element remains central to my work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-blue-600 rounded-full flex items-center justify-center text-white mb-6">
                {principle.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {principle.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center bg-gradient-to-r from-orange-500 to-blue-600 rounded-lg p-8 text-white"
        >
          <h2 className="text-2xl font-bold mb-4">My Mission</h2>
          <p className="text-lg opacity-90">
            To create technology that honors both innovation and humanity, bridging cultures and 
            creating solutions that make the world a little bit better, one project at a time.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Philosophy;