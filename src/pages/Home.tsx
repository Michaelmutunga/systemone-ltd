import { ArrowRight, Shield, Users, Settings, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-tech.jpg';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import { SITE } from '@/lib/site';

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: 'Trusted Solutions',
      description: 'Reliable and secure technology solutions for your business needs.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals dedicated to your success.',
    },
    {
      icon: Settings,
      title: 'Custom Development',
      description: 'Tailored solutions designed specifically for your business.',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and assistance.',
    },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'System One Ltd | Technology Solutions Kenya',
    url: SITE.url,
    description: SITE.description,
  };

  return (
    <Layout>
      <Seo
        title="System One Ltd | Technology Solutions Kenya"
        description="System One Ltd delivers educational technology, ERP systems, hardware solutions, and support services for institutions and businesses across Kenya."
        canonicalPath="/"
        schema={schema}
      />
      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden">
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-grey leading-tight">
                  Enterprise 
                  <span className="text-primary"> Technology</span>
                  <br />Solutions
                </h1>
                <p className="text-xl text-professional-grey max-w-lg">
                  Empowering businesses across Kenya with innovative IT solutions, 
                  enterprise software, and reliable technology services.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="btn-primary inline-flex items-center gap-2 justify-center"
                >
                  Explore Our Products
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="btn-secondary inline-flex items-center gap-2 justify-center"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl"></div>
              <img
                src={heroImage}
                alt="Modern technology solutions and enterprise software"
                className="w-full h-auto rounded-2xl shadow-large"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-4">
              Why System One Ltd?
            </h2>
            <p className="text-xl text-professional-grey max-w-3xl mx-auto">
              We combine technical expertise with deep understanding of business needs 
              to deliver solutions that drive growth and efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center space-y-4 p-6 rounded-xl card-hover bg-white"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                  <feature.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-dark-grey">
                  {feature.title}
                </h3>
                <p className="text-professional-grey">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-secondary/30">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-professional-grey">
              Comprehensive technology solutions for modern businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'ERP Systems',
                description: 'Complete enterprise resource planning solutions to streamline your business operations.',
              },
              {
                title: 'Software Development',
                description: 'Custom software solutions designed to meet your specific business requirements.',
              },
              {
                title: 'Hardware Solutions',
                description: 'Quality hardware procurement and installation services.',
              },
              {
                title: 'Support Services',
                description: 'Ongoing technical support and maintenance for all your IT systems.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl card-hover"
              >
                <h3 className="text-xl font-semibold text-dark-grey mb-3">
                  {service.title}
                </h3>
                <p className="text-professional-grey mb-4">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="text-primary font-medium hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                >
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="btn-primary inline-flex items-center gap-2"
            >
              View All Services
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding tech-gradient text-white">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can help your business 
            achieve its goals and stay ahead of the competition.
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center gap-2"
          >
            Get Started Today
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
