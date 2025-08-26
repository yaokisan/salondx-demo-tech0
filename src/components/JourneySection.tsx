'use client';

import { useState } from 'react';
import Image from 'next/image';
import { BusinessAsset } from '@/types';
import ImageModal from './ImageModal';
import VideoModal from './VideoModal';

interface JourneySectionProps {
  businessModel: BusinessAsset;
  targetAudience: BusinessAsset;
  promotionalVideoUrl: string;
}

export default function JourneySection({ 
  businessModel, 
  targetAudience, 
  promotionalVideoUrl 
}: JourneySectionProps) {
  const [selectedImage, setSelectedImage] = useState<BusinessAsset | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              THE JOURNEY
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              未来へつながる失敗の物語 - Salon DX事業の軌跡
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div 
              className="cursor-pointer group"
              onClick={() => setSelectedImage(businessModel)}
            >
              <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                <div className="relative aspect-video">
                  <Image
                    src={businessModel.imageUrl}
                    alt={businessModel.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all flex items-center justify-center">
                    <div className="bg-white bg-opacity-90 px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      クリックで拡大
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {businessModel.title}
                  </h3>
                  {businessModel.description && (
                    <p className="text-gray-600 text-sm">{businessModel.description}</p>
                  )}
                </div>
              </div>
            </div>

            <div 
              className="cursor-pointer group"
              onClick={() => setSelectedImage(targetAudience)}
            >
              <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                <div className="relative aspect-video">
                  <Image
                    src={targetAudience.imageUrl}
                    alt={targetAudience.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all flex items-center justify-center">
                    <div className="bg-white bg-opacity-90 px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      クリックで拡大
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {targetAudience.title}
                  </h3>
                  {targetAudience.description && (
                    <p className="text-gray-600 text-sm">{targetAudience.description}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              プロモーション動画
            </h3>
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
              </svg>
              動画を見る
            </button>
          </div>
        </div>
      </section>

      {selectedImage && (
        <ImageModal
          src={selectedImage.imageUrl}
          alt={selectedImage.title}
          isOpen={true}
          onClose={() => setSelectedImage(null)}
        />
      )}

      <VideoModal
        videoUrl={promotionalVideoUrl}
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        title="VBO事業 プロモーション動画"
      />
    </>
  );
}