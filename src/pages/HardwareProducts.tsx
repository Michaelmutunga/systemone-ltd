import { Shield, Fingerprint, Wind, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

const HardwareProducts = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto text-center">
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
          </div>
        </div>
      </section>

      {/* Hardware Products Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-12 text-center">
              Our Hardware Solutions
            </h2>
            
            <div className="space-y-8">
              {[
                {
                  icon: Shield,
                  title: 'RFID Security Gates',
                  description: 'Prevent unauthorized removal of books and assets with advanced detection technology',
                  color: 'primary'
                },
                {
                  icon: Shield,
                  title: 'RFID Tags',
                  description: 'Attach to books, assets, or ID cards for easy identification and tracking',
                  color: 'primary'
                },
                {
                  icon: Shield,
                  title: 'RFID Desktop Readers',
                  description: 'Enable fast scanning and efficient circulation management at service desks',
                  color: 'primary'
                },
                {
                  icon: Fingerprint,
                  title: 'Biometric Systems',
                  description: 'Fingerprint and facial recognition devices for secure access control and authentication',
                  color: 'primary'
                },
                {
                  icon: Shield,
                  title: 'Turnstiles',
                  description: 'Physical barriers that integrate with RFID and biometric systems for controlled entry points',
                  color: 'primary'
                }
              ].map((product, index) => (
                <div
                  key={index}
                  className="bg-white border border-border rounded-xl p-6 card-hover flex items-start space-x-4"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <product.icon size={28} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-grey mb-2">
                      {product.title}
                    </h3>
                    <p className="text-professional-grey">
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Kamnyweso Breathalyzer Featured Section */}
      <section className="section-padding bg-secondary/20">
        <div className="container-width">
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
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding tech-gradient text-white">
        <div className="container-width text-center">
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
        </div>
      </section>
    </Layout>
  );
};

export default HardwareProducts;
