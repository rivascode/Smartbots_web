import { useEffect, useRef, useState } from "react";

interface UseInViewOnceOptions {
  rootMargin?: string;
  threshold?: number;
}

export function useInViewOnce<T extends Element>({ rootMargin = "0px 0px -10% 0px", threshold = 0.15 }: UseInViewOnceOptions = {}) {
  const ref = useRef<T | null>(null);
  const [hasEnteredView, setHasEnteredView] = useState(false);

  useEffect(() => {
    if (hasEnteredView) return;
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === "undefined") {
      setHasEnteredView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setHasEnteredView(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasEnteredView, rootMargin, threshold]);

  return { ref, hasEnteredView } as const;
}

