'use client'

import Hero from '@/components/Hero'
import Introduction from '@/components/Introduction'
import Strengths from '@/components/Strengths'
import Skills from '@/components/Skills'
import ServiceInfo from '@/components/ServiceInfo'

export default function Home() {
  return (
    <main className="container">
      <Hero />
      <Introduction />
      <Strengths />
      <Skills />
      <ServiceInfo />

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          font-family: 'Hiragino Sans', 'ヒラギノ角ゴ ProN W3', 'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, sans-serif;
          line-height: 1.8;
          color: #333;
        }

        @media (max-width: 768px) {
          .container {
            padding: 1rem;
          }
        }
      `}</style>
    </main>
  )
}