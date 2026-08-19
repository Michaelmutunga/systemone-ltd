import { GraduationCap, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import { SITE } from '@/lib/site';

const CampusCURA = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'CampusCURA ERP',
    url: `${SITE.url}/campus-cura`,
    provider: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
    areaServed: 'Kenya',
    description:
      'CampusCURA is an education ERP for schools, colleges, and universities, combining student, finance, attendance, and library management.',
  };

  return (
    <Layout>
      <Seo
        title="CampusCURA ERP | System One Ltd"
        description="CampusCURA is an education ERP for schools, colleges, and universities, combining student, finance, attendance, and library management."
        canonicalPath="/campus-cura"
        schema={schema}
      />
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <GraduationCap size={48} className="text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-dark-grey mb-6">
              CampusCURA ERP
            </h1>
            <p className="text-xl text-professional-grey leading-relaxed">
              Our flagship Education ERP solution designed to streamline operations for schools, 
              colleges, and universities. A single, centralized system that improves efficiency, 
              accountability, and student experience.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-12 text-center">
              Key Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Student enrollment & management',
                'Finance & accounting',
                'Attendance & timetable scheduling',
                'Library management',
                'Examination and grading',
                'Access control integration'
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-primary/5 rounded-lg"
                >
                  <CheckCircle size={24} className="flex-shrink-0 text-primary mt-1" />
                  <span className="text-lg text-dark-grey">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-secondary/20">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-8 text-center">
              Why Choose CampusCURA?
            </h2>
            
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mb-8">
              <p className="text-lg text-dark-grey leading-relaxed">
                CampusCURA enables institutions to improve efficiency, accountability, and student 
                experience by providing a single, centralized system that integrates all aspects of 
                educational management.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'Streamlined Operations',
                  description: 'Automate routine tasks and reduce manual paperwork, allowing staff to focus on what matters most - education.'
                },
                {
                  title: 'Data-Driven Decisions',
                  description: 'Access real-time analytics and reporting to make informed decisions about your institution\'s future.'
                },
                {
                  title: 'Enhanced Student Experience',
                  description: 'Provide students and parents with self-service portals for grades, attendance, and fee payments.'
                },
                {
                  title: 'Financial Transparency',
                  description: 'Track all financial transactions with comprehensive accounting and reporting tools.'
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-xl card-hover">
                  <h3 className="text-xl font-semibold text-dark-grey mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-professional-grey">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding tech-gradient text-white">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Institution?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Get in touch to request a demo of CampusCURA and see how it can 
            streamline your educational institution's operations.
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
        </div>
      </section>
    </Layout>
  );
};

export default CampusCURA;
