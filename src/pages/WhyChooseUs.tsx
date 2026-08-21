import { Shield, DollarSign, Users, Clock, Award, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import { SITE } from '@/lib/site';
import Reveal from '@/components/Reveal';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Trust & Reliability',
      description: 'With over 10 years of experience and 200+ successful projects, we have built a reputation for delivering reliable, secure solutions that businesses can depend on.',
      stats: '99.9% Uptime',
    },
    {
      icon: DollarSign,
      title: 'Affordable Solutions',
      description: 'We believe that quality technology should be accessible to businesses of all sizes. Our competitive pricing ensures you get maximum value for your investment.',
      stats: '30% Cost Savings',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our certified professionals bring decades of combined experience in enterprise software, networking, and IT infrastructure to every project.',
      stats: '20+ Specialists',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support ensures your business operations continue smoothly. Our responsive team is always ready to help when you need it.',
      stats: '<2hr Response',
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Our portfolio of successful implementations across various industries demonstrates our ability to deliver results that drive business growth.',
      stats: '100+ Projects',
    },
    {
      icon: Zap,
      title: 'Innovation Focus',
      description: 'We stay ahead of technology trends to provide you with cutting-edge solutions that give your business a competitive advantage.',
      stats: 'Latest Technologies',
    },
  ];

  const testimonials = [
    {
      name: 'ICT Director',
      company: 'KSTVET',
      role: 'ICT Director',
      quote: 'With CampusCURA, we now have a centralized system for managing students, finance, and library services. The integration of RFID and biometrics has significantly improved accountability and security across our campuses. We highly recommend System One\'s solutions for institutions looking to modernize.',
    },
    {
      name: 'Deputy Principal',
      company: 'PC Kinyanjui Technical Training Institute',
      role: 'Deputy Principal',
      quote: 'CampusCURA, together with Library Radar, has given us one connected view of our students, finances, and learning resources. System One understood our needs, delivered on schedule, and the ongoing support has been dependable throughout.',
    },
    {
      name: 'Chief Librarian',
      company: 'Karatina University',
      role: 'Chief Librarian',
      quote: 'System One\'s Library Radar has transformed the way we manage our library resources. The RFID security gates and biometric integration have reduced book losses and streamlined student access. We now have a modern, secure, and efficient library experience for our users.',
    },
    {
      name: 'Chief Librarian',
      company: 'Kenya School of Law',
      role: 'Chief Librarian',
      quote: 'Library Radar has given us dependable control over a collection that must remain both accurate and protected. Circulation is faster, stocktaking far more reliable, and the System One team has been a true partner from planning through to ongoing support.',
    },
    {
      name: 'Head of ICT',
      company: 'Bandari Maritime Academy',
      role: 'Head of ICT',
      quote: 'System One took time to understand our operating environment before recommending anything. The implementation was well coordinated with our existing systems, and the training made adoption straightforward for our staff.',
    },
    {
      name: 'Deputy University Librarian',
      company: 'Machakos University',
      role: 'Deputy University Librarian',
      quote: 'The combination of Library Radar with biometric identification has streamlined both access and circulation for our users. System One listened to our workflows, proposed practical improvements, and has supported us well beyond installation.',
    },
    {
      name: 'ICT Officer',
      company: 'University of Embu',
      role: 'ICT Officer',
      quote: 'We valued how System One treated the project as a partnership rather than a transaction. Their technical guidance helped us make the right choices for our environment, and service after deployment has been consistent and responsive.',
    },
    {
      name: 'University Librarian',
      company: 'Kibabii University',
      role: 'University Librarian',
      quote: 'From the first consultation to go-live, System One kept us informed and involved at every stage. The RFID rollout ran smoothly, our team was well trained, and we now have the visibility and control over our resources that we needed.',
    },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Why Choose System One Ltd',
    url: `${SITE.url}/why-choose-us`,
    description:
      'See why institutions across Kenya choose System One Ltd for reliable support, affordable technology, and proven delivery.',
  };

  return (
    <Layout>
      <Seo
        title="System One Ltd | Why Choose Us — RFID Solutions Partner Kenya"
        description="Why Kenyan institutions choose System One Ltd for RFID — best RFID suppliers in Nairobi, best RFID company Kenya, top RFID suppliers Kenya, reliable RFID supplier Kenya, trusted RFID company Kenya. Trusted delivery, expert team, custom integration and ongoing support."
        canonicalPath="/why-choose-us"
        schema={schema}
      />
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container-width section-padding">
          <Reveal className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-dark-grey mb-6">
              Why Choose System One Ltd?
            </h1>
            <p className="text-xl text-professional-grey leading-relaxed">
              Discover what sets us apart as Kenya's leading technology solutions provider 
              and why businesses trust us with their most critical IT needs.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section-padding blueprint-grid">
        <Reveal className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white border border-border rounded-2xl p-8 card-hover text-center"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon size={36} className="text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">
                  {benefit.stats}
                </div>
                <h3 className="text-xl font-semibold text-dark-grey mb-4">
                  {benefit.title}
                </h3>
                <p className="text-professional-grey">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Testimonials */}
      <section className="section-padding blueprint-grid">
        <Reveal className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-professional-grey">
              Don't just take our word for it - hear from satisfied clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-secondary/10 p-8 rounded-2xl card-hover"
              >
                <div className="mb-6">
                  <div className="text-primary text-4xl mb-4">"</div>
                  <p className="text-professional-grey italic">
                    {testimonial.quote}
                  </p>
                </div>
                <div>
                  <div className="font-semibold text-dark-grey">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-professional-grey">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CTA Section */}
      <section className="section-padding tech-gradient-animated text-white">
        <Reveal className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience the System One Difference
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their businesses 
            with our reliable, affordable technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold transition-all duration-200"
            >
              Get Free Demo
            </Link>
            <Link
              to="/services"
              className="border border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-200"
            >
              View Our Services
            </Link>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
};

export default WhyChooseUs;
