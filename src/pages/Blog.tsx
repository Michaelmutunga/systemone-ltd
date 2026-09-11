import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import { blogArticles } from '@/lib/blog-data';
import { SITE } from '@/lib/site';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'RFID Insights & Industry News | System One Ltd Blog',
  url: `${SITE.url}/blog`,
  description: 'Articles about RFID technology, library management, asset tracking, and education solutions in Kenya by System One Ltd.',
  publisher: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
  },
};

const Blog = () => {
  return (
    <Layout>
      <Seo
        title="RFID Insights & Industry News | System One Ltd Blog"
        description="Articles about RFID technology, library management, asset tracking, and education solutions in Kenya. Expert insights from System One Ltd."
        canonicalPath="/blog"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Our Blog</p>
            <h1 className="text-4xl md:text-5xl font-bold text-dark-grey mb-6">
              RFID Insights & Industry News
            </h1>
            <p className="text-xl text-professional-grey leading-relaxed">
              Practical articles about RFID technology, library management, asset tracking, and how Kenyan institutions are using these solutions to work smarter.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding blueprint-grid">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.map((article) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="group bg-white border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-professional-grey mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {article.author}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-dark-grey mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-professional-grey mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-medium">
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding mesh-gradient-subtle">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-4">
              Ready to Implement RFID?
            </h2>
            <p className="text-xl text-professional-grey mb-8">
              Whether you're looking for library management, asset tracking, or access control solutions, our team can help you find the right approach for your institution.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
