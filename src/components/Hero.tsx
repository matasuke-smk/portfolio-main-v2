'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

const Hero = () => {
  const scrollToWorks = () => {
    const worksSection = document.querySelector('#works');
    if (worksSection) {
      worksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(0, 191, 255, 0.05) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(0, 191, 255, 0.05) 100%)'
      }}
    >
      {/* 背景装飾 */}
      <motion.div
        className="absolute inset-0 opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{ 
            background: 'radial-gradient(circle, rgba(0, 191, 255, 0.1) 0%, transparent 70%)',
            filter: 'blur(40px)'
          }}
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
          style={{ 
            background: 'radial-gradient(circle, rgba(0, 191, 255, 0.08) 0%, transparent 70%)',
            filter: 'blur(30px)'
          }}
          animate={{ 
            x: [0, -80, 0], 
            y: [0, 60, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
      </motion.div>

      <div className="container-section relative z-10">
        <div className="text-center">
          {/* メインタイトル */}
          <motion.h1
            className="font-accent font-bold mb-6"
            style={{ 
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              color: 'var(--color-black)',
              lineHeight: '1.1',
              letterSpacing: '0.02em'
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {SITE_CONFIG.name}
          </motion.h1>

          {/* サブタイトル */}
          <motion.p
            className="font-accent text-xl lg:text-2xl mb-8"
            style={{ color: 'var(--color-gray-dark)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Web Developer & Designer
          </motion.p>

          {/* キャッチコピー */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <p 
              className="font-main text-lg lg:text-xl mb-3"
              style={{ color: 'var(--color-black)' }}
            >
              {SITE_CONFIG.description}
            </p>
            <p 
              className="font-accent text-base lg:text-lg opacity-80"
              style={{ color: 'var(--color-gray-dark)' }}
            >
              {SITE_CONFIG.subDescription}
            </p>
          </motion.div>

          {/* アクションボタン */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.a
              href="#works"
              onClick={(e) => {
                e.preventDefault();
                scrollToWorks();
              }}
              className="font-accent font-semibold px-8 py-4 rounded-full text-white text-base lg:text-lg tracking-wide transition-all duration-300 relative overflow-hidden group shadow-lg hover:shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, var(--color-accent) 0%, rgba(0, 191, 255, 0.8) 100%)',
                minWidth: '200px'
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* ホバー時の背景エフェクト */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 191, 255, 0.9) 0%, var(--color-accent) 100%)'
                }}
              />
              <span className="relative z-10">作品を見る</span>
            </motion.a>

            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="font-accent font-semibold px-8 py-4 rounded-full text-base lg:text-lg tracking-wide transition-all duration-300 relative group hover:shadow-lg"
              style={{
                color: 'var(--color-accent)',
                border: '2px solid var(--color-accent)',
                minWidth: '200px'
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                backgroundColor: 'var(--color-accent)',
                color: 'white'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">お問い合わせ</span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* スクロール誘導 */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        onClick={scrollToWorks}
      >
        <motion.div
          className="flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <p className="font-accent text-sm mb-2" style={{ color: 'var(--color-gray-dark)' }}>
            Scroll
          </p>
          <motion.div
            className="p-2 rounded-full border-2 hover:bg-accent hover:text-white transition-all duration-300"
            style={{ borderColor: 'var(--color-accent)', color: 'var(--color-accent)' }}
            whileHover={{ scale: 1.1 }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;