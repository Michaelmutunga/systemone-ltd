import {
  ArrowRight,
  CheckCircle,
  Headphones,
  Route,
  ScanLine,
  Settings,
  Shield,
  ShieldCheck,
  Users,
} from 'lucide-react';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import { SITE } from '@/lib/site';
import PrefetchLink from '@/components/PrefetchLink';
import RfidHeroCarousel from '@/components/RfidHeroCarousel';
import Reveal from '@/components/Reveal';
import MarqueeCarousel from '@/components/MarqueeCarousel';
import rfidSecurityGate from '@/assets/products/rfid-security-gate-1.png';
import rfidDesktopReader from '@/assets/products/rfid-desktop-reader-1.webp';
import inventoryStockTaker from '@/assets/products/inventory-stock-taker-1.webp';
import rfidTag from '@/assets/products/rfid-tag-1.webp';
import assetTrackingImage from '@/assets/new assets/asset tracking.jpg';
import inventoryManagementImage from '@/assets/new assets/inventory management.PNG';
import libraryManagementImage from '@/assets/new assets/library manage.jpg';
import educationLibraryImage from '@/assets/new assets/education and library.jpg';
import accessControlImage from '@/assets/new assets/Access control.jpg';
import karatinaLogo from '@/assets/logos/karatina-university.png';
import embuLogo from '@/assets/logos/university-of-embu.webp';
import kibabiiLogo from '@/assets/logos/kibabii-university.jpg';
import tharakaLogo from '@/assets/logos/tharaka-university.jpeg';
import kstvetLogo from '@/assets/logos/kstvet.jpeg';
import machakosLogo from '@/assets/logos/machakos-university.png';
import belgutLogo from '@/assets/logos/belgut-tti.jpeg';
import rvttiLogo from '@/assets/logos/rvtti.png';
import pcKinyanjuiLogo from '@/assets/logos/pc-kinyanjui.jpeg';
import kajiadoEastLogo from '@/assets/logos/kajiado-east.jpeg';
import bandariLogo from '@/assets/logos/bandari.jpeg';
import kslLogo from '@/assets/logos/ksl.png';
import aldaiLogo from '@/assets/logos/aldai.png';
import ummaLogo from '@/assets/logos/umma-university.jpeg';
import iluLogo from '@/assets/logos/ilu.jpeg';
import kirinyagaLogo from '@/assets/logos/Kirinyaga logo.webp';
import cooperativeLogo from '@/assets/logos/cooperative logo.webp';
import fullheightTurnstileImage from '@/assets/new assets/fullheight turnstile.jfif';

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
    {
      title: 'Library Management',
      slug: 'library-management',
      image: inventoryManagementImage,
      description: 'Tag, locate, circulate, and protect library materials with faster, more accurate workflows for staff and patrons.',
    },
    {
      title: 'Asset Tracking',
      slug: 'asset-tracking',
      image: assetTrackingImage,
      description: 'Maintain a clear view of valuable equipment and assets as they move between rooms, departments, and locations.',
    },
    {
      title: 'Inventory Management',
      slug: 'inventory-management',
      image: libraryManagementImage,
      description: 'Replace slow manual counts with reliable item identification and stock visibility across stores, shelves, and operational areas.',
    },
    {
      title: 'Security Gates',
      slug: 'security-gates',
      image: rfidSecurityGate,
      description: 'Create monitored exit points that help detect the unauthorized movement of tagged books, assets, and other valuable items.',
    },
    {
      title: 'Tags & Readers',
      slug: 'tags-and-readers',
      image: rfidTag,
      description: 'Build a dependable RFID foundation with tags and readers selected around the items, environments, and workflows being tracked.',
    },
    {
      title: 'Attendance & Identification',
      slug: 'attendance-and-identification',
      image: rfidDesktopReader,
      description: 'Support accurate identity and attendance records with faster, more consistent identification at the point of access or service.',
    },
    {
      title: 'Access Control',
      slug: 'access-control',
      image: fullheightTurnstileImage,
      description: 'Connect identity, permissions, and controlled entry to help organizations manage who can access important spaces and resources.',
    },
  ];

  const industries = [
    { title: 'Education & Libraries', image: educationLibraryImage, description: 'Improve circulation, inventory, security, and visibility across learning resources and shared institutional assets.' },
    { title: 'Corporate & Institutional', image: accessControlImage, description: 'Create practical asset, identity, and access workflows that support accountable operations across offices and facilities.' },
  ];

  const partners = [
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
      name: 'Kirinyaga University',
      solution: 'Library Radar',
      logo: kirinyagaLogo
    },
    {
      name: 'Cooperative University',
      solution: 'Library Radar',
      logo: cooperativeLogo
    }
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
        title="System One Ltd | RFID Solutions Kenya — Library, Asset Tracking & Security"
        description="System One Ltd — Kenya's leading RFID solutions provider. We supply and install RFID library management, asset tracking, security gates, tags, readers, CampusCURA ERP and Library Radar. Nairobi."
        canonicalPath="/"
        schema={schema}
      />
      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden">
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal direction="left" className="space-y-8">
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
            </Reveal>

            <Reveal direction="right" delay={150}>
              <RfidHeroCarousel />
            </Reveal>
          </div>
        </div>
      </section>

      {/* RFID Value Proposition */}
      <section className="section-padding blueprint-grid">
        <Reveal className="container-width">
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
        </Reveal>
      </section>

      {/* RFID Solutions Showcase */}
      <section className="section-padding section-dark">
        <Reveal className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured RFID Solutions
            </h2>
            <p className="text-xl text-white/85 max-w-3xl mx-auto">
              RFID solutions for libraries, institutions, and corporate facilities.
            </p>
          </div>

          <div className="space-y-8 lg:space-y-10">
            {rfidSolutions.map((solution, index) => {
              const imageOnRight = index % 2 === 1;

              return (
                <article
                  key={solution.title}
                  className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10"
                >
                  <div className={imageOnRight ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="flex h-[260px] items-center justify-center overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)] md:h-[320px] lg:h-[420px]">
                      <img
                        src={solution.image}
                        alt={solution.title}
                        loading="lazy"
                        decoding="async"
                        className="h-auto w-auto max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>

                  <div className={imageOnRight ? 'lg:order-1' : 'lg:order-2'}>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {solution.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-base leading-7 text-white/80">
                      {solution.description}
                    </p>
                    <PrefetchLink
                      to={`/rfid-solutions/${solution.slug}`}
                      className="mt-6 inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
                    >
                      Learn More
                      <ArrowRight size={16} />
                    </PrefetchLink>
                  </div>
                </article>
              );
            })}
          </div>
        </Reveal>
      </section>

      {/* Products & Services */}
      <section className="section-padding blueprint-grid">
        <Reveal className="container-width">
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
                inventory management, attendance, identification,
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
        </Reveal>
      </section>

      {/* Industries */}
      <section className="section-padding mesh-gradient-subtle">
        <Reveal className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-professional-grey max-w-3xl mx-auto">
              RFID can support item movement, security, and identification across
              many institutional and business environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {industries.map((industry) => (
              <article
                key={industry.title}
                className="flex flex-col rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)] overflow-hidden h-full"
              >
                <div className="relative w-full h-[200px] overflow-hidden bg-slate-100">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold text-dark-grey mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-base leading-6 text-professional-grey line-clamp-3">
                    {industry.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Our Trusted Partners Section */}
      <section className="section-padding bg-white overflow-hidden">
        <Reveal className="container-width text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-xl text-professional-grey">
            Leading institutions across Kenya trust our solutions
          </p>
        </Reveal>

        <MarqueeCarousel>
          {[...partners, ...partners].map((client, index) => (
            <div key={index} className="w-60 flex-shrink-0 px-3">
              <div className="group relative bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 card-hover h-60 flex flex-col items-center justify-center overflow-hidden">
                {/* Logo */}
                <div className="w-24 h-24 mb-4 rounded-xl overflow-hidden flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
            </div>
          ))}
        </MarqueeCarousel>
      </section>

      {/* Features Overview */}
      <section className="section-padding blueprint-grid">
        <Reveal className="container-width">
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
        </Reveal>
      </section>

      {/* CTA Section */}
      <section className="section-padding tech-gradient-animated text-white">
        <Reveal className="container-width text-center">
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
        </Reveal>
      </section>
    </Layout>
  );
};

export default Home;
