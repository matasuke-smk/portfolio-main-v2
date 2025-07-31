'use client'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "田中様",
      company: "株式会社ABC",
      position: "代表取締役",
      content: "またすけさんのおかげで、想像以上のサイトが完成しました。特にAIを活用した開発スピードには驚きました。予算内で高品質なサイトを作っていただき、本当に感謝しています。",
      rating: 5
    },
    {
      id: 2,
      name: "佐藤様",
      company: "XYZマーケティング",
      position: "マーケティング部長",
      content: "コミュニケーションが非常にスムーズで、要望を的確に理解していただけました。納期も守っていただき、プロジェクトが円滑に進行しました。また次回もお願いしたいです。",
      rating: 5
    },
    {
      id: 3,
      name: "山田様",
      company: "個人事業主",
      position: "オンラインショップ運営",
      content: "予算が限られていましたが、大手制作会社と同等の品質で対応していただけました。定期的なフォローアップも心強く、長期的なパートナーシップを築けそうです。",
      rating: 5
    }
  ]

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">お客様の声</h2>
        <p className="section-subtitle">実際にご利用いただいたお客様からの評価</p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-mark">"</div>
                <p className="testimonial-text">{testimonial.content}</p>
                
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
              </div>
              
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="author-info">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-details">
                    <div className="company">{testimonial.company}</div>
                    <div className="position">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonials {
          padding: 6rem 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-title {
          text-align: center;
          font-size: 3rem;
          margin-bottom: 1rem;
          position: relative;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 2px;
        }

        .section-subtitle {
          text-align: center;
          opacity: 0.9;
          font-size: 1.2rem;
          margin-bottom: 4rem;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .testimonial-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border-radius: 15px;
          padding: 2rem;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.2);
        }

        .testimonial-content {
          margin-bottom: 2rem;
        }

        .quote-mark {
          font-size: 4rem;
          opacity: 0.3;
          line-height: 1;
          margin-bottom: 1rem;
        }

        .testimonial-text {
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .rating {
          display: flex;
          gap: 0.2rem;
        }

        .star {
          color: #f1c40f;
          font-size: 1.2rem;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .author-avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: bold;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .author-name {
          font-weight: 600;
          font-size: 1.1rem;
          margin-bottom: 0.3rem;
        }

        .company {
          opacity: 0.9;
          font-size: 0.9rem;
        }

        .position {
          opacity: 0.8;
          font-size: 0.8rem;
        }

        @media (max-width: 768px) {
          .testimonials {
            padding: 4rem 0;
          }

          .container {
            padding: 0 1rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .testimonial-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}