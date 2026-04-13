import { BookOpen, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import { SITE } from '@/lib/site';

const LibraryRadar = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Library Radar',
    url: `${SITE.url}/library-radar`,
    provider: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
    areaServed: 'Kenya',
    description:
      'Library Radar is an RFID security and automation solution that helps libraries protect resources and improve circulation.',
  };

  return (
    <Layout>
      <Seo
        title="Library Radar | System One Ltd"
        description="Library Radar is an RFID security and automation solution that helps libraries protect resources and improve circulation."
        canonicalPath="/library-radar"
        schema={schema}
      />
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BookOpen size={48} className="text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-dark-grey mb-6">
              Library Radar
            </h1>
            <p className="text-xl text-professional-grey leading-relaxed">
              An RFID-based library security and automation system that helps libraries protect 
              resources, improve circulation efficiency, and enhance the patron experience.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-12 text-center">
              Key Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'RFID book tagging for easy identification',
                'Anti-theft detection through RFID security gates',
                'Self-check-in/check-out kiosks',
                'Inventory and shelf management',
                'Real-time tracking of library assets'
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-primary/5 rounded-lg"
                >
                  <CheckCircle size={24} className="flex-shrink-0 text-primary mt-1" />
                  <span className="text-lg text-dark-grey">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-secondary/20">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-8 text-center">
              How Library Radar Benefits You
            </h2>

            <div className="space-y-6">
              {[
                {
                  title: 'Enhanced Security',
                  description: 'Protect your valuable library resources with advanced RFID security gates that detect unauthorized removal of materials.'
                },
                {
                  title: 'Improved Efficiency',
                  description: 'Streamline check-in and check-out processes with self-service kiosks, reducing wait times and staff workload.'
                },
                {
                  title: 'Better Inventory Management',
                  description: 'Track and locate books and assets in real-time, making inventory audits faster and more accurate.'
                },
                {
                  title: 'Enhanced Patron Experience',
                  description: 'Provide faster service and more convenience to library users with modern RFID technology.'
                },
                {
                  title: 'Reduced Losses',
                  description: 'Minimize theft and loss of library materials with comprehensive tracking and security systems.'
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-xl card-hover">
                  <h3 className="text-xl font-semibold text-dark-grey mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-professional-grey">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-8 text-center">
              RFID Technology Components
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'RFID Tags',
                  description: 'Attach to books and materials for unique identification and tracking'
                },
                {
                  title: 'Security Gates',
                  description: 'Detect and prevent unauthorized removal of library materials'
                },
                {
                  title: 'Desktop Readers',
                  description: 'Enable fast scanning and efficient circulation management'
                }
              ].map((component, index) => (
                <div key={index} className="text-center p-6 bg-primary/5 rounded-xl">
                  <h3 className="text-lg font-semibold text-dark-grey mb-3">
                    {component.title}
                  </h3>
                  <p className="text-professional-grey text-sm">
                    {component.description}
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
            Modernize Your Library Today
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Request a demo of Library Radar and discover how RFID technology can 
            transform your library operations.
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

export default LibraryRadar;
