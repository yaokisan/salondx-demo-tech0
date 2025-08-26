'use client';

import { useState } from 'react';
import { BusinessAsset } from '@/types';
import ImageModal from './ImageModal';

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

  return (
    <>
      {/* Journey Hero Image */}
      <div className="w-full">
        <img
          src="/images/journey-hero.png"
          alt="Salon DX Journey"
          className="w-full h-auto object-cover"
        />
      </div>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          
          {/* Promotional Video First */}
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Salon DX プロモーション動画
            </h3>
            <div className="bg-gray-100 rounded-2xl p-6 shadow-lg">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={promotionalVideoUrl}
                  className="absolute inset-0 w-full h-full rounded-xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div 
              className="cursor-pointer group"
              onClick={() => setSelectedImage(businessModel)}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow border border-gray-200">
                <div className="w-full h-64 bg-white p-4 relative">
                  <img
                    src={businessModel.imageUrl}
                    alt={businessModel.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    style={{ display: 'block' }}
                  />
                  <div className="absolute top-2 right-2 bg-white bg-opacity-90 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity shadow">
                    クリックで拡大
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
              <div className="bg-white rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow border border-gray-200">
                <div className="w-full h-64 bg-white p-4 relative">
                  <img
                    src={targetAudience.imageUrl}
                    alt={targetAudience.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    style={{ display: 'block' }}
                  />
                  <div className="absolute top-2 right-2 bg-white bg-opacity-90 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity shadow">
                    クリックで拡大
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
    </>
  );
}