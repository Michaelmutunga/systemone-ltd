import { 
  GraduationCap, 
  BookOpen, 
  Shield, 
  Fingerprint, 
  Wind,
  ArrowRight,
  CheckCircle,
  Star 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import HardwareCarousel from '@/components/HardwareCarousel';

// Import logos
import karatinaLogo from '@/assets/logos/karatina-university.png';
import embuLogo from '@/assets/logos/university-of-embu.png';
import kibabiiLogo from '@/assets/logos/kibabii-university.jpg';
import tharakaLogo from '@/assets/logos/tharaka-university.jpeg';
import kstvetLogo from '@/assets/logos/kstvet.jpeg';
import machakosLogo from '@/assets/logos/machakos-university.png';
import belgutLogo from '@/assets/logos/belgut-tti.jpeg';
import rvttiLogo from '@/assets/logos/rvtti.png';
import maasaiMaraLogo from '@/assets/logos/maasai-mara-university.jpeg';
import pcKinyanjuiLogo from '@/assets/logos/pc-kinyanjui.jpeg';
import kajiadoEastLogo from '@/assets/logos/kajiado-east.jpeg';
import bandariLogo from '@/assets/logos/bandari.jpeg';
import kslLogo from '@/assets/logos/ksl.png';
import aldaiLogo from '@/assets/logos/aldai.png';
import ummaLogo from '@/assets/logos/umma-university.jpeg';
import iluLogo from '@/assets/logos/ilu.jpeg';

const Services = () => {
  const products = [
    {
      icon: GraduationCap,
      title: 'CampusCURA ERP',
      description: 'Our flagship Education ERP solution designed to streamline operations for schools, colleges, and universities.',
      features: [
        'Student enrollment & management',
        'Finance & accounting',
        'Attendance & timetable scheduling',
        'Library management',
        'Examination and grading',
        'Access control integration'
      ],
      highlight: 'CampusCURA enables institutions to improve efficiency, accountability, and student experience by providing a single, centralized system.',
    },
    {
      icon: BookOpen,
      title: 'Library Radar (RFID Security Solution)',
      description: 'An RFID-based library security and automation system that helps libraries protect resources, improve circulation efficiency, and enhance the patron experience.',
      features: [
        'RFID book tagging for easy identification',
        'Anti-theft detection through RFID security gates',
        'Self-check-in/check-out kiosks',
        'Inventory and shelf management',
        'Real-time tracking of library assets'
      ],
    },
    {
      icon: Shield,
      title: 'Hardware Products',
      description: 'We supply a wide range of RFID and biometric hardware to complement our security and ERP solutions.',
      features: [
        'RFID Security Gates – Prevent unauthorized removal of books and assets',
        'RFID Tags – Attach to books, assets, or ID cards for identification',
        'RFID Desktop Readers – Enable fast scanning and circulation management',
        'Biometric Systems – Fingerprint and facial recognition devices for secure access',
        'Turnstiles – Physical barriers that integrate with RFID and biometric systems for controlled entry'
      ],
    },
    {
      icon: Wind,
      title: 'Kamnyweso Breathalyzer',
      description: 'Our latest innovation in access control and facility safety. Designed to detect alcohol consumption and prevent drunk individuals from accessing secure environments.',
      features: [
        'Accurate and fast alcohol detection',
        'Seamless integration with turnstiles and biometric systems',
        'Prevents impaired individuals from gaining entry',
        'Promotes safety, security, and responsible conduct',
        'Suitable for workplaces, schools, hospitals, and government buildings'
      ],
      isNew: true,
      highlight: 'Perfect for workplaces, schools, universities, hospitals, government buildings, and high-security facilities.',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-dark-grey mb-6">
              Our Products & Services
            </h1>
            <p className="text-xl text-professional-grey leading-relaxed">
              Comprehensive technology solutions designed to transform your business 
              operations and drive sustainable growth in today's digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Hardware Products Carousel */}
      <HardwareCarousel />

      {/* Products Grid */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {products.map((product, index) => (
              <div
                key={index}
                className={`bg-white border rounded-2xl p-8 card-hover relative ${
                  product.isNew ? 'border-accent shadow-lg' : 'border-border'
                }`}
              >
                {product.isNew && (
                  <div className="absolute -top-3 -right-3 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star size={14} />
                    NEW
                  </div>
                )}
                
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    product.isNew ? 'bg-accent/10' : 'bg-primary/10'
                  }`}>
                    <product.icon size={32} className={product.isNew ? 'text-accent' : 'text-primary'} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-dark-grey mb-2">
                      {product.title}
                    </h3>
                    <p className="text-professional-grey">
                      {product.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-dark-grey">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-start space-x-2 text-sm text-professional-grey"
                      >
                        <CheckCircle size={16} className={`flex-shrink-0 mt-0.5 ${
                          product.isNew ? 'text-accent' : 'text-primary'
                        }`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {product.highlight && (
                  <div className={`p-4 rounded-lg mb-6 ${
                    product.isNew ? 'bg-accent/5 border border-accent/20' : 'bg-primary/5 border border-primary/20'
                  }`}>
                    <p className="text-sm text-dark-grey font-medium">
                      👉 {product.highlight}
                    </p>
                  </div>
                )}
                
                <Link
                  to={
                    product.title === 'CampusCURA ERP' 
                      ? '/campusCURA' 
                      : product.title === 'Library Radar (RFID Security Solution)' 
                      ? '/LibraryRadar' 
                      : '/HardwareProducts'
                  }
                  className={`inline-flex items-center gap-2 font-medium hover:opacity-80 transition-colors ${
                    product.isNew ? 'text-accent' : 'text-primary'
                  }`}
                >
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-secondary/20">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-4">
              Our Process
            </h2>
            <p className="text-xl text-professional-grey">
              How we deliver exceptional results for our clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We analyze your business needs and current technology infrastructure.',
              },
              {
                step: '02',
                title: 'Planning',
                description: 'We develop a comprehensive strategy and implementation roadmap.',
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'We execute the solution with minimal disruption to your operations.',
              },
              {
                step: '04',
                title: 'Training',
                description: 'We provide comprehensive training to ensure your team can effectively use the system.',
              },
              {
                step: '05',
                title: 'Support',
                description: 'We provide ongoing support and optimization for continued success.',
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-dark-grey mb-3">
                  {process.title}
                </h3>
                <p className="text-professional-grey">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-4">
              Our Trusted Partners
            </h2>
            <p className="text-xl text-professional-grey">
              Leading institutions across Kenya trust our solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {[
              {
                name: 'PC Kinyanjui Technical Training Institute',
                solution: 'CampusCURA ERP + Library Radar',
                logo: pcKinyanjuiLogo
              },
              {
                name: 'Kajiado East Technical and Vocational College',
                solution: 'CampusCURA ERP',
                logo: kajiadoEastLogo
              },
              {
                name: 'Bandari Maritime Academy',
                solution: 'Library Radar',
                logo: bandariLogo
              },
              {
                name: 'Kenya School of Law',
                solution: 'Library Radar',
                logo: kslLogo
              },
              {
                name: 'Aldai Technical Training Institute',
                solution: 'CampusCURA ERP + Library Radar',
                logo: aldaiLogo
              },
              {
                name: 'Umma University',
                solution: 'Library Radar',
                logo: ummaLogo
              },
              {
                name: 'International Leadership University',
                solution: 'Library Radar',
                logo: iluLogo
              },
              {
                name: 'Karatina University',
                solution: 'Library Radar + Biometrics',
                logo: karatinaLogo
              },
              {
                name: 'University of Embu',
                solution: 'Library Radar',
                logo: embuLogo
              },
              {
                name: 'Kibabii University',
                solution: 'Library Radar',
                logo: kibabiiLogo
              },
              {
                name: 'Tharaka University',
                solution: 'Library Radar',
                logo: tharakaLogo
              },
              {
                name: 'KSTVET',
                solution: 'CampusCURA + Library Radar + Biometrics',
                logo: kstvetLogo
              },
              {
                name: 'Machakos University',
                solution: 'Library Radar + Biometrics',
                logo: machakosLogo
              },
              {
                name: 'Belgut TTI',
                solution: 'CampusCURA ERP',
                logo: belgutLogo
              },
              {
                name: 'RVTTI',
                solution: 'CampusCURA ERP',
                logo: rvttiLogo
              },
              {
                name: 'Maasai Mara Technical and Vocational College',
                solution: 'CampusCURA ERP',
                logo: maasaiMaraLogo
              }
            ].map((client, index) => (
              <div
                key={index}
                className="group relative bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 card-hover"
              >
                {/* Logo */}
                <div className="w-20 h-20 mx-auto mb-4 rounded-xl overflow-hidden flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/95 rounded-xl p-4 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-semibold text-sm mb-2">
                    {client.name}
                  </h3>
                  <p className="text-white/90 text-xs">
                    {client.solution}
                  </p>
                </div>
                
                {/* Client Name (visible on mobile) */}
                <div className="md:hidden text-center">
                  <h3 className="text-dark-grey font-semibold text-sm mb-1">
                    {client.name}
                  </h3>
                  <p className="text-professional-grey text-xs">
                    {client.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding tech-gradient text-white">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Institution?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Get in touch to request a demo for CampusCURA, Library Radar, or our innovative 
            Kamnyweso Breathalyzer. Let us show you how our solutions can enhance your operations.
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
              to="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center gap-2"
            >
              Request a Demo
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
