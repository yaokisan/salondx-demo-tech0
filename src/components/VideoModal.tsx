'use client';

import { useEffect } from 'react';

interface VideoModalProps {
  videoUrl: string;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export default function VideoModal({ videoUrl, isOpen, onClose, title }: VideoModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleEscape = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      onKeyDown={handleEscape}
    >
      <div className="relative w-full max-w-4xl">
        <button
          className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300 z-10"
          onClick={onClose}
        >
          ×
        </button>
        
        {title && (
          <h3 className="text-white text-lg mb-4 text-center">{title}</h3>
        )}
        
        <div 
          className="relative w-full aspect-video bg-black rounded-lg overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <iframe
            src={videoUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0"
          />
        </div>
      </div>
    </div>
  );
}