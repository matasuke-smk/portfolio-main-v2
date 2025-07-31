# Portfolio Website - またすけ

フリーランスWeb開発者「またすけ」のポートフォリオサイト

## 特徴

- Next.js 14 + TypeScript
- レスポンシブデザイン対応
- SEO最適化済み
- モジュール化されたコンポーネント構造
- 日本語コンテンツに最適化されたフォント設定

## 開発環境

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# プロダクションビルド
npm run build

# プロダクションサーバーの起動
npm run start
```

## プロジェクト構造

```
src/
├── app/
│   ├── globals.css      # グローバルスタイル
│   ├── layout.tsx       # レイアウトコンポーネント
│   └── page.tsx         # メインページ
└── components/
    ├── Hero.tsx         # ヒーローセクション
    ├── Introduction.tsx # 自己紹介セクション
    ├── Strengths.tsx    # 強みセクション
    ├── Skills.tsx       # スキルセクション
    └── ServiceInfo.tsx  # サービス情報セクション
```

## 含まれるコンテンツ

- メインキャッチコピー
- 自己紹介
- サービスの強み
- AI活用スキル
- 価格設定の説明

開発サーバーは `http://localhost:3000` で起動します。