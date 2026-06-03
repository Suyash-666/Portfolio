import { useEffect, useRef } from 'react';

/**
 * Adds `is-visible` to a ref's children when they intersect the viewport.
 * Used for the restrained scroll-reveal pattern (1px shift + fade).
 */
export default function useReveal(rootRef, options = {}) {
  const observerRef = useRef(null);

  useEffect(() => {
    const root = rootRef?.current ?? document;
    const targets = root.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || targets.length === 0) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        }
      },
      {
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.05,
        ...options,
      }
    );

    targets.forEach((el) => io.observe(el));
    observerRef.current = io;
    return () => io.disconnect();
  }, [rootRef, options]);
}
