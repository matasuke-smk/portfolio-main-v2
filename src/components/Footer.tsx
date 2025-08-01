'use client';

import { motion } from 'framer-motion';
import { Github, Twitter } from 'lucide-react';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-black)', color: 'var(--color-white)' }}>
      <div className="container-section">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* ブランド情報 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-accent font-bold text-xl mb-4">
                {SITE_CONFIG.name}
              </h3>
              <p className="text-sm leading-relaxed opacity-80 mb-4">
                {SITE_CONFIG.description}
              </p>
              <p className="text-xs font-accent opacity-60">
                {SITE_CONFIG.subDescription}
              </p>
            </motion.div>

            {/* ナビゲーション */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <h4 className="font-accent font-semibold text-lg mb-4">
                Navigation
              </h4>
              <nav className="space-y-2">
                {['Home', 'Works', 'About', 'Service', 'Contact'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-sm opacity-80 hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </nav>
            </motion.div>

            {/* SNSリンク */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center md:text-right"
            >
              <h4 className="font-accent font-semibold text-lg mb-4">
                Follow Me
              </h4>
              <div className="flex justify-center md:justify-end space-x-4">
                <motion.a
                  href="https://twitter.com/matasuke_dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-gray-600 hover:border-accent transition-colors duration-300"
                  whileHover={{ scale: 1.1, borderColor: 'var(--color-accent)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Twitter size={20} />
                </motion.a>
                <motion.a
                  href="https://github.com/matasuke-smk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-gray-600 hover:border-accent transition-colors duration-300"
                  whileHover={{ scale: 1.1, borderColor: 'var(--color-accent)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* コピーライト */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 py-6 text-center"
        >
          <p className="text-xs opacity-60">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;