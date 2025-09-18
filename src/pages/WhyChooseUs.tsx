import { Shield, DollarSign, Users, Clock, Award, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

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
      stats: '50+ Certifications',
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
      name: 'Deputy Vice-Chancellor',
      company: 'Maasai Mara University',
      role: 'Deputy Vice-Chancellor (Academic Affairs)',
      quote: 'We chose CampusCURA because we wanted an ERP tailored for education. It has delivered beyond expectations — from automating finance to streamlining student services. The support from System One has been excellent.',
    },
    {
      name: 'Chief Librarian',
      company: 'Karatina University',
      role: 'Chief Librarian',
      quote: 'System One\'s Library Radar has transformed the way we manage our library resources. The RFID security gates and biometric integration have reduced book losses and streamlined student access. We now have a modern, secure, and efficient library experience for our users.',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-dark-grey mb-6">
              Why Choose System One Ltd?
            </h1>
            <p className="text-xl text-professional-grey leading-relaxed">
              Discover what sets us apart as Kenya's leading technology solutions provider 
              and why businesses trust us with their most critical IT needs.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section-padding bg-white">
        <div className="container-width">
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
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section-padding bg-secondary/20">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-4">
              System One vs. Competitors
            </h2>
            <p className="text-xl text-professional-grey">
              See how we stack up against other technology providers
            </p>
          </div>
          
          <div className="bg-white rounded-2xl overflow-hidden shadow-large">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Features</th>
                    <th className="px-6 py-4 text-center">System One</th>
                    <th className="px-6 py-4 text-center">Competitor A</th>
                    <th className="px-6 py-4 text-center">Competitor B</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ['24/7 Local Support', '✓', '✗', '✓'],
                    ['Custom Development', '✓', '✓', '✗'],
                    ['Affordable Pricing', '✓', '✗', '✓'],
                    ['10+ Years Experience', '✓', '✓', '✗'],
                    ['Free Consultation', '✓', '✗', '✗'],
                    ['Local Presence in Kenya', '✓', '✗', '✗'],
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-secondary/10">
                      <td className="px-6 py-4 font-medium text-dark-grey">{row[0]}</td>
                      <td className="px-6 py-4 text-center text-primary font-bold">{row[1]}</td>
                      <td className="px-6 py-4 text-center text-professional-grey">{row[2]}</td>
                      <td className="px-6 py-4 text-center text-professional-grey">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-width">
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
        </div>
      </section>

      {/* Certifications & Partnerships */}
      <section className="section-padding bg-secondary/20">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-4">
              Certifications & Partnerships
            </h2>
            <p className="text-xl text-professional-grey">
              Recognized expertise and trusted partnerships
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              'Microsoft Certified Partner',
              'Cisco Technology Partner',
              'Oracle Silver Partner',
              'Google Cloud Partner',
              'AWS Consulting Partner',
              'ISO 27001 Certified',
              'CompTIA Authorized',
              'VMware Partner',
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl text-center card-hover"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Award size={24} className="text-primary" />
                </div>
                <p className="text-sm font-medium text-dark-grey">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding tech-gradient text-white">
        <div className="container-width text-center">
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
              Get Free Consultation
            </Link>
            <Link
              to="/services"
              className="border border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-200"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhyChooseUs;
