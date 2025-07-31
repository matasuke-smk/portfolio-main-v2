'use client'

export default function Works() {
  const works = [
    {
      id: 1,
      title: "コーポレートサイト制作",
      client: "株式会社サンプル",
      description: "企業の信頼性を高める洗練されたコーポレートサイトを制作。SEO対策により検索順位が大幅に向上。",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      duration: "2週間",
      result: "問い合わせ数が3倍に増加",
      image: "/images/work1.jpg"
    },
    {
      id: 2,
      title: "ECサイト構築",
      client: "オンラインショップ様",
      description: "ユーザビリティを重視したECサイトの構築。決済システムの統合と在庫管理機能を実装。",
      technologies: ["React", "Node.js", "Stripe API"],
      duration: "3週間",
      result: "売上が40%向上",
      image: "/images/work2.jpg"
    },
    {
      id: 3,
      title: "ランディングページ最適化",
      client: "マーケティング会社様",
      description: "コンバージョン率向上を目的としたLP制作。A/Bテストによる継続的な改善も実施。",
      technologies: ["Vue.js", "SCSS", "Google Analytics"],
      duration: "1週間",
      result: "CVRが250%改善",
      image: "/images/work3.jpg"
    }
  ]

  return (
    <section id="works" className="works">
      <div className="container">
        <h2 className="section-title">Works</h2>
        <p className="section-subtitle">これまでの制作実績をご紹介します</p>
        
        <div className="works-grid">
          {works.map((work) => (
            <div key={work.id} className="work-card">
              <div className="work-image-placeholder">
                <div className="work-overlay">
                  <h3>{work.title}</h3>
                  <p className="work-client">{work.client}</p>
                </div>
              </div>
              
              <div className="work-content">
                <p className="work-description">{work.description}</p>
                
                <div className="work-details">
                  <div className="work-info">
                    <span className="work-label">制作期間:</span>
                    <span>{work.duration}</span>
                  </div>
                  <div className="work-info">
                    <span className="work-label">成果:</span>
                    <span className="work-result">{work.result}</span>
                  </div>
                </div>

                <div className="work-technologies">
                  {work.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .works {
          padding: 6rem 0;
          background: rgba(255, 255, 255, 0.8);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-title {
          text-align: center;
          font-size: 3rem;
          color: #2c3e50;
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
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 2px;
        }

        .section-subtitle {
          text-align: center;
          color: #7f8c8d;
          font-size: 1.2rem;
          margin-bottom: 4rem;
        }

        .works-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 3rem;
        }

        .work-card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .work-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .work-image-placeholder {
          height: 200px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .work-overlay {
          text-align: center;
          color: white;
        }

        .work-overlay h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .work-client {
          opacity: 0.9;
          font-size: 1rem;
        }

        .work-content {
          padding: 2rem;
        }

        .work-description {
          color: #5a6c7d;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .work-details {
          margin-bottom: 1.5rem;
        }

        .work-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }

        .work-label {
          font-weight: 600;
          color: #2c3e50;
        }

        .work-result {
          color: #e74c3c;
          font-weight: 600;
        }

        .work-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-badge {
          background: #ecf0f1;
          color: #2c3e50;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .works {
            padding: 4rem 0;
          }

          .container {
            padding: 0 1rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .works-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .work-content {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}