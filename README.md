# Salon DX Dashboard

Tech0成果発表会ポスターセッション用のダッシュボードアプリケーション

## 概要

このアプリケーションは、「異次元の生産性を持つ経営エンジン」と「未来へつながる失敗の物語」を視覚的・体験的に紹介するモバイルファーストのWebアプリケーションです。

### 主要機能

- **THE ENGINE**: 3つの社内DXアプリ（VISION BOARD, Focus Goal, Casting BASE）の紹介
- **THE JOURNEY**: Salon DX事業の軌跡とビジネスモデルの紹介
- **THE INVITATION**: 訪問者からのコンタクトを促すCTAセクション

### 技術特徴

- Next.js 15 + TypeScript
- 静的サイト生成（SSG）対応
- モバイルレスポンシブデザイン
- 画像拡大表示機能（ピンチ・ズーム対応）
- YouTube動画埋め込み
- Azure App Service自動デプロイ

## 開発環境のセットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ブラウザで http://localhost:3000 にアクセス
```

## ビルド・デプロイ

```bash
# 本番用ビルド
npm run build

# 静的ファイル生成（Azure App Service用）
# ※ ビルド時に自動実行されます
npm run export
```

## カスタマイズ方法

### データの更新

`src/data/appData.ts` を編集してアプリケーションの内容を変更できます：

- アプリ情報（名前、コンセプト、設計意図）
- アーキテクチャ図の画像パス
- デモ動画のYouTube URL
- ビジネスモデル図、ターゲット図
- 招待メッセージ、X（Twitter）アカウント

### 画像の追加

`public/images/` ディレクトリに画像を配置し、`appData.ts` でパスを指定してください。

推奨フォーマット:
- アーキテクチャ図: 16:9比率（800x450px推奨）
- SVGまたはJPG/PNG形式

### 動画の追加

YouTube動画のembedURLを使用してください：
```
https://www.youtube.com/embed/VIDEO_ID
```

## デプロイメント

### Azure App Service

GitHub Actionsによる自動デプロイが設定済みです。

1. GitHubリポジトリでSecrets設定
   - `AZURE_WEBAPP_PUBLISH_PROFILE`: Azure App Serviceの発行プロファイル

2. `main`ブランチにプッシュすると自動デプロイ実行

### 手動デプロイ

```bash
# ビルド実行
npm run build

# `out` ディレクトリをAzure App Serviceにアップロード
```

## プロジェクト構造

```
src/
├── app/                # Next.js App Router
│   ├── page.tsx       # メインページ
│   ├── layout.tsx     # レイアウト
│   └── globals.css    # グローバルスタイル
├── components/         # Reactコンポーネント
│   ├── HeroSection.tsx
│   ├── EngineSection.tsx
│   ├── JourneySection.tsx
│   ├── InvitationSection.tsx
│   ├── AppCard.tsx
│   ├── ImageModal.tsx
│   └── VideoModal.tsx
├── data/
│   └── appData.ts     # アプリケーションデータ
└── types/
    └── index.ts       # TypeScript型定義

public/
└── images/            # 静的画像ファイル
```

## 技術要件

- Node.js 18.x以上
- NPM
- 現代的なWebブラウザ（ES6+対応）

## ライセンス

このプロジェクトはTech0成果発表会用として開発されました。
