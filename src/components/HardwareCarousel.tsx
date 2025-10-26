// Import all hardware product images
import biometric1 from '@/assets/products/biometric-system-1.png';
import biometric2 from '@/assets/products/biometric-system-2.png';
import biometric3 from '@/assets/products/biometric-system-3.png';
import breathalyzer1 from '@/assets/products/breathalyzer-1.png';
import breathalyzer2 from '@/assets/products/breathalyzer-2.png';
import breathalyzer3 from '@/assets/products/breathalyzer-3.png';
import inventory1 from '@/assets/products/inventory-stock-taker-1.png';
import inventory2 from '@/assets/products/inventory-stock-taker-2.png';
import inventory3 from '@/assets/products/inventory-stock-taker-3.png';
import rfidReader1 from '@/assets/products/rfid-desktop-reader-1.png';
import rfidReader2 from '@/assets/products/rfid-desktop-reader-2.png';
import rfidReader3 from '@/assets/products/rfid-desktop-reader-3.png';
import rfidGate1 from '@/assets/products/rfid-security-gate-1.png';
import rfidGate2 from '@/assets/products/rfid-security-gate-2.png';
import rfidGate3 from '@/assets/products/rfid-security-gate-3.png';
import rfidTag1 from '@/assets/products/rfid-tag-1.png';
import rfidTag2 from '@/assets/products/rfid-tag-2.png';
import rfidTag3 from '@/assets/products/rfid-tag-3.png';
import kiosk1 from '@/assets/products/self-checkin-kiosk-1.png';
import kiosk2 from '@/assets/products/self-checkin-kiosk-2.png';
import kiosk3 from '@/assets/products/self-checkin-kiosk-3.png';
import turnstile1 from '@/assets/products/turnstile-1.png';
import turnstile2 from '@/assets/products/turnstile-4.png';
import turnstile3 from '@/assets/products/turnstile-5.png';

const HardwareCarousel = () => {
  const images = [
    biometric1, biometric2, biometric3,
    breathalyzer1, breathalyzer2, breathalyzer3,
    inventory1, inventory2, inventory3,
    rfidReader1, rfidReader2, rfidReader3,
    rfidGate1, rfidGate2, rfidGate3,
    rfidTag1, rfidTag2, rfidTag3,
    kiosk1, kiosk2, kiosk3,
    turnstile1, turnstile2, turnstile3
  ];

  return (
    <section className="bg-secondary/10 py-12 overflow-hidden">
      <div className="container-width mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-dark-grey text-center">
          Our Hardware Products
        </h2>
      </div>
      
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary/10 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary/10 to-transparent z-10" />
        
        {/* Infinite scroll container */}
        <div className="flex animate-infinite-scroll">
          {/* First set of images */}
          {images.map((image, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 w-64 h-64 mx-4"
            >
              <img
                src={image}
                alt={`Hardware product ${index + 1}`}
                className="w-full h-full object-contain rounded-lg bg-white p-4 shadow-md hover:shadow-xl transition-shadow"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {images.map((image, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 w-64 h-64 mx-4"
            >
              <img
                src={image}
                alt={`Hardware product ${index + 1}`}
                className="w-full h-full object-contain rounded-lg bg-white p-4 shadow-md hover:shadow-xl transition-shadow"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HardwareCarousel;
