'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedNumberProps {
  target: number;
  suffix?: string;
  duration?: number;
}

export default function AnimatedNumber({
  target,
  suffix = '',
  duration = 2000,
}: AnimatedNumberProps) {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const startTime = performance.now();

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // easeOutQuart — быстро растёт, плавно замедляется
            const eased = 1 - Math.pow(1 - progress, 4);
            setCurrent(Math.floor(eased * target));

            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {current}
      {suffix}
    </span>
  );
}
