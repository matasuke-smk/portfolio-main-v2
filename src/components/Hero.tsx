export default function Hero() {
  return (
    <section className="hero">
      <h1 className="main-catchphrase">
        対話から生まれる、確かなカタチ。<br />
        最新技術で実現する、高品質×スピード開発
      </h1>
      <p className="sub-catchphrase">Quality First, Efficiency Driven</p>

      <style jsx>{`
        .hero {
          text-align: center;
          margin-bottom: 4rem;
          padding: 3rem 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 10px;
        }

        .main-catchphrase {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          line-height: 1.4;
        }

        .sub-catchphrase {
          font-size: 1.2rem;
          opacity: 0.9;
          font-style: italic;
        }

        @media (max-width: 768px) {
          .main-catchphrase {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </section>
  )
}