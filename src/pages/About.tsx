import { Target, Eye, Award, Users2 } from 'lucide-react';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import { SITE } from '@/lib/site';
import Reveal from '@/components/Reveal';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We constantly seek innovative solutions to solve complex business challenges.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every project and client interaction.',
    },
    {
      icon: Users2,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners in their success.',
    },
    {
      icon: Eye,
      title: 'Integrity',
      description: 'We maintain the highest standards of honesty and transparency.',
    },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About System One Ltd',
    url: `${SITE.url}/about`,
    description: 'Learn about System One Ltd, our mission, leadership, values, and experience delivering technology solutions across Kenya.',
    about: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
  };

  return (
    <Layout>
      <Seo
        title="About System One Ltd | RFID & Education Technology in Kenya"
        description="Learn about System One Ltd — Kenya's trusted RFID and education technology partner for universities, TVET colleges and institutions."
        canonicalPath="/about"
        schema={schema}
      />
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container-width section-padding">
          <Reveal className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-dark-grey mb-6">
              About System One Ltd
            </h1>
            <p className="text-xl text-professional-grey leading-relaxed">
              Founded with a mission to transform businesses through technology, 
              System One Ltd has been at the forefront of delivering innovative 
              IT solutions across Kenya for over a decade.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding blueprint-grid">
        <Reveal className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-dark-grey mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-professional-grey">
                <p>
                  System One Ltd was established to bridge the gap between cutting-edge 
                  technology and practical business solutions. We recognized that many 
                  businesses in Kenya needed reliable, affordable, and scalable technology 
                  solutions to compete in the global marketplace.
                </p>
                <p>
                  Over the years, we have grown from a small startup to a trusted partner 
                  for businesses of all sizes. Our team of experienced professionals brings 
                  together decades of combined experience in software development, IT 
                  infrastructure, and business consulting.
                </p>
                <p>
                  Today, we serve clients across various industries, from small startups 
                  to large enterprises, helping them leverage technology to achieve their 
                  business objectives and drive sustainable growth.
                </p>
              </div>
            </div>
            <div className="bg-secondary/30 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-professional-grey">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">200+</div>
                  <div className="text-sm text-professional-grey">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-professional-grey">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-professional-grey">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding section-dark">
        <Reveal className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl card-hover">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Target size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-dark-grey mb-4">Our Mission</h3>
              <p className="text-professional-grey">
                To empower businesses across Kenya with innovative, reliable, and 
                affordable technology solutions that drive growth, improve efficiency, 
                and create competitive advantages in the digital age.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl card-hover">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Eye size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-dark-grey mb-4">Our Vision</h3>
              <p className="text-professional-grey">
                To be the leading technology solutions provider in East Africa, 
                recognized for our innovation, reliability, and commitment to 
                transforming businesses through cutting-edge technology.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Values */}
      <section className="section-padding blueprint-grid">
        <Reveal className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-professional-grey max-w-3xl mx-auto">
              The principles that guide everything we do and define our commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center space-y-4 p-6 rounded-xl card-hover bg-secondary/10"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                  <value.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-dark-grey">
                  {value.title}
                </h3>
                <p className="text-professional-grey">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Team Section */}
      <section className="section-padding mesh-gradient-subtle">
        <Reveal className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-professional-grey">
              Experienced professionals dedicated to your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'John Erick Okatch',
                role: 'Chief Executive Officer',
                description: 'Visionary leader driving System One Ltd\'s strategic direction and innovation.',
              },
              {
                name: 'Lynette Nzamalu',
                role: 'Director',
                description: 'Operations director ensuring excellence in service delivery and client satisfaction.',
              },
              {
                name: 'Ruth Muyala',
                role: 'Admin',
                description: 'Administrative professional managing day-to-day operations and client support.',
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl card-hover text-center"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users2 size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-dark-grey mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-professional-grey text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </Layout>
  );
};

export default About;
