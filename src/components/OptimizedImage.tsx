
import React, { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

/**
 * Optimized image component with lazy loading and performance enhancements
 * 
 * Features:
 * - Lazy loading by default for performance
 * - Loading states with skeleton placeholder
 * - Error handling with fallback
 * - Responsive image optimization
 * - Accessibility compliant
 */
const OptimizedImage: React.FC<OptimizedImageProps> = React.memo(({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  priority = false
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const handleImageError = useCallback(() => {
    setImageError(true);
    setImageLoaded(true);
  }, []);

  if (imageError) {
    return (
      <div 
        className={cn(
          "bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm",
          className
        )}
        style={{ width, height }}
        role="img"
        aria-label={alt}
      >
        Immagine non disponibile
      </div>
    );
  }

  return (
    <div className="relative">
      {!imageLoaded && (
        <div 
          className={cn(
            "absolute inset-0 bg-gray-200 animate-pulse rounded-lg",
            className
          )}
          style={{ width, height }}
        />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        onLoad={handleImageLoad}
        onError={handleImageError}
        className={cn(
          "transition-opacity duration-300",
          imageLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        decoding="async"
      />
    </div>
  );
});

// Set display name for debugging
OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;
