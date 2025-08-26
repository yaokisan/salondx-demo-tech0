'use client';

import { useState } from 'react';
import { App } from '@/types';
import ImageModal from './ImageModal';
import VideoFileModal from './VideoFileModal';

interface AppCardProps {
  app: App;
}

export default function AppCard({ app }: AppCardProps) {
  const [isDemoGifModalOpen, setIsDemoGifModalOpen] = useState(false);
  const [isDemoVideoModalOpen, setIsDemoVideoModalOpen] = useState(false);
  const [isArchitectureModalOpen, setIsArchitectureModalOpen] = useState(false);
  const [isDesignIntentExpanded, setIsDesignIntentExpanded] = useState(false);
  const [isArchitectureExpanded, setIsArchitectureExpanded] = useState(false);

  return (
    <>
      <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg p-6 mx-3 first:ml-6 last:mr-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{app.name}</h3>
          <p className="text-sm text-gray-600 italic">{app.concept}</p>
        </div>

        {/* Demo Thumbnail Display */}
        <div className="mb-4">
          <div 
            className="w-full h-48 bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow border border-gray-200 p-4 relative group"
            onClick={() => {
              if (app.demoVideoFile) {
                setIsDemoVideoModalOpen(true);
              } else {
                setIsDemoGifModalOpen(true);
              }
            }}
          >
            <img
              src={app.demoThumbnailImage}
              alt={`${app.name} デモ`}
              className="w-full h-full object-contain"
              style={{ display: 'block' }}
            />
            <div className="absolute top-2 right-2 bg-white bg-opacity-90 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity shadow">
              タップでデモを再生
            </div>
          </div>
        </div>

        <div className="mb-6">
          <button
            onClick={() => setIsDesignIntentExpanded(!isDesignIntentExpanded)}
            className="w-full text-left bg-gray-50 hover:bg-gray-100 active:bg-gray-200 active:scale-95 px-4 py-3 rounded-lg transition-all duration-150 flex items-center justify-between"
          >
            <span className="text-sm font-medium text-gray-900">アプリの設計思想</span>
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
          {/* Architecture Diagram Accordion */}
          <button
            onClick={() => setIsArchitectureExpanded(!isArchitectureExpanded)}
            className="w-full text-left bg-gray-50 hover:bg-gray-100 active:bg-gray-200 active:scale-95 px-4 py-3 rounded-lg transition-all duration-150 flex items-center justify-between"
          >
            <span className="text-sm font-medium text-gray-900">アーキテクチャ</span>
            <svg 
              className={`w-4 h-4 text-gray-600 transition-transform ${isArchitectureExpanded ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {isArchitectureExpanded && (
            <div className="mt-4 bg-gray-50 p-4 rounded-lg">
              <div 
                className="w-full h-48 bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow border border-gray-200 p-4 relative group"
                onClick={() => setIsArchitectureModalOpen(true)}
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
          )}
          
          {/* Explanatory text for VISION BOARD and Focus Goal */}
          {(app.id === 'vision-board' || app.id === 'focus-goal') && (
            <div className="text-xs text-gray-600 text-left leading-relaxed mt-2">
              ※PC版アプリ&完全自社専用なので、触ってもらえるデモアプリが間に合いませんでした。無念。
            </div>
          )}
          
          {app.interactiveDemoUrl && (
            <div className="space-y-2">
              <a
                href={app.interactiveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg text-base font-bold text-center transition-colors shadow-lg hover:shadow-xl"
              >
                体験デモを試す
              </a>
            </div>
          )}
          
          {/* Demo usage note for Casting BASE */}
          {app.interactiveDemoUrl && (
            <div className="text-xs text-gray-600 text-left leading-relaxed mt-2">
              ※スマホでも一応使えるのでデモを用意しましたが、PC推奨です。香盤表エディターはスマホで触れないのでデモ動画をご覧ください。
            </div>
          )}
        </div>
      </div>

      {/* Demo GIF Modal */}
      {app.demoGifImage && (
        <ImageModal
          src={app.demoGifImage}
          alt={`${app.name} デモ`}
          isOpen={isDemoGifModalOpen}
          onClose={() => setIsDemoGifModalOpen(false)}
        />
      )}
      
      {/* Demo Video Modal */}
      {app.demoVideoFile && (
        <VideoFileModal
          src={app.demoVideoFile}
          isOpen={isDemoVideoModalOpen}
          onClose={() => setIsDemoVideoModalOpen(false)}
          title={`${app.name} デモ`}
        />
      )}

      {/* Architecture Modal */}
      <ImageModal
        src={app.architectureImage}
        alt={`${app.name} アーキテクチャ図`}
        isOpen={isArchitectureModalOpen}
        onClose={() => setIsArchitectureModalOpen(false)}
      />

    </>
  );
}