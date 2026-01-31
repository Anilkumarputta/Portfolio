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
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set visible to true when element enters viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optionally unobserve after first intersection for performance
          if (currentRef) {
            observer.unobserve(currentRef);
          }
        }
      },
      { threshold, rootMargin }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}
