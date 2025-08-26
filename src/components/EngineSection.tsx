'use client';

import Image from 'next/image';
import { App } from '@/types';
import AppCard from './AppCard';

interface EngineSectionProps {
  apps: App[];
}

export default function EngineSection({ apps }: EngineSectionProps) {
  return (
    <>
      {/* Hero Image Section */}
      <section className="relative w-full h-screen">
        <Image
          src="/images/engine-hero.jpg"
          alt="THE ENGINE"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              THE ENGINE
            </h1>
            <p className="text-xl md:text-2xl">
              異次元の生産性を支える3つの経営システム
            </p>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
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
      </section>
    </>
  );
}