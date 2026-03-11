import React, { useState } from 'react';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

interface YouTubeVideoCarouselProps {
  videos: string[];
  title?: string;
}

// Extract YouTube video ID from various URL formats
const extractVideoId = (url: string): string | null => {
  if (!url || typeof url !== 'string') return null;
  
  const trimmedUrl = url.trim();
  
  // If it's already just an ID (11 characters, alphanumeric and hyphens/underscores)
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmedUrl)) {
    return trimmedUrl;
  }

  // Handle different YouTube URL formats
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/watch\?.*v=([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/v\/([a-zA-Z0-9_-]{11})/,
  ];

  for (const pattern of patterns) {
    const match = trimmedUrl.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
};


const YouTubeVideoCarousel: React.FC<YouTubeVideoCarouselProps> = ({ 
  videos, 
  title = 'Testimonial Videos' 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Always show 1 video at a time
  const getItemsPerView = () => {
    return 1;
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  React.useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Ensure videos is an array and filter out invalid video IDs
  if (!videos || !Array.isArray(videos) || videos.length === 0) {
    return null;
  }

  const validVideos = videos
    .filter((video) => video && typeof video === 'string')
    .map((video) => extractVideoId(video))
    .filter((id): id is string => id !== null);

  // Don't render if no valid videos
  if (!validVideos || validVideos.length === 0) {
    return null;
  }

  const maxIndex = Math.max(0, validVideos.length - itemsPerView);
  const canGoNext = currentIndex < maxIndex;
  const canGoPrev = currentIndex > 0;

  const goToNext = () => {
    if (canGoNext) {
      setCurrentIndex(Math.min(currentIndex + 1, maxIndex));
    }
  };

  const goToPrev = () => {
    if (canGoPrev) {
      setCurrentIndex(Math.max(currentIndex - 1, 0));
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(Math.max(0, index), maxIndex));
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && canGoNext) {
      goToNext();
    }
    if (isRightSwipe && canGoPrev) {
      goToPrev();
    }
  };

  return (
    <div className="relative bg-white rounded-lg shadow-lg mb-10">
      <div className="rounded-t-lg py-1.5 px-3 bg-brandBlue">
        <div className="text-sm text-white font-bold tracking-wide text-center">
          {title}
        </div>
      </div>
      <div className="px-2 py-2 relative">
        {/* Navigation Arrows */}
        {validVideos.length > itemsPerView && (
          <>
            <button
              onClick={goToPrev}
              disabled={!canGoPrev}
              className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all ${
                !canGoPrev ? 'opacity-50 cursor-not-allowed' : ''
              } hidden lg:flex items-center justify-center`}
              aria-label="Previous video"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              disabled={!canGoNext}
              className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all ${
                !canGoNext ? 'opacity-50 cursor-not-allowed' : ''
              } hidden lg:flex items-center justify-center`}
              aria-label="Next video"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Video Container */}
        <div 
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
            }}
          >
            {validVideos.map((videoId, index) => (
              <div
                key={`${videoId}-${index}`}
                className="flex-shrink-0 px-1"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div
                  className="overflow-hidden rounded border border-brandBlue"
                  style={{
                    position: 'relative',
                    width: '100%',
                    paddingBottom: '45%',
                    height: 0
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%'
                  }}>
                    <LiteYouTubeEmbed
                      id={videoId}
                      title={`Testimonial Video ${index + 1}`}
                      poster="maxresdefault"
                      webp={true}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        {validVideos.length > itemsPerView && (
          <div className="flex justify-center mt-3 gap-1">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-brandBlue'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default YouTubeVideoCarousel;
