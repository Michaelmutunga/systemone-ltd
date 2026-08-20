import { Shield, Fingerprint, Wind, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import { SITE } from '@/lib/site';
import Reveal from '@/components/Reveal';
import biometricSystem1 from '@/assets/products/biometric-system-1.png';
import biometricSystem2 from '@/assets/products/biometric-system-2.png';
import biometricSystem3 from '@/assets/products/biometric-system-3.png';
import inventoryStockTaker1 from '@/assets/products/inventory-stock-taker-1.png';
import inventoryStockTaker2 from '@/assets/products/inventory-stock-taker-2.png';
import inventoryStockTaker3 from '@/assets/products/inventory-stock-taker-3.png';
import rfidDesktopReader1 from '@/assets/products/rfid-desktop-reader-1.png';
import rfidDesktopReader2 from '@/assets/products/rfid-desktop-reader-2.png';
import rfidDesktopReader3 from '@/assets/products/rfid-desktop-reader-3.png';
import rfidTag1 from '@/assets/products/rfid-tag-1.png';
import rfidTag2 from '@/assets/products/rfid-tag-2.png';
import rfidTag3 from '@/assets/products/rfid-tag-3.png';
import turnstile1 from '@/assets/products/turnstile-1.png';
import turnstile2 from '@/assets/products/turnstile-2.png';
import turnstile4 from '@/assets/products/turnstile-4.png';
import turnstile5 from '@/assets/products/turnstile-5.png';
import rfidSecurityGate1 from '@/assets/products/rfid-security-gate-1.png';
import rfidSecurityGate2 from '@/assets/products/rfid-security-gate-2.png';
import rfidSecurityGate3 from '@/assets/products/rfid-security-gate-3.png';
import selfCheckinKiosk1 from '@/assets/products/self-checkin-kiosk-1.png';
import selfCheckinKiosk2 from '@/assets/products/self-checkin-kiosk-2.png';
import selfCheckinKiosk3 from '@/assets/products/self-checkin-kiosk-3.png';
import breathalyzer1 from '@/assets/products/breathalyzer-1.png';
import breathalyzer2 from '@/assets/products/breathalyzer-2.png';
import breathalyzer3 from '@/assets/products/breathalyzer-3.png';

const HardwareProducts = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'System One Ltd Hardware Products',
    url: `${SITE.url}/hardware-products`,
    itemListElement: [
      'RFID Tags',
      'RFID Desktop Readers',
      'Biometric Systems',
      'RFID Security Gates',
      'Turnstiles',
      'Self-check-in/check-out Kiosks',
      'Kamnyweso Breathalyzer',
    ].map((name, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name,
    })),
  };

  return (
    <Layout>
      <Seo
        title="Hardware Products | System One Ltd"
        description="Browse RFID tags, readers, biometric systems, security gates, turnstiles, kiosks, and the Kamnyweso Breathalyzer."
        canonicalPath="/hardware-products"
        schema={schema}
      />
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container-width section-padding">
          <Reveal className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield size={48} className="text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-dark-grey mb-6">
              Hardware Products
            </h1>
            <p className="text-xl text-professional-grey leading-relaxed">
              We supply a wide range of RFID and biometric hardware to complement our security 
              and ERP solutions. Quality hardware that ensures reliable performance and security.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Hardware Products Section */}
      <section className="section-padding bg-white blueprint-grid">
        <Reveal className="container-width">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-12 text-center">
              Our Hardware Solutions
            </h2>
            
            <div className="space-y-12">
              {/* RFID Tags */}
              <div className="bg-white border border-border rounded-xl p-6 card-hover">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield size={28} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-grey mb-2">
                      RFID Tags
                    </h3>
                    <p className="text-professional-grey">
                      Attach to books, assets, or ID cards for easy identification and tracking
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <img src={rfidTag1} alt="RFID Tags Roll" className="w-full h-48 object-contain rounded-lg bg-secondary/5 p-4" />
                  <img src={rfidTag2} alt="RFID Tag Strip" className="w-full h-48 object-contain rounded-lg bg-secondary/5 p-4" />
                  <img src={rfidTag3} alt="RFID Tag Sheet" className="w-full h-48 object-contain rounded-lg bg-secondary/5 p-4" />
                </div>
              </div>

              {/* RFID Desktop Readers */}
              <div className="bg-white border border-border rounded-xl p-6 card-hover">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield size={28} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-grey mb-2">
                      RFID Desktop Readers & Handheld Scanners
                    </h3>
                    <p className="text-professional-grey">
                      Enable fast scanning and efficient circulation management at service desks or on-the-go inventory tracking
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <img src={rfidDesktopReader1} alt="RFID Desktop Reader" className="w-full h-48 object-contain rounded-lg bg-secondary/5 p-4" />
                  <img src={rfidDesktopReader2} alt="RFID Desktop Reader" className="w-full h-48 object-contain rounded-lg bg-secondary/5 p-4" />
                  <img src={rfidDesktopReader3} alt="RFID Desktop Reader" className="w-full h-48 object-contain rounded-lg bg-secondary/5 p-4" />
                  <img src={inventoryStockTaker1} alt="Handheld RFID Scanner" className="w-full h-48 object-contain rounded-lg bg-secondary/5 p-4" />
                  <img src={inventoryStockTaker2} alt="Handheld RFID Scanner" className="w-full h-48 object-contain rounded-lg bg-secondary/5 p-4" />
                  <img src={inventoryStockTaker3} alt="Handheld RFID Scanner" className="w-full h-48 object-contain rounded-lg bg-secondary/5 p-4" />
                </div>
              </div>

              {/* Biometric Systems */}
              <div className="bg-white border border-border rounded-xl p-6 card-hover">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Fingerprint size={28} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-grey mb-2">
                      Biometric Systems
                    </h3>
                    <p className="text-professional-grey">
                      Fingerprint and facial recognition devices for secure access control and authentication
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <img src={biometricSystem1} alt="Biometric Fingerprint System" className="w-full h-48 object-contain rounded-lg bg-secondary/5 p-4" />
                  <img src={biometricSystem2} alt="Facial Recognition System" className="w-full h-48 object-contain rounded-lg bg-secondary/5 p-4" />
                  <img src={biometricSystem3} alt="Biometric Access Control" className="w-full h-48 object-contain rounded-lg bg-secondary/5 p-4" />
                </div>
              </div>

              {/* RFID Security Gates */}
              <div className="bg-white border border-border rounded-xl p-6 card-hover">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield size={28} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-grey mb-2">
                      RFID Security Gates
                    </h3>
                    <p className="text-professional-grey">
                      Prevent unauthorized removal of books and assets with advanced detection technology
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <img src={rfidSecurityGate1} alt="RFID Security Gate Main and Secondary" className="w-full h-64 object-contain rounded-lg bg-secondary/5 p-4" />
                  <img src={rfidSecurityGate2} alt="RFID Security Gate Sleek Design" className="w-full h-64 object-contain rounded-lg bg-secondary/5 p-4" />
                  <img src={rfidSecurityGate3} alt="RFID Security Gate with Display" className="w-full h-64 object-contain rounded-lg bg-secondary/5 p-4" />
                </div>
              </div>

              {/* Turnstiles */}
              <div className="bg-white border border-border rounded-xl p-6 card-hover">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield size={28} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-grey mb-2">
                      Turnstiles
                    </h3>
                    <p className="text-professional-grey">
                      Physical barriers that integrate with RFID and biometric systems for controlled entry points
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <img src={turnstile1} alt="Full Height Turnstile" className="w-full h-64 object-contain rounded-lg bg-secondary/5 p-4" />
                  <img src={turnstile2} alt="Double Lane Turnstile" className="w-full h-64 object-contain rounded-lg bg-secondary/5 p-4" />
                  <img src={turnstile4} alt="Tripod Turnstile" className="w-full h-64 object-contain rounded-lg bg-secondary/5 p-4" />
                  <img src={turnstile5} alt="Barrier Gate System" className="w-full h-64 object-contain rounded-lg bg-secondary/5 p-4" />
                </div>
              </div>

              {/* Self-check-in/check-out Kiosks */}
              <div className="bg-white border border-border rounded-xl p-6 card-hover">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield size={28} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-grey mb-2">
                      Self-check-in/check-out Kiosks
                    </h3>
                    <p className="text-professional-grey">
                      Automated kiosks that enable users to check in and check out materials independently, reducing wait times and improving user experience
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <img src={selfCheckinKiosk1} alt="Library Self-checkout Kiosk" className="w-full h-64 object-contain rounded-lg bg-secondary/5 p-4" />
                  <img src={selfCheckinKiosk2} alt="Self-service Check-in Kiosk" className="w-full h-64 object-contain rounded-lg bg-secondary/5 p-4" />
                  <img src={selfCheckinKiosk3} alt="Automated Checkout Station" className="w-full h-64 object-contain rounded-lg bg-secondary/5 p-4" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Kamnyweso Breathalyzer Featured Section */}
      <section className="section-padding mesh-gradient-subtle">
        <Reveal className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-accent rounded-2xl p-8 relative shadow-lg">
              <div className="absolute -top-3 -right-3 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                <Star size={14} />
                NEW
              </div>
              
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Wind size={32} className="text-accent" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-dark-grey mb-2">
                    Kamnyweso Breathalyzer
                  </h2>
                  <p className="text-professional-grey text-lg">
                    Our latest innovation in access control and facility safety
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-professional-grey mb-4">
                  Designed to detect alcohol consumption and prevent drunk individuals from accessing 
                  secure environments. Promotes safety, security, and responsible conduct in your facility.
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <h3 className="font-semibold text-dark-grey">Key Features:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Accurate and fast alcohol detection',
                    'Seamless integration with turnstiles and biometric systems',
                    'Prevents impaired individuals from gaining entry',
                    'Promotes safety, security, and responsible conduct',
                    'Suitable for workplaces, schools, hospitals, and government buildings'
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-2"
                    >
                      <CheckCircle size={18} className="flex-shrink-0 mt-0.5 text-accent" />
                      <span className="text-sm text-professional-grey">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-lg mb-6 bg-accent/5 border border-accent/20">
                <p className="text-sm text-dark-grey font-medium">
                  👉 Perfect for workplaces, schools, universities, hospitals, government buildings, 
                  and high-security facilities.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <img src={breathalyzer1} alt="Kamnyweso Breathalyzer Front View" className="w-full h-64 object-contain rounded-lg bg-secondary/5 p-4" />
                <img src={breathalyzer2} alt="Kamnyweso Breathalyzer with Facial Recognition" className="w-full h-64 object-contain rounded-lg bg-secondary/5 p-4" />
                <img src={breathalyzer3} alt="Kamnyweso Breathalyzer Features" className="w-full h-64 object-contain rounded-lg bg-secondary/5 p-4" />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Applications Section */}
      <section className="section-padding bg-white blueprint-grid">
        <Reveal className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-12 text-center">
              Perfect For
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                'Educational Institutions',
                'Corporate Offices',
                'Healthcare Facilities',
                'Government Buildings',
                'Libraries & Archives',
                'High-Security Facilities'
              ].map((application, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-primary/5 rounded-xl card-hover"
                >
                  <p className="text-dark-grey font-semibold">
                    {application}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA Section */}
      <section className="section-padding tech-gradient-animated text-white">
        <Reveal className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Enhance Your Security Infrastructure
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Contact us to learn more about our hardware products and how they can 
            integrate with your existing systems for enhanced security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center gap-2"
            >
              Get in Touch
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/services"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center gap-2"
            >
              View All Products
              <ArrowRight size={20} />
            </Link>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
};

export default HardwareProducts;
