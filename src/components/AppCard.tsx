'use client';

import { useState } from 'react';
import Image from 'next/image';
import { App } from '@/types';
import ImageModal from './ImageModal';
import VideoModal from './VideoModal';

interface AppCardProps {
  app: App;
}

export default function AppCard({ app }: AppCardProps) {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg p-6 mx-3 first:ml-6 last:mr-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{app.name}</h3>
          <p className="text-sm text-gray-600 italic">{app.concept}</p>
        </div>

        <div className="mb-4">
          <div 
            className="relative w-full aspect-video bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => setIsImageModalOpen(true)}
          >
            <Image
              src={app.architectureImage}
              alt={`${app.name} アーキテクチャ図`}
              fill
              className="object-contain"
              sizes="(max-width: 320px) 280px, 320px"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all flex items-center justify-center">
              <div className="bg-white bg-opacity-80 px-2 py-1 rounded text-xs opacity-0 hover:opacity-100 transition-opacity">
                クリックで拡大
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
            {app.designIntent}
          </div>
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
              className="block w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium text-center transition-colors"
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