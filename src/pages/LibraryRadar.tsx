import {
  BookOpen,
  CheckCircle,
  ArrowRight,
  ArrowLeftRight,
  Tags,
  PackageSearch,
  Settings,
  ShieldCheck,
  ShieldAlert,
  MonitorPlay,
  MonitorCog,
  Tag,
  ScanLine,
  CreditCard,
  ClipboardList,
  Monitor,
  Inbox,
  DoorOpen,
  LibraryBig,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import { SITE } from '@/lib/site';
import Reveal from '@/components/Reveal';

import rfidTag1 from '@/assets/products/rfid-tag-1.png';
import rfidTag2 from '@/assets/products/rfid-tag-2.png';
import rfidTag3 from '@/assets/products/rfid-tag-3.png';
import rfidDesktopReader1 from '@/assets/products/rfid-desktop-reader-1.png';
import rfidDesktopReader2 from '@/assets/products/rfid-desktop-reader-2.png';
import rfidDesktopReader3 from '@/assets/products/rfid-desktop-reader-3.png';
import inventoryStockTaker1 from '@/assets/products/inventory-stock-taker-1.png';
import inventoryStockTaker2 from '@/assets/products/inventory-stock-taker-2.png';
import inventoryStockTaker3 from '@/assets/products/inventory-stock-taker-3.png';
import selfCheckinKiosk1 from '@/assets/products/self-checkin-kiosk-1.png';
import selfCheckinKiosk2 from '@/assets/products/self-checkin-kiosk-2.png';
import selfCheckinKiosk3 from '@/assets/products/self-checkin-kiosk-3.png';
import rfidSecurityGate1 from '@/assets/products/rfid-security-gate-1.png';
import rfidSecurityGate2 from '@/assets/products/rfid-security-gate-2.png';
import rfidSecurityGate3 from '@/assets/products/rfid-security-gate-3.png';
import turnstile1 from '@/assets/products/turnstile-1.png';
import turnstile2 from '@/assets/products/turnstile-4.png';
import turnstile4 from '@/assets/products/turnstile-5.png';
import bookDropox from '@/assets/new assets/RFID book dropox.jfif';
import libraryManage from '@/assets/new assets/library manage.jpg';
import educationLibrary from '@/assets/new assets/education and library.jpg';

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
      'Library Radar is an integrated library automation and RFID management solution that works alongside existing Library Management Systems (LMS) including Koha, adding RFID automation for circulation, inventory, security and self-service.',
  };

  const workstationFeatures = [
    {
      icon: ArrowLeftRight,
      title: 'Circulation Desk',
      description:
        'Streamlines the issuing and returning of library materials using RFID technology. Staff can quickly identify books, process loans and returns, and manage the security status of individual items. Books can be armed or disarmed as part of the circulation process, keeping security controls synchronized with the borrowing status and reducing repetitive manual scanning.',
    },
    {
      icon: Tags,
      title: 'Conversion Desk',
      description:
        'Prepares library materials for RFID-enabled operations. Staff encode RFID tags with relevant book information and associate each physical item with its corresponding library record, creating the digital connection between the physical book, its RFID tag and the institution\u2019s Library Management System.',
    },
    {
      icon: PackageSearch,
      title: 'Inventory Management',
      description:
        'Simplifies stocktaking and collection management through RFID-based inventory scanning. Using the RFID Inventory Stocktaker, librarians can scan shelves and collections rapidly, identify misplaced resources and highlight discrepancies between the physical collection and library records - all consolidated into reports for better visibility.',
    },
    {
      icon: Settings,
      title: 'System Setup & Administration',
      description:
        'Provides authorized personnel with centralized control over the Library Radar installation. Administrators can configure system settings, manage users, assign privileges and control access to different system functions, establishing appropriate roles and responsibilities while maintaining controlled access.',
    },
  ];

  const securityFeatures = [
    {
      icon: ShieldAlert,
      title: 'RFID Security Gates',
      description:
        'Installed at designated library entrances and exits, RFID security gates work with the status of RFID-tagged books to identify items attempting to leave without being properly checked out or authorized. When an unauthorized item is detected, the system raises an alert so staff can respond immediately.',
    },
    {
      icon: MonitorPlay,
      title: 'Gate Monitoring',
      description:
        'The Gate Monitor provides library staff with a dedicated interface for observing activity at the RFID security gates. It displays detected books and relevant circulation information, giving staff greater visibility into what is passing through the library\u2019s security points.',
    },
  ];

  const hardwareItems = [
    {
      icon: Tag,
      title: 'Concealed RFID Tags',
      description:
        'Discrete RFID tags can be embedded inside books and other library materials, allowing resources to be identified electronically while maintaining the appearance of the physical collection. RFID tags can also be used in designated shelf locations to support inventory and collection-management workflows.',
      images: [
        { src: rfidTag1, alt: 'RFID Tag Roll' },
        { src: rfidTag2, alt: 'RFID Tag Strip' },
        { src: rfidTag3, alt: 'RFID Tag Sheet' },
      ],
    },
    {
      icon: ScanLine,
      title: 'RFID Desktop Reader',
      description:
        'Provides staff with a convenient workstation device for reading and processing RFID-enabled materials. It can be used during RFID conversion, circulation and security-status operations, including encoding, arming and disarming books.',
      images: [
        { src: rfidDesktopReader1, alt: 'RFID Desktop Reader' },
        { src: rfidDesktopReader2, alt: 'RFID Desktop Reader' },
        { src: rfidDesktopReader3, alt: 'RFID Desktop Reader' },
      ],
    },
    {
      icon: CreditCard,
      title: 'RFID Patron Cards',
      description:
        'RFID-enabled patron cards provide users with a convenient way to identify themselves within supported library workflows. They can be integrated into circulation and other automated services, helping reduce repetitive manual identification and creating a smoother patron experience.',
      images: [],
      wide: true,
    },
    {
      icon: ClipboardList,
      title: 'RFID Inventory Stocktaker',
      description:
        'The handheld RFID Inventory Stocktaker is designed specifically for collection inventory and stocktaking. Instead of manually scanning individual barcodes, librarians can move through shelves and scan RFID-tagged resources efficiently. The collected information can be used to identify inventory discrepancies and generate reports.',
      images: [
        { src: inventoryStockTaker1, alt: 'Handheld RFID Inventory Stocktaker' },
        { src: inventoryStockTaker2, alt: 'Handheld RFID Inventory Stocktaker' },
        { src: inventoryStockTaker3, alt: 'Handheld RFID Inventory Stocktaker' },
      ],
    },
    {
      icon: Monitor,
      title: 'RFID Self-Service Kiosk',
      description:
        'The RFID Self-Service Kiosk enables patrons to perform supported circulation activities independently. Patrons can check out and return books without requiring direct assistance from library staff, helping reduce queues during busy periods and allowing librarians to focus on higher-value services.',
      images: [
        { src: selfCheckinKiosk1, alt: 'RFID Self-Service Kiosk' },
        { src: selfCheckinKiosk2, alt: 'RFID Self-Service Kiosk' },
        { src: selfCheckinKiosk3, alt: 'RFID Self-Service Kiosk' },
      ],
    },
    {
      icon: Inbox,
      title: 'RFID Return Drop Box',
      description:
        'The RFID Return Drop Box automates the process of returning library materials. Patrons can return books through a designated drop point, where RFID technology identifies the returned items and supports the institution\u2019s return-processing workflow - providing an efficient option for handling returns while reducing pressure on the circulation desk.',
      images: [{ src: bookDropox, alt: 'RFID Book Return Drop Box', large: true }],
    },
    {
      icon: DoorOpen,
      title: 'RFID Turnstile',
      description:
        'The RFID Turnstile combines library access control with RFID identification. Installed at the entrance, it helps institutions regulate access to library facilities and integrate patron identification with physical entry management, adding a further layer of control for monitored or restricted library access.',
      images: [
        { src: turnstile1, alt: 'RFID Turnstile' },
        { src: turnstile2, alt: 'RFID Turnstile' },
        { src: turnstile4, alt: 'RFID Turnstile' },
      ],
    },
  ];

  const ecosystemSteps = [
    {
      title: 'RFID Conversion',
      description:
        'An RFID tag is associated with the book\u2019s library record, preparing it for RFID-enabled operations.',
    },
    {
      title: 'Circulation Desk',
      description:
        'Staff process loans and returns while managing the book\u2019s borrowing status and security state.',
    },
    {
      title: 'Security Gates',
      description:
        'As books leave, RFID security gates verify their status. Unauthorized movement triggers an alert.',
    },
    {
      title: 'Gate Monitor',
      description:
        'Alerts and detected items are displayed to staff through the Gate Monitor interface.',
    },
    {
      title: 'Return Drop Box',
      description:
        'Returns are processed automatically through the RFID Return Drop Box, or via the circulation desk.',
    },
    {
      title: 'Inventory Stocktaking',
      description:
        'Librarians use the RFID Inventory Stocktaker to rapidly scan collections and generate inventory reports.',
    },
    {
      title: 'Self-Service Kiosk',
      description:
        'Patrons check in and check out independently, adding a fully automated layer to the ecosystem.',
    },
  ];

  const transformationBenefits = [
    'Faster book circulation and processing',
    'More efficient stocktaking and inventory management',
    'Automated RFID-based security monitoring',
    'Reduced manual processing at circulation desks',
    'Self-service check-in and check-out',
    'Automated book returns',
    'Better visibility of library assets',
    'Controlled library access',
    'Centralized administration and user management',
    'Improved coordination between the LMS and physical library infrastructure',
  ];

  return (
    <Layout>
      <Seo
        title="Library Radar | System One Ltd"
        description="Library Radar is an integrated library automation and RFID management solution that adds a powerful RFID and automation layer to your existing Library Management System - circulation, inventory, security and self-service in one ecosystem."
        canonicalPath="/library-radar"
        schema={schema}
      />
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container-width section-padding">
          <Reveal className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BookOpen size={48} className="text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-dark-grey mb-6">
              Library Radar
            </h1>
            <p className="text-xl text-professional-grey leading-relaxed mb-4">
              Integrated Library Automation &amp; RFID Management Solution
            </p>
            <p className="text-lg text-professional-grey leading-relaxed">
              Designed to work alongside your existing Library Management System - including Koha and other compatible platforms - Library Radar adds a powerful RFID and automation layer to library operations, connecting staff, patrons, books, inventory, circulation, security and access control through a unified ecosystem.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Complete Library Automation Ecosystem */}
      <section className="section-padding bg-white blueprint-grid">
        <Reveal className="container-width">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-12 text-center">
              A Complete Library Automation Ecosystem
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-professional-grey leading-relaxed mb-6">
                  Library Radar combines purpose-built software with RFID hardware to support the complete lifecycle of a library resource - from RFID tagging and circulation to inventory management, security monitoring and automated returns.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-primary/5 rounded-xl">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MonitorCog size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark-grey mb-1">Staff Workstation</h3>
                      <p className="text-sm text-professional-grey">
                        A centralized platform for library staff to manage circulation, RFID encoding, inventory and system administration.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-primary/5 rounded-xl">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ShieldCheck size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark-grey mb-1">Anti-Theft &amp; Gate Monitoring</h3>
                      <p className="text-sm text-professional-grey">
                        A security monitoring environment that works with RFID gates to detect and monitor books leaving the library without proper authorization.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-professional-grey leading-relaxed mt-6">
                  The result is a more efficient, secure and largely automated library environment - with less manual processing, faster circulation and better visibility of your library assets.
                </p>
              </div>
              <div>
                <img
                  src={libraryManage}
                  alt="Library Radar library management ecosystem"
                  className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Staff Workstation */}
      <section className="section-padding mesh-gradient-subtle">
        <Reveal className="container-width">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-6 text-center">
              Staff Workstation
            </h2>
            <p className="text-lg text-professional-grey leading-relaxed text-center max-w-3xl mx-auto mb-12">
              The Staff Workstation provides librarians with the tools required to manage day-to-day RFID-enabled library operations from a centralized interface.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {workstationFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl card-hover">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark-grey mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-professional-grey leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* RFID Security & Gate Monitoring */}
      <section className="section-padding tech-gradient-animated text-white">
        <Reveal className="container-width">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              RFID Security &amp; Gate Monitoring
            </h2>
            <p className="text-xl text-white/90 leading-relaxed text-center max-w-3xl mx-auto mb-12">
              Library Radar extends beyond circulation by providing an integrated RFID security layer for the library.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {securityFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6"
                >
                  <div className="w-12 h-12 bg-white/15 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-white/85 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <img src={rfidSecurityGate1} alt="RFID Security Gate Main and Secondary" className="w-full h-64 object-contain rounded-lg bg-white p-4" />
              <img src={rfidSecurityGate2} alt="RFID Security Gate Sleek Design" className="w-full h-64 object-contain rounded-lg bg-white p-4" />
              <img src={rfidSecurityGate3} alt="RFID Security Gate with Display" className="w-full h-64 object-contain rounded-lg bg-white p-4" />
            </div>
          </div>
        </Reveal>
      </section>

      {/* RFID Hardware Ecosystem */}
      <section className="section-padding bg-white blueprint-grid">
        <Reveal className="container-width">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-6 text-center">
              The RFID Hardware Ecosystem
            </h2>
            <p className="text-lg text-professional-grey leading-relaxed text-center max-w-3xl mx-auto mb-12">
              Library Radar is supported by a complete range of RFID hardware designed to work together across different stages of library operations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {hardwareItems.map((item, index) => (
                <div
                  key={index}
                  className={`bg-white border border-border rounded-xl p-6 card-hover ${item.wide ? 'md:col-span-2' : ''}`}
                >
                  <div className="flex items-start space-x-4 mb-5">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-dark-grey mb-1">{item.title}</h3>
                      <p className="text-professional-grey text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {item.images.length > 0 ? (
                    <div className={`grid gap-4 ${item.images.some((img) => img.large) ? 'grid-cols-1' : 'grid-cols-3'}`}>
                      {item.images.map((image, imageIndex) => (
                        <img
                          key={imageIndex}
                          src={image.src}
                          alt={image.alt}
                          className={`w-full ${image.large ? 'h-72' : 'h-40'} object-contain rounded-lg bg-secondary/5 p-4`}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="w-full h-40 bg-secondary/5 rounded-lg flex items-center justify-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                        <item.icon size={32} className="text-primary" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* How the Ecosystem Works */}
      <section className="section-padding mesh-gradient-subtle">
        <Reveal className="container-width">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-6 text-center">
              How the Ecosystem Works
            </h2>
            <p className="text-lg text-professional-grey leading-relaxed text-center max-w-3xl mx-auto mb-12">
              Library Radar connects the different stages of library operations into a single ecosystem - a typical resource lifecycle flows through the system end to end, alongside your existing Library Management System.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {ecosystemSteps.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-xl card-hover">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-4">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-lg font-semibold text-dark-grey mb-2">{step.title}</h3>
                  <p className="text-sm text-professional-grey leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Built Around Your Existing Library System */}
      <section className="section-padding bg-white blueprint-grid">
        <Reveal className="container-width">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src={educationLibrary}
                  alt="Library Radar integrates with your existing library system"
                  className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                  <LibraryBig size={28} className="text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-6">
                  Built Around Your Existing Library System
                </h2>
                <p className="text-lg text-professional-grey leading-relaxed mb-6">
                  Library Radar is designed to complement - rather than unnecessarily replace - an institution\u2019s existing Library Management System. Whether you use Koha or another compatible LMS, Library Radar provides the RFID automation and hardware integration layer required to modernize physical library operations.
                </p>
                <p className="text-professional-grey leading-relaxed mb-6">
                  This approach allows institutions to build on their existing digital infrastructure while introducing automation across circulation, inventory, security, self-service and access control.
                </p>
                <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/20 rounded-full px-5 py-2.5">
                  <CheckCircle size={18} className="text-primary" />
                  <span className="text-dark-grey font-medium">Works with Koha &amp; other compatible LMS platforms</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Transforming Library Operations */}
      <section className="section-padding mesh-gradient-subtle">
        <Reveal className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-6 text-center">
              Transforming Library Operations
            </h2>
            <p className="text-lg text-professional-grey leading-relaxed text-center max-w-3xl mx-auto mb-12">
              With the right combination of software and hardware, Library Radar enables institutions to move from heavily manual library processes toward a more connected and automated operating model.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {transformationBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg card-hover">
                  <CheckCircle size={22} className="flex-shrink-0 text-primary mt-0.5" />
                  <span className="text-dark-grey">{benefit}</span>
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
            Modernize Your Library Today
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Request a demo of Library Radar and discover how RFID technology can
            transform your library operations - fully integrated with your existing library system.
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

export default LibraryRadar;