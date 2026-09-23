import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import PrefetchLink from '@/components/PrefetchLink';

// Import one representative image per hardware product
import biometric1 from '@/assets/products/biometric-system-1.webp';
import breathalyzer1 from '@/assets/products/breathalyzer-1.png';
import inventory1 from '@/assets/products/inventory-stock-taker-1.webp';
import rfidReader1 from '@/assets/products/rfid-desktop-reader-1.webp';
import rfidGate1 from '@/assets/products/rfid-security-gate-1.webp';
import rfidTag1 from '@/assets/products/rfid-tag-1.webp';
import kiosk1 from '@/assets/products/self-checkin-kiosk-1.webp';
import turnstile1 from '@/assets/products/turnstile-1.webp';

const HardwareCarousel = () => {
  const products = [
    { image: biometric1, name: 'Biometric System' },
    { image: breathalyzer1, name: 'Kamnyweso Breathalyzer' },
    { image: inventory1, name: 'Inventory Stock Taker' },
    { image: rfidReader1, name: 'RFID Desktop Reader' },
    { image: rfidGate1, name: 'RFID Security Gate' },
    { image: rfidTag1, name: 'RFID Tag' },
    { image: kiosk1, name: 'Self Check-in Kiosk' },
    { image: turnstile1, name: 'Turnstile' },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 3
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="bg-secondary/10 py-12 overflow-hidden">
      <div className="container-width mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-dark-grey text-center">
          Our Hardware Products
        </h2>
      </div>
      
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-dark-grey p-3 rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Previous products"
        >
          <ChevronLeft size={32} />
        </button>
        
        <button
          onClick={scrollNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-dark-grey p-3 rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Next products"
        >
          <ChevronRight size={32} />
        </button>
        
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary/10 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary/10 to-transparent z-10 pointer-events-none" />
        
        {/* Carousel container */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex-[0_0_auto] w-64 mx-4"
              >
                <PrefetchLink
                  to="/hardware-products"
                  className="block group relative cursor-pointer h-64"
                >
                  <div className="w-full h-full rounded-lg bg-white p-4 shadow-md group-hover:shadow-xl transition-shadow relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                    {/* Hover overlay with product name */}
                    <div className="absolute inset-0 bg-primary/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white font-semibold text-center px-4">
                        {product.name}
                      </p>
                    </div>
                  </div>
                </PrefetchLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HardwareCarousel;
