import { ReactNode, useEffect, useRef } from 'react';

type MarqueeCarouselProps = {
  children: ReactNode;
  speed?: number;
};

const MarqueeCarousel = ({ children, speed = 80 }: MarqueeCarouselProps) => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ active: boolean; lastX: number }>({ active: false, lastX: 0 });

  const prefersReducedMotionRef = useRef<boolean>(
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  );

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    let frameId = 0;
    let lastTime = performance.now();

    const step = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      if (
        !dragRef.current.active &&
        !prefersReducedMotionRef.current &&
        !document.hidden
      ) {
        const halfWidth = track.scrollWidth / 2;
        let next = viewport.scrollLeft + speed * dt;
        if (next >= halfWidth) next -= halfWidth;
        viewport.scrollLeft = next;
      }

      frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frameId);
  }, [speed]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
        viewport.scrollLeft += event.deltaX;
        event.preventDefault();
      }
    };

    viewport.addEventListener('wheel', onWheel, { passive: false });

    return () => viewport.removeEventListener('wheel', onWheel);
  }, []);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    dragRef.current.active = true;
    dragRef.current.lastX = event.clientX;
    viewport.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;
    if (!viewport || !dragRef.current.active) return;

    viewport.scrollLeft += dragRef.current.lastX - event.clientX;
    dragRef.current.lastX = event.clientX;
  };

  const endDrag = () => {
    dragRef.current.active = false;
  };

  return (
    <div className="relative">
      <div
        ref={viewportRef}
        className="no-scrollbar overflow-x-auto cursor-grab active:cursor-grabbing"
        style={{ touchAction: 'pan-y' }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <div ref={trackRef} className="flex w-max">
          {children}
        </div>
      </div>

      {/* Edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent" />
    </div>
  );
};

export default MarqueeCarousel;