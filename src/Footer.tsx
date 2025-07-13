import React from 'react';
import { useTranslation } from 'react-i18next';
import { Linkedin, Mail, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">CO</span>
              </div>
              <span className="font-bold text-xl">Clifford Ondieki</span>
            </div>
            <p className="text-gray-400 mb-4">
              {t('hero.tagline')}
            </p>
            <p className="text-gray-400 text-sm">
              {t('contact.location')}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/clifford-ondieki"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:clifford.ondieki@example.com"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/clifford-ondieki"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Philosophy</h3>
            <p className="text-gray-400 text-sm italic">
              "Engineering Empathy: Building systems that serve humanity with purpose and understanding."
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Clifford Ondieki. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;