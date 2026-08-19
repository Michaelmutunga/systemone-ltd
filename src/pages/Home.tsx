import {
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle,
  GraduationCap,
  Headphones,
  Hotel,
  KeyRound,
  PackageCheck,
  Route,
  ScanLine,
  Settings,
  Shield,
  ShieldCheck,
  Shirt,
  ShoppingCart,
  Tags,
  Truck,
  Users,
} from 'lucide-react';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import { SITE } from '@/lib/site';
import PrefetchLink from '@/components/PrefetchLink';
import RfidHeroCarousel from '@/components/RfidHeroCarousel';
import rfidSecurityGate from '@/assets/products/rfid-security-gate-1.png';
import rfidDesktopReader from '@/assets/products/rfid-desktop-reader-1.png';
import inventoryStockTaker from '@/assets/products/inventory-stock-taker-1.png';
import rfidTag from '@/assets/products/rfid-tag-1.png';

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: 'Trusted Delivery',
      description: 'Professional planning, implementation, and support for RFID projects.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals who understand institutional workflows.',
    },
    {
      icon: Settings,
      title: 'Custom Integration',
      description: 'RFID solutions connected with software, ERP, and existing systems.',
    },
    {
      icon: Headphones,
      title: 'Ongoing Support',
      description: 'Training, technical support, and maintenance after deployment.',
    },
  ];

  const rfidValues = [
    {
      icon: Route,
      title: 'Track',
      description: 'Identify and track assets, items, and records across your operation.',
      image: rfidDesktopReader,
    },
    {
      icon: ShieldCheck,
      title: 'Secure',
      description: 'Monitor movement and help protect valuable institutional assets.',
      image: rfidSecurityGate,
    },
    {
      icon: ScanLine,
      title: 'Automate',
      description: 'Reduce manual identification, counting, and recording work.',
      image: inventoryStockTaker,
    },
    {
      icon: Settings,
      title: 'Integrate',
      description: 'Connect RFID technology with the business systems you already use.',
      image: rfidTag,
    },
  ];

  const rfidSolutions = [
    { icon: BookOpen, title: 'Library Management' },
    { icon: PackageCheck, title: 'Asset Tracking' },
    { icon: Shirt, title: 'Linen Management' },
    { icon: ScanLine, title: 'Inventory Management' },
    { icon: Shield, title: 'Security Gates' },
    { icon: Tags, title: 'Tags & Readers' },
    { icon: Users, title: 'Attendance & Identification' },
    { icon: KeyRound, title: 'Access Control' },
  ];

  const industries = [
    { icon: GraduationCap, title: 'Education & Libraries' },
    { icon: Building2, title: 'Healthcare' },
    { icon: Hotel, title: 'Hospitality' },
    { icon: Truck, title: 'Warehousing & Logistics' },
    { icon: ShoppingCart, title: 'Retail' },
    { icon: Building2, title: 'Corporate & Institutional' },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'System One Ltd | RFID Solutions Kenya',
    url: SITE.url,
    description: SITE.description,
  };

  return (
    <Layout>
      <Seo
        title="RFID Solutions Kenya | System One Ltd"
        description="System One Ltd provides professional RFID solutions for institutions and businesses, with software, ERP, ICT implementation, and support services."
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
                  Professional
                  <span className="text-primary"> RFID</span>
                  <br />Solutions
                </h1>
                <p className="text-xl text-professional-grey max-w-lg">
                  System One provides RFID solutions that help institutions and businesses
                  track, secure, automate, and integrate their operations.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <PrefetchLink
                  to="/services"
                  className="btn-primary inline-flex items-center gap-2 justify-center"
                >
                  Explore RFID Solutions
                  <ArrowRight size={20} />
                </PrefetchLink>
                <PrefetchLink
                  to="/contact"
                  className="btn-secondary inline-flex items-center gap-2 justify-center"
                >
                  Get In Touch
                </PrefetchLink>
              </div>
            </div>

            <div>
              <RfidHeroCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* RFID Value Proposition */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-4">
              RFID That Supports Real Operations
            </h2>
            <p className="text-xl text-professional-grey max-w-3xl mx-auto">
              The goal is not just to supply hardware. It is to help your team identify,
              protect, count, and connect the items that matter.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-10 items-stretch">
            <div className="relative overflow-hidden rounded-[32px] bg-secondary/10 shadow-[0_24px_60px_rgba(15,23,42,0.12)] min-h-[460px]">
              <img
                src={rfidSecurityGate}
                alt="RFID security gate"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 text-white">
                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
                  RFID value
                </span>
                <h3 className="mt-4 max-w-md text-3xl md:text-4xl font-bold leading-tight">
                  From visibility to workflow efficiency
                </h3>
                <p className="mt-3 max-w-md text-sm md:text-base text-slate-200">
                  Operational data, protected assets, and smarter workflows in one connected system.
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-1">
              {rfidValues.map((value, index) => {
                const Icon = value.icon ?? CheckCircle;

                return (
                  <div
                    key={value.title}
                    className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="relative h-[86px] w-[94px] shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-white">
                      <img
                        src={value.image}
                        alt={value.title}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="mb-2 flex items-center gap-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-[10px] font-semibold text-primary">
                          {index + 1}
                        </span>
                        <h3 className="text-xl font-semibold text-dark-grey">
                          {value.title}
                        </h3>
                      </div>
                      <p className="text-sm leading-6 text-professional-grey">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* RFID Solutions Showcase */}
      <section className="section-padding bg-secondary/30">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-4">
              Featured RFID Solutions
            </h2>
            <p className="text-xl text-professional-grey max-w-3xl mx-auto">
              RFID solutions for libraries, institutions, healthcare teams, hospitality
              operations, warehouses, retailers, and corporate facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rfidSolutions.map((solution) => (
              <div
                key={solution.title}
                className="bg-white p-6 rounded-xl card-hover"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                  <solution.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-dark-grey mb-3">
                  {solution.title}
                </h3>
                <PrefetchLink
                  to="/hardware-products"
                  className="text-primary font-medium hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                >
                  Learn More
                  <ArrowRight size={16} />
                </PrefetchLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products & Services */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-4">
              Products & Services
            </h2>
            <p className="text-xl text-professional-grey max-w-3xl mx-auto">
              RFID is the primary offering, supported by System One's software,
              ERP, ICT implementation, training, and technical support capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white border border-primary/20 rounded-2xl p-8 card-hover">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Shield size={32} className="text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-dark-grey mb-4">
                RFID Solutions
              </h3>
              <p className="text-professional-grey mb-6">
                RFID security gates, tags, readers, asset tracking, library management,
                linen management, inventory management, attendance, identification,
                access control, and custom RFID integration.
              </p>
              <PrefetchLink
                to="/hardware-products"
                className="btn-primary inline-flex items-center gap-2"
              >
                View RFID Products
                <ArrowRight size={20} />
              </PrefetchLink>
            </div>

            <div className="space-y-8">
              <div className="bg-white border border-border rounded-2xl p-6 card-hover">
                <h3 className="text-2xl font-bold text-dark-grey mb-3">
                  Software & Enterprise Solutions
                </h3>
                <p className="text-professional-grey mb-4">
                  CampusCURA, custom software development, systems integration,
                  and enterprise applications.
                </p>
                <PrefetchLink
                  to="/services"
                  className="text-primary font-medium hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                >
                  Learn More
                  <ArrowRight size={16} />
                </PrefetchLink>
              </div>

              <div className="bg-white border border-border rounded-2xl p-6 card-hover">
                <h3 className="text-2xl font-bold text-dark-grey mb-3">
                  ICT Services
                </h3>
                <p className="text-professional-grey mb-4">
                  ICT infrastructure, implementation, technical support, training,
                  and consulting.
                </p>
                <PrefetchLink
                  to="/services"
                  className="text-primary font-medium hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                >
                  Learn More
                  <ArrowRight size={16} />
                </PrefetchLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-secondary/20">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-professional-grey max-w-3xl mx-auto">
              RFID can support item movement, security, and identification across
              many institutional and business environments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <div key={industry.title} className="bg-white p-6 rounded-xl card-hover">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <industry.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-dark-grey">
                  {industry.title}
                </h3>
              </div>
            ))}
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
              We combine technical expertise with practical implementation support
              to deliver solutions that work in real operating environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
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

      {/* CTA Section */}
      <section className="section-padding tech-gradient text-white">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Discuss RFID for Your Organization?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Talk to System One about RFID tracking, security, automation,
            integration, implementation, training, and support.
          </p>
          <PrefetchLink
            to="/contact"
            className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center gap-2"
          >
            Get Started Today
            <ArrowRight size={20} />
          </PrefetchLink>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
