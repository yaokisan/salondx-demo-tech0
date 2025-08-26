'use client';

import { useState } from 'react';
import { App } from '@/types';
import ImageModal from './ImageModal';
import VideoModal from './VideoModal';

interface AppCardProps {
  app: App;
}

export default function AppCard({ app }: AppCardProps) {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isDesignIntentExpanded, setIsDesignIntentExpanded] = useState(false);

  return (
    <>
      <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg p-6 mx-3 first:ml-6 last:mr-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{app.name}</h3>
          <p className="text-sm text-gray-600 italic">{app.concept}</p>
        </div>

        <div className="mb-4">
          <div 
            className="w-full h-48 bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow border border-gray-200 p-4 relative group"
            onClick={() => setIsImageModalOpen(true)}
          >
            <img
              src={app.architectureImage}
              alt={`${app.name} アーキテクチャ図`}
              className="w-full h-full object-contain"
              style={{ display: 'block' }}
            />
            <div className="absolute top-2 right-2 bg-white bg-opacity-90 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity shadow">
              クリックで拡大
            </div>
          </div>
        </div>

        <div className="mb-6">
          <button
            onClick={() => setIsDesignIntentExpanded(!isDesignIntentExpanded)}
            className="w-full text-left bg-gray-50 hover:bg-gray-100 px-4 py-3 rounded-lg transition-colors flex items-center justify-between"
          >
            <span className="text-sm font-medium text-gray-900">設計意図を見る</span>
            <svg 
              className={`w-4 h-4 text-gray-600 transition-transform ${isDesignIntentExpanded ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {isDesignIntentExpanded && (
            <div className="mt-4 text-sm text-gray-700 leading-relaxed whitespace-pre-line bg-gray-50 p-4 rounded-lg">
              {app.designIntent}
            </div>
          )}
        </div>

        <div className="space-y-3">
          {app.demoVideoUrl && (
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              デモ動画を見る
            </button>
          )}
          
          {app.interactiveDemoUrl && (
            <a
              href={app.interactiveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm font-medium text-center transition-colors"
            >
              体験デモを試す
            </a>
          )}
        </div>
      </div>

      <ImageModal
        src={app.architectureImage}
        alt={`${app.name} アーキテクチャ図`}
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
      />

      {app.demoVideoUrl && (
        <VideoModal
          videoUrl={app.demoVideoUrl}
          isOpen={isVideoModalOpen}
          onClose={() => setIsVideoModalOpen(false)}
          title={`${app.name} デモ動画`}
        />
      )}
    </>
  );
}