import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for detecting when an element enters the viewport
 * @param {Object} options - IntersectionObserver options
 * @param {string} options.threshold - Threshold for triggering (default: 0.1)
 * @param {string} options.rootMargin - Root margin (default: '0px 0px -100px 0px')
 * @returns {[React.RefObject, boolean]} - Returns ref and visibility state
 */
export function useIntersectionObserver(options = {}) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const { threshold = 0.1, rootMargin = '0px 0px -100px 0px' } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set visible to true when element enters viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optionally unobserve after first intersection for performance
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}
