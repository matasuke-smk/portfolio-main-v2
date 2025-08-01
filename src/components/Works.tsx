'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { WORKS } from '@/lib/constants';

const Works = () => {
  return (
    <section
      id="works"
      className="section-spacing"
      style={{ backgroundColor: 'var(--color-gray-light)' }}
    >
      <div className="container-section">
        {/* セクションヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center content-spacing"
        >
          <h2 className="font-accent font-bold text-4xl lg:text-5xl heading-spacing-medium" style={{ color: 'var(--color-black)' }}>
            WORKS
          </h2>
          <p className="text-lg section-description" style={{ color: 'var(--color-gray-dark)' }}>
            これまでに手がけた制作実績をご紹介します。<br />
            様々な業種・規模のプロジェクトに対応しております。
          </p>
        </motion.div>

        {/* 作品グリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WORKS.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                {/* 画像エリア */}
                <div className="relative h-64 overflow-hidden">
                  {/* プレースホルダー画像 */}
                  <div 
                    className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, var(--color-accent) 0%, rgba(0, 191, 255, 0.7) 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <div className="text-white text-center">
                      <h3 className="font-accent font-bold text-xl mb-2">{work.title}</h3>
                      <p className="text-sm opacity-90">{work.category}</p>
                    </div>
                  </div>

                  {/* ホバーオーバーレイ */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%)',
                    }}
                  >
                    <div className="text-center text-white px-6">
                      <p className="text-sm mb-4 leading-relaxed">{work.description}</p>
                      <div className="flex flex-wrap gap-2 justify-center mb-4">
                        {work.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-xs rounded-full font-medium"
                            style={{ 
                              backgroundColor: 'rgba(0, 191, 255, 0.2)',
                              border: '1px solid rgba(0, 191, 255, 0.3)'
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3 justify-center">
                        <motion.button
                          className="p-2 rounded-full transition-colors duration-300"
                          style={{ 
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)'
                          }}
                          whileHover={{ 
                            scale: 1.1,
                            backgroundColor: 'var(--color-accent)'
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink size={16} />
                        </motion.button>
                        <motion.button
                          className="p-2 rounded-full transition-colors duration-300"
                          style={{ 
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)'
                          }}
                          whileHover={{ 
                            scale: 1.1,
                            backgroundColor: 'var(--color-accent)'
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={16} />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>

                  {/* デモバッジ */}
                  {work.isDemo && (
                    <div className="absolute top-4 right-4">
                      <span 
                        className="px-3 py-1 text-xs font-semibold rounded-full text-white"
                        style={{ backgroundColor: 'rgba(255, 0, 0, 0.8)' }}
                      >
                        DEMO
                      </span>
                    </div>
                  )}
                </div>

                {/* コンテンツエリア */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span 
                      className="text-sm font-semibold tracking-wider uppercase"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      {work.category}
                    </span>
                    <span className="text-sm" style={{ color: 'var(--color-gray)' }}>
                      {work.duration}
                    </span>
                  </div>
                  
                  <h3 className="font-accent font-bold text-xl mb-3" style={{ color: 'var(--color-black)' }}>
                    {work.title}
                  </h3>
                  
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-gray-dark)' }}>
                    {work.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {work.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs rounded-full font-medium transition-colors duration-300"
                        style={{ 
                          backgroundColor: 'rgba(0, 191, 255, 0.1)',
                          color: 'var(--color-accent)',
                          border: '1px solid rgba(0, 191, 255, 0.2)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 追加情報 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-gray-dark)' }}>
            ※ 上記の制作実績は、技術力とデザイン力を示すためのデモ作品です。<br />
            実際のクライアントワークでは、守秘義務により一部の作品のみ公開しております。
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Works;