'use client';

import { useEffect } from 'react';

interface VideoFileModalProps {
  src: string;
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export default function VideoFileModal({ src, isOpen, onClose, title }: VideoFileModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl w-full max-h-full">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
          aria-label="閉じる"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div 
          className="bg-white rounded-lg p-4 max-h-full overflow-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-lg font-semibold mb-4 text-gray-900">{title}</h3>
          
          <div className="flex justify-center">
            <video
              src={src}
              controls
              autoPlay
              loop
              muted
              className="max-w-full max-h-[70vh] rounded-lg shadow-lg"
              style={{ objectFit: 'contain' }}
            >
              お使いのブラウザは動画再生をサポートしていません。
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}