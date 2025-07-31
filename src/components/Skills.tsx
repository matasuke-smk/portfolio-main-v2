export default function Skills() {
  return (
    <section className="skills">
      <h2>Skills - AI活用部分</h2>
      <h3>最新技術を活用した効率開発</h3>
      <p>
        GitHub Copilotなどの開発支援ツールを駆使し、<br />
        開発スピードを2倍に。その分、品質チェックと<br />
        カスタマイズに時間をかけ、満足度の高い成果物を実現
      </p>

      <style jsx>{`
        .skills {
          background-color: #e8f4f8;
          padding: 2rem;
          border-radius: 10px;
          margin-bottom: 3rem;
        }

        h2 {
          font-size: 2rem;
          color: #2c3e50;
          border-bottom: 3px solid #3498db;
          padding-bottom: 0.5rem;
          margin-bottom: 1.5rem;
        }

        h3 {
          font-size: 1.5rem;
          color: #34495e;
          margin-bottom: 1rem;
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