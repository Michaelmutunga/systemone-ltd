import { useCallback, useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import rfidGate from '@/assets/products/rfid-security-gate-1.png';
import rfidReader from '@/assets/products/rfid-desktop-reader-1.png';
import inventoryReader from '@/assets/products/inventory-stock-taker-1.png';
import selfCheckinKiosk from '@/assets/products/self-checkin-kiosk-1.png';

const slides = [
  {
    title: 'RFID Library Management',
    description: 'Automate item identification, circulation, inventory, and library security.',
    image: selfCheckinKiosk,
  },
  {
    title: 'RFID Asset Tracking',
    description: 'Identify and track valuable assets across departments, rooms, and facilities.',
    image: inventoryReader,
  },
  {
    title: 'RFID Security Gates',
    description: 'Monitor movement and protect books, equipment, and institutional assets.',
    image: rfidGate,
  },
  {
    title: 'RFID Inventory Management',
    description: 'Speed up stock checks and connect RFID workflows with existing operations.',
    image: rfidReader,
  },
];

const AUTOPLAY_DELAY = 5500;

const RfidHeroCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const updateSelectedIndex = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    updateSelectedIndex();
    emblaApi.on('select', updateSelectedIndex);
    emblaApi.on('reInit', updateSelectedIndex);

    return () => {
      emblaApi.off('select', updateSelectedIndex);
      emblaApi.off('reInit', updateSelectedIndex);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || isPaused) return;

    const timer = window.setInterval(() => {
      emblaApi.scrollNext();
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(timer);
  }, [emblaApi, isPaused]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="RFID solutions"
    >
      <div className="overflow-hidden rounded-2xl shadow-large bg-white" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={slide.title}
              className="min-w-0 shrink-0 grow-0 basis-full"
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slides.length}: ${slide.title}`}
            >
              <div className="relative h-full min-h-[360px] bg-white p-6 sm:p-8 flex flex-col">
                <div className="flex-1 flex items-center justify-center rounded-xl bg-secondary/10 p-4">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-56 sm:h-64 w-full object-contain"
                  />
                </div>
                <div className="pt-5">
                  <h2 className="text-2xl font-bold text-dark-grey">{slide.title}</h2>
                  <p className="mt-2 text-professional-grey">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
        <button
          type="button"
          onClick={scrollPrev}
          className="pointer-events-auto h-10 w-10 rounded-full bg-white/90 text-primary shadow-md flex items-center justify-center hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="Previous RFID solution"
        >
          <ArrowLeft size={18} />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          className="pointer-events-auto h-10 w-10 rounded-full bg-white/90 text-primary shadow-md flex items-center justify-center hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="Next RFID solution"
        >
          <ArrowRight size={18} />
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            onClick={() => scrollTo(index)}
            className={`h-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
              selectedIndex === index ? 'w-8 bg-primary' : 'w-2.5 bg-primary/25 hover:bg-primary/40'
            }`}
            aria-label={`Go to ${slide.title}`}
            aria-current={selectedIndex === index ? 'true' : undefined}
          />
        ))}
      </div>
    </div>
  );
};

export default RfidHeroCarousel;
