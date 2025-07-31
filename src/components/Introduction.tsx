export default function Introduction() {
  return (
    <section className="introduction">
      <h2>自己紹介</h2>
      <p>
        はじめまして、またすけです。<br />
        Web制作を専門とするフリーランスエンジニアとして活動しています。
      </p>
      <p>
        「お客様のビジネス成功が、私の成功」という想いで、<br />
        単なるWebサイト制作ではなく、売上向上や業務効率化など、<br />
        具体的な成果につながる提案を心がけています。
      </p>

      <style jsx>{`
        .introduction {
          margin-bottom: 3rem;
        }

        h2 {
          font-size: 2rem;
          color: #2c3e50;
          border-bottom: 3px solid #3498db;
          padding-bottom: 0.5rem;
          margin-bottom: 1.5rem;
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