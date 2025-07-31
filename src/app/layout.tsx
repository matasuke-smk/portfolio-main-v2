import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'またすけ - Web制作フリーランス | 高品質×スピード開発',
  description: '対話から生まれる、確かなカタチ。最新技術で実現する、高品質×スピード開発。GitHub Copilot活用で開発効率2倍、大手制作会社の半額で同等以上のクオリティをご提供。',
  keywords: 'Web制作, フリーランス, Next.js, React, TypeScript, AI活用開発, GitHub Copilot, 高品質, 低価格',
  authors: [{ name: 'またすけ' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}