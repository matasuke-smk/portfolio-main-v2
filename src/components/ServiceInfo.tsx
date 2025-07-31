export default function ServiceInfo() {
  return (
    <section className="service-info">
      <h2>なぜ高品質なのに低価格？</h2>
      <ol>
        <li>最新の開発ツールで作業効率を大幅改善</li>
        <li>個人事業主なので、余計な管理コストがゼロ</li>
        <li>初案件獲得キャンペーン中（通常価格の30%OFF）</li>
      </ol>
      <p>
        ただし、安いだけではありません。<br />
        効率化で生まれた時間は、すべて品質向上に投資。<br />
        だから、価格以上の価値をお届けできるのです。
      </p>

      <style jsx>{`
        .service-info {
          background-color: #fff3cd;
          padding: 2rem;
          border-radius: 10px;
          border: 1px solid #ffeaa7;
          margin-bottom: 3rem;
        }

        h2 {
          font-size: 2rem;
          color: #2c3e50;
          border-bottom: 3px solid #3498db;
          padding-bottom: 0.5rem;
          margin-bottom: 1.5rem;
        }

        ol {
          padding-left: 1.5rem;
          margin-bottom: 1.5rem;
        }

        ol li {
          padding: 0.5rem 0;
          font-size: 1.1rem;
        }

        p {
          margin-bottom: 1rem;
          font-size: 1.1rem;
          line-height: 1.8;
        }

        @media (max-width: 768px) {
          h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}