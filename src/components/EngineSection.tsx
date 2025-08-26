'use client';

import Image from 'next/image';
import { App } from '@/types';
import AppCard from './AppCard';

interface EngineSectionProps {
  apps: App[];
}

export default function EngineSection({ apps }: EngineSectionProps) {
  return (
    <section className="bg-white">
      {/* Full Width Image */}
      <div className="w-full">
        <Image
          src="/images/engine-hero.jpg"
          alt="THE ENGINE"
          width={1200}
          height={600}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* Apps Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              3つのDXアプリケーション
            </h2>
          </div>
          
          {/* Swipe Indicator */}
          <div className="flex justify-center items-center mb-6">
            <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              <span className="text-sm text-blue-800 font-medium">横にスワイプ</span>
              <svg className="w-5 h-5 text-blue-600 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
          
          {/* Cards Container */}
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex space-x-4 pb-6 px-4" style={{ width: 'fit-content' }}>
              {apps.map((app, index) => (
                <div key={app.id} className={`${index === 0 ? 'ml-4' : ''} ${index === apps.length - 1 ? 'mr-4' : ''}`}>
                  <AppCard app={app} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {apps.map((_, index) => (
              <div key={index} className="w-2 h-2 bg-gray-300 rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}