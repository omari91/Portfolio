import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap, Brain, Globe } from 'lucide-react';

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: "Smart Grid Optimization System",
      description: "AI-powered system for optimizing electrical grid efficiency in rural Kenya, reducing power losses by 30%.",
      technologies: ["Python", "TensorFlow", "IoT", "Power Systems"],
      category: "Engineering",
      icon: <Zap className="w-6 h-6" />,
      image: "https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Cultural Bridge AI",
      description: "Machine learning platform that helps international teams understand cultural communication patterns.",
      technologies: ["React", "Node.js", "OpenAI", "MongoDB"],
      category: "AI/ML",
      icon: <Brain className="w-6 h-6" />,
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Sustainable Energy Monitor",
      description: "IoT-based monitoring system for renewable energy installations in developing regions.",
      technologies: ["Arduino", "React", "Firebase", "Solar Systems"],
      category: "IoT",
      icon: <Globe className="w-6 h-6" />,
      image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('projects.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-orange-600">
                    {project.icon}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 text-orange-600 hover:text-orange-700 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">
            Interested in collaborating on a project or learning more about my work?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-orange-600 hover:to-blue-700 transition-all duration-300"
          >
            <span>Let's Work Together</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;