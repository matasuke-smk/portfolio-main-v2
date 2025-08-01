'use client';

import { motion } from 'framer-motion';
import { SKILLS } from '@/lib/constants';

const About = () => {
  return (
    <section
      id="about"
      className="section-spacing"
      style={{ backgroundColor: 'var(--color-white)' }}
    >
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center content-spacing"
        >
          <h2 className="font-accent font-bold text-4xl lg:text-5xl heading-spacing-medium" style={{ color: 'var(--color-black)' }}>
            ABOUT
          </h2>
          <p className="text-lg section-description" style={{ color: 'var(--color-gray-dark)' }}>
            コミュニケーションを重視し、AIを活用した効率的な開発でクライアントの想いを形にします。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* プロフィール */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-accent font-bold text-2xl mb-6" style={{ color: 'var(--color-black)' }}>
              プロフィール
            </h3>
            <div className="prose prose-lg">
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-gray-dark)' }}>
                Web制作・フロントエンド開発を専門とするフリーランスとして活動しています。
                丁寧なヒアリングと密なコミュニケーションを心がけ、お客様の想いを形にすることを大切にしています。
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-gray-dark)' }}>
                最新技術とAIツールを積極的に活用することで、高品質なWebサイトを効率的に制作。
                個人事業主様からスタートアップ・ベンチャー企業様まで、幅広いクライアント様のプロジェクトをサポートしています。
              </p>
            </div>
          </motion.div>

          {/* スキル */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-accent font-bold text-2xl mb-6" style={{ color: 'var(--color-black)' }}>
              スキル
            </h3>
            <div className="space-y-4">
              {SKILLS.map((skill, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="font-medium" style={{ color: 'var(--color-gray-darker)' }}>
                    {skill.name}
                  </span>
                  <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full"
                      style={{ backgroundColor: 'var(--color-accent)' }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                  <span className="text-sm font-semibold" style={{ color: 'var(--color-accent)' }}>
                    {skill.level}%
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;