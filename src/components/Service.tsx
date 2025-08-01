'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { SERVICES } from '@/lib/constants';

const Service = () => {
  return (
    <section
      id="service"
      className="section-spacing"
      style={{ backgroundColor: 'var(--color-gray-light)' }}
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
            SERVICE & PRICE
          </h2>
          <p className="text-lg section-description" style={{ color: 'var(--color-gray-dark)' }}>
            お客様のニーズに合わせた柔軟なサービスプランをご用意しています。<br />
            すべて税抜価格となっており、詳細はお気軽にご相談ください。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 h-full">
                <div className="p-8">
                  <h3 className="font-accent font-bold text-xl mb-4" style={{ color: 'var(--color-black)' }}>
                    {service.title}
                  </h3>
                  
                  <div className="mb-6">
                    <span className="text-3xl font-bold" style={{ color: 'var(--color-accent)' }}>
                      {service.price}
                    </span>
                  </div>

                  <p className="text-sm mb-6 leading-relaxed" style={{ color: 'var(--color-gray-dark)' }}>
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check 
                          size={16} 
                          className="mr-3 mt-0.5 flex-shrink-0"
                          style={{ color: 'var(--color-accent)' }}
                        />
                        <span className="text-sm" style={{ color: 'var(--color-gray-darker)' }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-center">
                    <span className="text-sm font-medium" style={{ color: 'var(--color-gray)' }}>
                      納期: {service.duration}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-gray-dark)' }}>
            上記は基本料金の目安です。プロジェクトの規模や要件により変動いたします。<br />
            まずはお気軽にご相談ください。お見積もりは無料です。
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;