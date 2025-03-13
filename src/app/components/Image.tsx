'use client';

import NextImage from 'next/image';
import { useState } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export default function Image({ src, alt, width = 800, height = 600, className = '', priority = false }: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <NextImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`
          duration-700 ease-in-out
          ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
        `}
        onLoadingComplete={() => setIsLoading(false)}
        priority={priority}
      />
    </div>
  );
} 