'use client'

export default function Strengths() {
  return (
    <section className="strengths">
      <h2>私の強み</h2>
      <ul>
        <li>✓ 徹底したヒアリングで、本当のニーズを引き出します</li>
        <li>✓ 最新の開発ツールを駆使し、通常の半分の期間で納品</li>
        <li>✓ 浮いた時間で、デザインの細部やSEO対策を徹底</li>
        <li>✓ 納品後も月1回の定期チェックで、長期的にサポート</li>
      </ul>
      <p>
        効率的な開発手法により、大手制作会社の半額程度で<br />
        同等以上のクオリティをご提供。特に、予算を抑えながら<br />
        しっかりとしたWebサイトが欲しい中小企業様から<br />
        ご好評をいただいています。
      </p>
      <p>
        まずはお気軽にご相談ください。<br />
        貴社の課題を一緒に解決していきましょう。
      </p>

      <style jsx>{`
        .strengths {
          background-color: #f8f9fa;
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

        ul {
          list-style: none;
          padding: 0;
          margin-bottom: 1.5rem;
        }

        ul li {
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