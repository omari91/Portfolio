import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const { t } = useTranslation();

  const blogPosts = [
    {
      id: 1,
      title: "From Kitale to Berlin: An Engineering Journey",
      excerpt: "Reflecting on the path that led me from rural Kenya to Germany's tech capital.",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Personal"
    },
    {
      id: 2,
      title: "Building Bridges: Engineering with Cultural Perspective",
      excerpt: "How my Kenyan heritage influences my approach to solving complex technical problems.",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Engineering"
    },
    {
      id: 3,
      title: "The Future of AI in Sustainable Development",
      excerpt: "Exploring how artificial intelligence can drive sustainable solutions in developing nations.",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Technology"
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
            {t('blog.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </motion.div>

        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                {post.title}
              </h2>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center text-orange-600 font-medium group-hover:text-orange-700 transition-colors">
                <span>Read more</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;