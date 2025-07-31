'use client'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="main-catchphrase">
            対話から生まれる、<br />
            <span className="highlight">確かなカタチ</span>
          </h1>
          <p className="sub-catchphrase">
            最新技術で実現する、高品質×スピード開発
          </p>
          <p className="hero-description">
            AI活用により開発効率を2倍に。大手制作会社の半額で<br />
            同等以上のクオリティをお届けします
          </p>
          
          <div className="hero-actions">
            <a href="#contact" className="cta-primary">
              無料相談を申し込む
            </a>
            <a href="#works" className="cta-secondary">
              制作実績を見る
            </a>
          </div>
        </div>
        
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-number">50+</div>
            <div className="stat-label">制作実績</div>
          </div>
          <div className="stat">
            <div className="stat-number">2x</div>
            <div className="stat-label">開発速度</div>
          </div>
          <div className="stat">
            <div className="stat-number">50%</div>
            <div className="stat-label">コスト削減</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          position: relative;
          overflow: hidden;
          padding-top: 80px;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><polygon fill="rgba(255,255,255,0.05)" points="0,1000 1000,800 1000,1000"/></svg>');
          pointer-events: none;
        }

        .hero-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .main-catchphrase {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .highlight {
          background: linear-gradient(45deg, #f093fb 0%, #f5576c 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .sub-catchphrase {
          font-size: 1.5rem;
          opacity: 0.95;
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .hero-description {
          font-size: 1.1rem;
          opacity: 0.9;
          margin-bottom: 3rem;
          line-height: 1.7;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .cta-primary,
        .cta-secondary {
          padding: 1rem 2rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 180px;
        }

        .cta-primary {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
        }

        .cta-primary:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        .cta-secondary {
          background: transparent;
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.5);
        }

        .cta-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .hero-stats {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .stat {
          text-align: center;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          background: linear-gradient(45deg, #f093fb 0%, #f5576c 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          font-size: 0.9rem;
          opacity: 0.9;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .hero {
            min-height: 80vh;
            padding-top: 100px;
          }

          .hero-content {
            grid-template-columns: 1fr;
            gap: 3rem;
            padding: 0 1rem;
          }

          .main-catchphrase {
            font-size: 2.5rem;
          }

          .sub-catchphrase {
            font-size: 1.2rem;
          }

          .hero-actions {
            flex-direction: column;
            align-items: center;
          }

          .hero-stats {
            flex-direction: row;
            justify-content: space-around;
            gap: 1rem;
          }

          .stat {
            flex: 1;
            padding: 1rem;
          }

          .stat-number {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </section>
  )
}