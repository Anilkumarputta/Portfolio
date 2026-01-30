"use client";

import { useState } from 'react';
import Image from 'next/image';
import { User, Image as ImageIcon } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  fallbackType?: 'profile' | 'project';
}

export default function ImageWithFallback({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  loading = 'lazy',
  fallbackType = 'project',
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (error) {
    // SVG Fallback based on type
    if (fallbackType === 'profile') {
      return (
        <div 
          className={`flex items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 ${className}`}
          style={{ width, height }}
        >
          <User className="text-primary" size={width / 2} />
        </div>
      );
    }
    
    // Project fallback
    return (
      <div 
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 ${className}`}
        style={{ width, height }}
      >
        <ImageIcon className="text-primary mb-2" size={width / 4} />
        <span className="text-xs text-zinc-500 dark:text-zinc-400 text-center px-4">
          Project Preview
        </span>
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-zinc-200 via-zinc-100 to-zinc-200 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 animate-pulse ${className}`}
        />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        {...(!priority && { loading })}
        onError={() => setError(true)}
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
}
