import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, User, ArrowLeft, ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import { blogArticles, getBlogArticle } from '@/lib/blog-data';
import { SITE } from '@/lib/site';

const BlogPost = () => {
  const { slug } = useParams();
  const article = getBlogArticle(slug ?? '');

  if (!article) {
    return <Navigate to="/not-found" replace />;
  }

  const articleIndex = blogArticles.findIndex((a) => a.slug === slug);
  const prevArticle = articleIndex > 0 ? blogArticles[articleIndex - 1] : null;
  const nextArticle = articleIndex < blogArticles.length - 1 ? blogArticles[articleIndex + 1] : null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.dateISO,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE.url}/system-one-logo.webp`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE.url}/blog/${article.slug}`,
    },
  };

  return (
    <Layout>
      <Seo
        title={`${article.title} | System One Ltd Blog`}
        description={article.description}
        canonicalPath={`/blog/${article.slug}`}
        imagePath={typeof article.image === 'string' ? article.image : undefined}
        schema={schema}
      />

      {/* Article Header */}
      <section className="hero-section">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <div className="flex items-center gap-4 text-sm text-professional-grey mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {article.date}
              </span>
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {article.author}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-dark-grey leading-tight">
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article Image */}
      <section className="section-padding pt-0">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={article.image}
                alt={article.imageAlt}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding pt-0">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div
              className="prose prose-lg max-w-none prose-headings:text-dark-grey prose-p:text-professional-grey prose-a:text-primary prose-strong:text-dark-grey"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </div>
      </section>

      {/* Navigation Between Articles */}
      <section className="section-padding border-t border-border">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {prevArticle ? (
                <Link
                  to={`/blog/${prevArticle.slug}`}
                  className="group p-6 border border-border rounded-xl hover:border-primary hover:shadow-md transition-all"
                >
                  <span className="text-sm text-professional-grey">Previous Article</span>
                  <h3 className="text-lg font-semibold text-dark-grey group-hover:text-primary transition-colors mt-1">
                    {prevArticle.title}
                  </h3>
                </Link>
              ) : (
                <div />
              )}
              {nextArticle ? (
                <Link
                  to={`/blog/${nextArticle.slug}`}
                  className="group p-6 border border-border rounded-xl hover:border-primary hover:shadow-md transition-all text-right"
                >
                  <span className="text-sm text-professional-grey">Next Article</span>
                  <h3 className="text-lg font-semibold text-dark-grey group-hover:text-primary transition-colors mt-1">
                    {nextArticle.title}
                  </h3>
                </Link>
              ) : (
                <div />
              )}
            </div>
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

export default BlogPost;
