'use client';

import { App } from '@/types';
import AppCard from './AppCard';

interface EngineSectionProps {
  apps: App[];
}

export default function EngineSection({ apps }: EngineSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            THE ENGINE
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            異次元の生産性を支える3つの経営システム
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <div className="flex pb-6" style={{ width: 'fit-content' }}>
            {apps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-8 text-sm text-gray-500">
          ← スワイプして他のアプリを見る →
        </div>
      </div>
    </section>
  );
}