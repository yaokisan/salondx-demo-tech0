import { AppData } from '@/types';

export const appData: AppData = {
  apps: [
    {
      id: 'vision-board',
      name: 'VISION BOARD',
      concept: '戦略立案を支える視覚化エンジン',
      architectureImage: '/images/vision-board-architecture.svg',
      designIntent: 'ビジョンボードは、組織の戦略的思考を可視化し、チーム全体の認識を統一するためのプラットフォームです。複雑な事業戦略を直感的に理解できるインターフェースを提供し、意思決定の質とスピードを劇的に向上させます。',
      demoVideoUrl: 'https://www.youtube.com/embed/PLACEHOLDER_VIDEO_ID'
    },
    {
      id: 'focus-goal',
      name: 'Focus Goal',
      concept: '集中力を最大化する目標管理システム',
      architectureImage: '/images/focus-goal-architecture.svg',
      designIntent: 'Focus Goalは、個人とチームの目標設定から実行までを一元管理し、本当に重要なタスクへの集中を促進します。科学的なタスク優先度付けアルゴリズムと直感的なUIにより、生産性の飛躍的向上を実現します。',
      demoVideoUrl: 'https://www.youtube.com/embed/PLACEHOLDER_VIDEO_ID'
    },
    {
      id: 'casting-base',
      name: 'Casting BASE',
      concept: '革新的な香盤表エディター',
      architectureImage: '/images/casting-base-architecture.svg',
      designIntent: 'Casting BASEは、エンターテインメント業界のキャスティング管理を根本から変革します。香盤表の作成・編集・共有を直感的に行える画期的なインターフェースにより、制作現場の効率を大幅に改善します。',
      demoVideoUrl: 'https://www.youtube.com/embed/PLACEHOLDER_VIDEO_ID',
      interactiveDemoUrl: 'https://casting-base-demo.example.com'
    }
  ],
  businessModel: {
    title: 'VBO事業 ビジネスモデル',
    imageUrl: '/images/vbo-business-model.svg',
    description: 'VBO事業の包括的なビジネスモデル図'
  },
  targetAudience: {
    title: 'VBO事業 想定ターゲット',
    imageUrl: '/images/vbo-target-audience.svg',
    description: 'VBO事業が対象とする顧客層の分析'
  },
  promotionalVideoUrl: 'https://www.youtube.com/embed/PLACEHOLDER_PROMO_VIDEO',
  invitationMessage: '少しでも興味を持っていただけたら、気軽に連絡をください。一緒に新しい未来を創造していきましょう。',
  xAccountUrl: 'https://x.com/your_account'
};