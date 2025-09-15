import { 
  Database, 
  Users, 
  Code, 
  Network, 
  HardDrive, 
  Headphones,
  ArrowRight,
  CheckCircle 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

const Services = () => {
  const services = [
    {
      icon: Database,
      title: 'ERP Systems',
      description: 'Comprehensive enterprise resource planning solutions to streamline business operations, improve efficiency, and provide real-time insights.',
      features: [
        'Financial Management',
        'Inventory Control',
        'HR Management',
        'Customer Relationship Management',
        'Reporting & Analytics',
        'Integration Capabilities'
      ],
    },
    {
      icon: Users,
      title: 'IT Consultancy',
      description: 'Strategic IT guidance and consulting services to help you make informed technology decisions and optimize your IT infrastructure.',
      features: [
        'Technology Strategy Planning',
        'Digital Transformation',
        'System Architecture Design',
        'Security Assessments',
        'Performance Optimization',
        'Technology Roadmaps'
      ],
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions designed specifically for your business needs, from web applications to mobile apps and desktop software.',
      features: [
        'Web Application Development',
        'Mobile App Development',
        'Desktop Applications',
        'API Development',
        'Database Design',
        'System Integration'
      ],
    },
    {
      icon: Network,
      title: 'Networking Solutions',
      description: 'Secure, reliable network infrastructure solutions including LAN/WAN setup, wireless networks, and network security.',
      features: [
        'Network Design & Setup',
        'Wireless Solutions',
        'Network Security',
        'VPN Implementation',
        'Network Monitoring',
        'Performance Optimization'
      ],
    },
    {
      icon: HardDrive,
      title: 'Hardware Solutions',
      description: 'Quality hardware procurement, installation, and configuration services for servers, workstations, and networking equipment.',
      features: [
        'Server Solutions',
        'Workstation Setup',
        'Networking Hardware',
        'Storage Solutions',
        'Backup Systems',
        'Hardware Maintenance'
      ],
    },
    {
      icon: Headphones,
      title: 'Support Services',
      description: '24/7 technical support and maintenance services to ensure your IT systems run smoothly and efficiently at all times.',
      features: [
        '24/7 Technical Support',
        'System Maintenance',
        'Troubleshooting',
        'Performance Monitoring',
        'Security Updates',
        'Training & Documentation'
      ],
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

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-border rounded-2xl p-8 card-hover"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon size={32} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-dark-grey mb-2">
                      {service.title}
                    </h3>
                    <p className="text-professional-grey">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-dark-grey">Key Features:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-center space-x-2 text-sm text-professional-grey"
                      >
                        <CheckCircle size={16} className="text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
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
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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

      {/* CTA Section */}
      <section className="section-padding tech-gradient text-white">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's discuss how our services can help transform your business 
            and achieve your technology goals.
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center gap-2"
          >
            Contact Us Today
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;