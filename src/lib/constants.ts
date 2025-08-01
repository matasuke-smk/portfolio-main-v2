// サイト設定
export const SITE_CONFIG = {
  name: 'MATASUKE',
  title: 'MATASUKE - Web Developer Portfolio',
  description: '対話から生まれる、確かなカタチ。AIと共に創る、次世代のWeb体験',
  subDescription: 'Communication First, AI-Powered Development',
  url: 'https://matasuke-smk.github.io/portfolio-main-v2',
};

// ナビゲーション
export const NAVIGATION = [
  { name: 'HOME', href: '#home' },
  { name: 'WORKS', href: '#works' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SERVICE', href: '#service' },
  { name: 'CONTACT', href: '#contact' },
];

// 作品データ
export const WORKS = [
  {
    id: 'modern-corporate',
    title: 'モダンコーポレートサイト',
    category: 'IT企業',
    description: 'シンプルで洗練されたデザインのコーポレートサイト。レスポンシブ対応とSEO最適化を重視。',
    image: '/images/work-01.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    duration: '3週間',
    isDemo: true,
  },
  {
    id: 'portfolio-designer',
    title: 'ミニマルポートフォリオ',
    category: 'デザイナー向け',
    description: 'クリエイターの作品を美しく見せるポートフォリオサイト。アニメーションにこだわった設計。',
    image: '/images/work-02.jpg',
    technologies: ['React', 'Framer Motion', 'SCSS'],
    duration: '2週間',
    isDemo: true,
  },
  {
    id: 'ecommerce-apparel',
    title: 'アパレルECサイト',
    category: 'ファッション',
    description: 'ユーザビリティを重視したECサイト。カート機能と決済システムを実装。',
    image: '/images/work-03.jpg',
    technologies: ['Next.js', 'Stripe', 'Prisma'],
    duration: '6週間',
    isDemo: true,
  },
  {
    id: 'saas-landing',
    title: 'SaaSランディングページ',
    category: 'テクノロジー',
    description: 'コンバージョンを最大化するランディングページ。A/Bテストによる最適化済み。',
    image: '/images/work-04.jpg',
    technologies: ['Next.js', 'Analytics', 'Headless CMS'],
    duration: '2週間',
    isDemo: true,
  },
  {
    id: 'restaurant-site',
    title: '高級和食レストラン',
    category: '飲食店',
    description: '伝統と革新を表現したレストランサイト。予約システムとメニュー管理機能付き。',
    image: '/images/work-05.jpg',
    technologies: ['WordPress', 'Custom Theme', 'Booking System'],
    duration: '4週間',
    isDemo: true,
  },
  {
    id: 'clinic-site',
    title: '美容皮膚科クリニック',
    category: '医療・美容',
    description: '信頼感のあるクリニックサイト。予約機能と症例紹介ページを実装。',
    image: '/images/work-06.jpg',
    technologies: ['Next.js', 'Sanity CMS', 'Calendar API'],
    duration: '5週間',
    isDemo: true,
  },
];

// スキル
export const SKILLS = [
  { name: 'HTML5 / CSS3', level: 95 },
  { name: 'JavaScript (ES6+)', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'React / Next.js', level: 90 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'Responsive Design', level: 95 },
  { name: 'Git / GitHub', level: 85 },
  { name: 'AI Tools Integration', level: 80 },
];

// サービス
export const SERVICES = [
  {
    title: 'シンプルなLP制作',
    price: '¥80,000〜',
    description: '5ページ以内のランディングページ制作',
    features: [
      'レスポンシブ対応',
      'SEO基本設定',
      '問い合わせフォーム',
      '基本的なアニメーション',
    ],
    duration: '2週間〜',
  },
  {
    title: 'コーポレートサイト制作',
    price: '¥200,000〜',
    description: '企業の顔となるコーポレートサイト',
    features: [
      '10ページ程度',
      'CMS導入可能',
      'ニュース・お知らせ機能',
      '高度なアニメーション',
    ],
    duration: '1ヶ月〜',
  },
  {
    title: 'ECサイト構築',
    price: '¥300,000〜',
    description: '売上に直結するECサイト構築',
    features: [
      '商品管理システム',
      '決済システム導入',
      '在庫管理',
      'ユーザー管理',
    ],
    duration: '1.5ヶ月〜',
  },
  {
    title: '既存サイトの改修',
    price: '¥3,000〜/時間',
    description: 'サイトの部分的な修正・改善',
    features: [
      'デザイン修正',
      '機能追加',
      'パフォーマンス改善',
      'SEO対策',
    ],
    duration: '最低10時間〜',
  },
];

// お問い合わせ種別
export const CONTACT_TYPES = [
  '制作のご依頼',
  'お見積もり',
  '既存サイトの改修',
  'その他のご相談',
];

// SNSリンク
export const SOCIAL_LINKS = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/matasuke_dev',
    icon: 'Twitter',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/matasuke-smk',
    icon: 'GitHub',
  },
];