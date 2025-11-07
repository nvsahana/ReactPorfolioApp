// Lightweight hook to auto-add `is-revealed` class to elements with data-reveal
import { useEffect } from 'react';

export default function useReveal(rootMargin = '0px 0px -8% 0px') {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add('is-revealed');
            // optionally unobserve after revealed
            observer.unobserve(el);
          }
        });
      },
      { root: null, rootMargin, threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [rootMargin]);
}
