import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import { SITE } from '@/lib/site';
import assetTrackingImage from '@/assets/new assets/asset tracking.jpg';
import inventoryManagementImage from '@/assets/new assets/inventory management.PNG';
import libraryManagementImage from '@/assets/new assets/library manage.jpg';
import rfidSecurityGate from '@/assets/products/rfid-security-gate-1.png';
import rfidDesktopReader from '@/assets/products/rfid-desktop-reader-1.png';
import inventoryStockTaker from '@/assets/products/inventory-stock-taker-1.png';
import rfidTag from '@/assets/products/rfid-tag-1.png';

type Solution = {
  slug: string;
  title: string;
  image: string;
  summary: string;
  overview: string;
  workflow: string[];
  capabilities: string[];
  benefits: { title: string; description: string }[];
  components: string[];
};

const solutions: Solution[] = [
  {
    slug: 'library-management',
    title: 'Library Management',
    image: inventoryManagementImage,
    summary: 'A practical RFID workflow for libraries that need faster circulation, dependable inventory visibility, and stronger resource protection.',
    overview: 'RFID library management connects tagged books and materials with the routines your library already follows. Staff can identify groups of items quickly, support self-service circulation, locate materials during stocktaking, and receive alerts when protected resources move through monitored exit points.',
    workflow: ['Apply a unique RFID tag to each book or material.', 'Use desktop readers, handheld scanners, or self-service stations to identify items.', 'Record circulation, returns, searches, and inventory activity in the connected library workflow.', 'Use security gates and exception handling to respond to unauthorized movement.'],
    capabilities: ['Book and material tagging', 'Fast check-in and check-out workflows', 'Shelf reading and inventory audits', 'Self-service circulation support', 'RFID security gate integration'],
    benefits: [
      { title: 'Faster service', description: 'Reduce repetitive barcode scanning and help staff process multiple items more efficiently.' },
      { title: 'More accurate inventories', description: 'Make stocktaking and shelf verification more consistent, with less manual searching.' },
      { title: 'Better resource protection', description: 'Combine circulation status with monitored exits to help reduce losses.' },
    ],
    components: ['RFID library tags', 'Desktop readers', 'Handheld inventory scanners', 'Self-service kiosks', 'RFID security gates'],
  },
  {
    slug: 'asset-tracking',
    title: 'Asset Tracking',
    image: assetTrackingImage,
    summary: 'Keep a clearer record of where equipment and valuable assets are, who uses them, and how they move through the organization.',
    overview: 'RFID asset tracking gives teams a repeatable way to identify equipment and maintain movement records without relying only on handwritten logs or memory. The solution can be shaped around rooms, departments, campuses, stores, or other operational locations.',
    workflow: ['Assign an RFID tag and asset record to each item.', 'Scan assets during receiving, handover, relocation, or audit activities.', 'Compare the observed location or custodian with the expected record.', 'Use exceptions and reports to support follow-up, maintenance, and accountability.'],
    capabilities: ['Asset registration and tagging', 'Location and custody checks', 'Department or room-level audits', 'Movement and handover records', 'Exception and missing-asset follow-up'],
    benefits: [
      { title: 'Less time searching', description: 'Help teams locate equipment faster and reduce uncertainty during daily operations.' },
      { title: 'Stronger accountability', description: 'Create clearer handover and custody records for shared or high-value items.' },
      { title: 'Better planning', description: 'Use more reliable asset information to support maintenance, replacement, and utilization decisions.' },
    ],
    components: ['Durable RFID asset tags', 'Handheld RFID scanners', 'Desktop readers', 'Asset records and reporting', 'Optional system integrations'],
  },
  {
    slug: 'inventory-management',
    title: 'Inventory Management',
    image: libraryManagementImage,
    summary: 'Improve stock visibility and counting accuracy across stores, shelves, warehouses, and operational supply areas.',
    overview: 'RFID inventory management supports faster identification of stock without requiring every item to be individually handled and scanned in the same way as a barcode process. It is useful where teams need more regular counts, better location awareness, or clearer movement records.',
    workflow: ['Tag or identify the stock categories and items that need visibility.', 'Scan receiving, storage, picking, transfer, and counting activities.', 'Compare observed stock with expected quantities and locations.', 'Use discrepancies to trigger investigation, replenishment, or process improvement.'],
    capabilities: ['Receiving and put-away checks', 'Cycle counts and stock audits', 'Shelf or bin visibility', 'Stock movement records', 'Discrepancy and replenishment reporting'],
    benefits: [
      { title: 'Quicker counts', description: 'Reduce the time required to understand what is present in a store or operational area.' },
      { title: 'Fewer stock surprises', description: 'Improve visibility of misplaced, moved, or unrecorded items.' },
      { title: 'More efficient teams', description: 'Let staff spend less time on repetitive identification and more time on service and fulfilment.' },
    ],
    components: ['RFID inventory tags', 'Handheld scanners', 'Desktop or fixed readers', 'Stock records and reporting', 'ERP or inventory integrations'],
  },
  {
    slug: 'security-gates',
    title: 'Security Gates',
    image: rfidSecurityGate,
    summary: 'Monitor tagged items at controlled exit points and help teams respond when protected resources move without the expected authorization.',
    overview: 'RFID security gates provide a visible, monitored layer around libraries, stores, and other controlled environments. They work as part of a wider workflow that links tag status, circulation or movement records, and staff response procedures.',
    workflow: ['Apply and register RFID tags on protected items.', 'Configure the item or transaction status that should permit movement.', 'Monitor the exit point for detected tags and exceptions.', 'Use alerts and staff procedures to resolve suspected unauthorized movement.'],
    capabilities: ['RFID tag detection', 'Controlled exit monitoring', 'Exception alerts', 'Integration with circulation or asset workflows', 'Operational reporting'],
    benefits: [
      { title: 'Visible deterrence', description: 'Create a clear security boundary around protected materials and assets.' },
      { title: 'Faster response', description: 'Help staff identify exceptions at the moment an item passes a monitored point.' },
      { title: 'Connected protection', description: 'Coordinate gate activity with the records that determine whether movement is expected.' },
    ],
    components: ['RFID security gates', 'RFID tags', 'Reader controllers', 'Alert or monitoring workflow', 'Supporting circulation or asset software'],
  },
  {
    slug: 'tags-and-readers',
    title: 'Tags & Readers',
    image: rfidTag,
    summary: 'Select the RFID tags, readers, and scanning devices that make identification practical in your specific operating environment.',
    overview: 'Tags and readers are the foundation of an RFID deployment. The right combination depends on the material being identified, read range, movement speed, environmental conditions, and the workflow that must consume the resulting data.',
    workflow: ['Identify the items, locations, and events that require RFID visibility.', 'Select tag formats and reader types suited to the environment.', 'Test read performance and staff workflows in representative conditions.', 'Connect scanning activity to the relevant operational records and reports.'],
    capabilities: ['Tag selection and application planning', 'Desktop reader workflows', 'Handheld scanning', 'Fixed reader deployments', 'Pilot testing and integration support'],
    benefits: [
      { title: 'Fit-for-purpose deployments', description: 'Choose hardware around the real operating conditions rather than forcing one device into every workflow.' },
      { title: 'Reliable identification', description: 'Improve the consistency of item capture at service desks, stores, exits, and audit points.' },
      { title: 'A foundation for growth', description: 'Start with a focused use case and extend the RFID footprint as the organization learns.' },
    ],
    components: ['RFID tags', 'Desktop readers', 'Handheld scanners', 'Fixed readers and antennas', 'Integration and configuration services'],
  },
  {
    slug: 'attendance-and-identification',
    title: 'Attendance & Identification',
    image: rfidDesktopReader,
    summary: 'Support faster, more consistent attendance and identity workflows at access points, service desks, and institutional facilities.',
    overview: 'RFID identification can help organizations record attendance or recognize authorized users at the point where a person enters, receives a service, or uses a shared resource. The workflow should be designed with clear permissions, privacy practices, and accurate exception handling.',
    workflow: ['Issue or associate an approved RFID credential with a person or user record.', 'Read the credential at the agreed attendance, access, or service point.', 'Record the event against the appropriate time, location, or activity.', 'Review exceptions and keep identity records accurate through normal administration.'],
    capabilities: ['Credential identification', 'Attendance event capture', 'Access-point reading', 'User and permission records', 'Reporting and system integration'],
    benefits: [
      { title: 'Faster entry and service', description: 'Reduce manual identification steps at busy institutional or business touchpoints.' },
      { title: 'More consistent records', description: 'Create a repeatable event trail for attendance, access, or resource use.' },
      { title: 'Better operational visibility', description: 'Give authorized teams timely information for administration and follow-up.' },
    ],
    components: ['RFID cards or credentials', 'Readers', 'Access or attendance software', 'Administration and reporting', 'Optional integration with existing systems'],
  },
  {
    slug: 'access-control',
    title: 'Access Control',
    image: rfidSecurityGate,
    summary: 'Coordinate credentials, permissions, and controlled entry so people can access the spaces and resources they are authorized to use.',
    overview: 'RFID access control connects an identified credential with an access decision at a doorway, gate, turnstile, or other controlled point. System One can help shape the hardware, software, and operational rules around the security requirements of each facility.',
    workflow: ['Create users, credentials, and access permissions.', 'Present the credential at a controlled entry point.', 'Check the permission against the location and current access rules.', 'Record approved and denied events for administration and review.'],
    capabilities: ['Credential-based access', 'Turnstile and gate integration', 'Role or location permissions', 'Entry and exception records', 'System integration and support'],
    benefits: [
      { title: 'Clearer control', description: 'Apply consistent access rules across offices, campuses, facilities, and restricted areas.' },
      { title: 'Useful audit trails', description: 'Maintain event records that support administration, investigation, and reporting.' },
      { title: 'Flexible deployment', description: 'Build around the access points, identity systems, and policies already used by the organization.' },
    ],
    components: ['RFID credentials', 'Readers', 'Turnstiles or controlled gates', 'Access control software', 'Administration and integration services'],
  },
];

