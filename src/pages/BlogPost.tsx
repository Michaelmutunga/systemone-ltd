import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, User, ArrowLeft, ArrowRight, Tag, Clock } from 'lucide-react';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import { blogArticles, getBlogArticle } from '@/lib/blog-data';
import { SITE } from '@/lib/site';

const categoryColors: Record<string, string> = {
  library: 'bg-blue-100 text-blue-700',
  asset: 'bg-emerald-100 text-emerald-700',
  technology: 'bg-purple-100 text-purple-700',
  security: 'bg-red-100 text-red-700',
  inventory: 'bg-amber-100 text-amber-700',
  access: 'bg-cyan-100 text-cyan-700',
};

const getCategory = (slug: string) => {
  if (slug.includes('library')) return { label: 'Library', color: categoryColors.library };
  if (slug.includes('asset')) return { label: 'Asset Tracking', color: categoryColors.asset };
  if (slug.includes('barcode')) return { label: 'Technology', color: categoryColors.technology };
  if (slug.includes('security')) return { label: 'Security', color: categoryColors.security };
  if (slug.includes('inventory')) return { label: 'Inventory', color: categoryColors.inventory };
  if (slug.includes('access')) return { label: 'Access Control', color: categoryColors.access };
  return { label: 'RFID', color: categoryColors.technology };
};

const BlogPost = () => {
  const { slug } = useParams();
  const article = getBlogArticle(slug ?? '');

  if (!article) {
    return <Navigate to="/not-found" replace />;
  }

  const articleIndex = blogArticles.findIndex((a) => a.slug === slug);
  const prevArticle = articleIndex > 0 ? blogArticles[articleIndex - 1] : null;
  const nextArticle = articleIndex < blogArticles.length - 1 ? blogArticles[articleIndex + 1] : null;
  const cat = getCategory(article.slug);

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

      {/* Hero Image */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src={article.image}
          alt={article.imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-width pb-8 md:pb-12">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Articles
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${cat.color}`}>
                <Tag className="w-3 h-3" />
                {cat.label}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-white/70">
                <Calendar className="w-3.5 h-3.5" />
                {article.date}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-white/70">
                <User className="w-3.5 h-3.5" />
                {article.author}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding">
        <div className="container-width">
          <div className="max-w-3xl mx-auto">
            <div
              className="prose prose-lg max-w-none prose-headings:text-dark-grey prose-p:text-professional-grey prose-a:text-primary prose-strong:text-dark-grey prose-headings:font-bold"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </div>
      </section>

      {/* Author Box */}
      <section className="pb-16">
        <div className="container-width">
          <div className="max-w-3xl mx-auto">
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <User className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-xs text-professional-grey uppercase tracking-wider mb-1">Written by</p>
                <p className="font-semibold text-dark-grey">{article.author}</p>
                <p className="text-sm text-professional-grey">System One Ltd Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Between Articles */}
      <section className="pb-16">
        <div className="container-width">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {prevArticle ? (
                <Link
                  to={`/blog/${prevArticle.slug}`}
                  className="group p-5 border border-slate-200 rounded-xl hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs text-professional-grey uppercase tracking-wider flex items-center gap-1">
                    <ArrowLeft className="w-3 h-3" />
                    Previous Article
                  </span>
                  <h3 className="text-base font-semibold text-dark-grey group-hover:text-primary transition-colors mt-2 line-clamp-2">
                    {prevArticle.title}
                  </h3>
                </Link>
              ) : (
                <div />
              )}
              {nextArticle ? (
                <Link
                  to={`/blog/${nextArticle.slug}`}
                  className="group p-5 border border-slate-200 rounded-xl hover:border-primary/30 hover:shadow-md transition-all text-right"
                >
                  <span className="text-xs text-professional-grey uppercase tracking-wider flex items-center justify-end gap-1">
                    Next Article
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  <h3 className="text-base font-semibold text-dark-grey group-hover:text-primary transition-colors mt-2 line-clamp-2">
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
      <section className="section-padding tech-gradient-animated text-white">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Implement RFID?
            </h2>
            <p className="text-xl mb-8 text-white/85">
              Whether you're looking for library management, asset tracking, or access control solutions, our team can help you find the right approach for your institution.
            </p>
            <Link to="/contact" className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center gap-2">
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