const seoTitles: Record<string, string> = {
  'library-management': 'RFID Library Management System in Kenya | System One',
  'asset-tracking': 'RFID Asset Tracking Solutions in Kenya | System One',
  'inventory-management': 'RFID Inventory Management in Kenya | System One',
  'security-gates': 'RFID Security Gates for Libraries in Kenya | System One',
  'tags-and-readers': 'RFID Tags & Readers in Kenya | System One',
  'attendance-and-identification': 'RFID Attendance & ID Systems in Kenya | System One',
  'access-control': 'RFID Access Control & Turnstiles in Kenya | System One',
};

const RfidSolution = () => {
  const { slug } = useParams();
  const solution = solutions.find((item) => item.slug === slug);

  if (!solution) {
    return <Navigate to="/not-found" replace />;
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: solution.title,
    url: `${SITE.url}/rfid-solutions/${solution.slug}`,
    provider: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    areaServed: 'Kenya',
    description: solution.summary,
  };

  return (
    <Layout>
      <Seo
        title={seoTitles[solution.slug] ?? `${solution.title} | System One Ltd`}
        description={solution.summary}
        canonicalPath={`/rfid-solutions/${solution.slug}`}
        schema={schema}
      />

      <section className="hero-section">
        <div className="container-width section-padding">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">RFID solution</p>
              <h1 className="text-4xl font-bold leading-tight text-dark-grey md:text-5xl">{solution.title}</h1>
              <p className="mt-6 max-w-xl text-xl leading-relaxed text-professional-grey">{solution.summary}</p>
              <Link to="/contact" className="btn-primary mt-8 inline-flex items-center gap-2">
                Discuss your requirements
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className="flex h-[300px] items-center justify-center overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.12)] md:h-[420px]">
              <img
                src={solution.image}
                alt={solution.title}
                decoding="async"
                className="h-auto w-auto max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding blueprint-grid">
        <div className="container-width">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">The approach</p>
              <h2 className="mt-3 text-3xl font-bold text-dark-grey md:text-4xl">Designed around the work your team already does</h2>
              <p className="mt-6 text-lg leading-8 text-professional-grey">{solution.overview}</p>
            </div>
            <div className="rounded-2xl bg-secondary/25 p-7">
              <h2 className="text-2xl font-bold text-dark-grey">Core capabilities</h2>
              <ul className="mt-6 space-y-4">
                {solution.capabilities.map((capability) => (
                  <li key={capability} className="flex items-start gap-3 text-professional-grey">
                    <CheckCircle size={20} className="mt-0.5 shrink-0 text-primary" />
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding mesh-gradient-subtle">
        <div className="container-width">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">How it works</p>
            <h2 className="mt-3 text-3xl font-bold text-dark-grey md:text-4xl">A clear operational workflow</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {solution.workflow.map((step, index) => (
              <div key={step} className="rounded-2xl border border-slate-200 bg-white p-6">
                <span className="text-sm font-bold text-primary">0{index + 1}</span>
                <p className="mt-4 leading-7 text-professional-grey">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding blueprint-grid">
        <div className="container-width">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Operational value</p>
            <h2 className="mt-3 text-3xl font-bold text-dark-grey md:text-4xl">What your organization can gain</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {solution.benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-2xl border border-slate-200 p-6">
                <h3 className="text-xl font-bold text-dark-grey">{benefit.title}</h3>
                <p className="mt-3 leading-7 text-professional-grey">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding mesh-gradient-subtle">
        <div className="container-width">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Typical components</p>
              <h2 className="mt-3 text-3xl font-bold text-dark-grey md:text-4xl">Hardware and systems that work together</h2>
              <p className="mt-5 leading-7 text-professional-grey">The final configuration depends on your environment, item types, read points, workflows, and existing systems. We help define the right combination through requirements gathering, testing, implementation, and support.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {solution.components.map((component) => (
                <div key={component} className="rounded-xl border border-slate-200 bg-white px-5 py-4 font-medium text-dark-grey">{component}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding tech-gradient text-white">
        <div className="container-width text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Plan the right RFID workflow for your operation</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-7 text-white/90">Tell us what you need to identify, protect, count, or connect. We can help you evaluate the use case and shape a practical deployment.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-primary transition-colors hover:bg-white/90">
            Talk to System One
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default RfidSolution;
