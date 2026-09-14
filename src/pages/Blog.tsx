import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, BookOpen, Tag } from 'lucide-react';
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

const Blog = () => {
  const featured = blogArticles[0];
  const remaining = blogArticles.slice(1);

  return (
    <Layout>
      <Seo
        title="RFID Insights & Industry News | System One Ltd Blog"
        description="Articles about RFID technology, library management, asset tracking, and education solutions in Kenya. Expert insights from System One Ltd."
        canonicalPath="/blog"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-primary/20">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, white 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        <div className="container-width section-padding relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-white/90">System One Ltd Blog</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              RFID Insights &<br />
              <span className="text-primary">Industry News</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
              Practical articles about RFID technology, library management, asset tracking, and how Kenyan institutions are using these solutions to work smarter.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section-padding">
        <div className="container-width">
          <Link
            to={`/blog/${featured.slug}`}
            className="group block"
          >
            <div className="relative rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 grid md:grid-cols-2 gap-0">
              <div className="relative h-72 md:h-auto md:min-h-[420px] overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/20 md:to-slate-900/40" />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  {(() => {
                    const cat = getCategory(featured.slug);
                    return (
                      <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${cat.color}`}>
                        <Tag className="w-3 h-3" />
                        {cat.label}
                      </span>
                    );
                  })()}
                  <span className="flex items-center gap-1 text-sm text-professional-grey">
                    <Calendar className="w-3.5 h-3.5" />
                    {featured.date}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-dark-grey mb-4 group-hover:text-primary transition-colors leading-tight">
                  {featured.title}
                </h2>
                <p className="text-professional-grey leading-relaxed mb-6 line-clamp-3">
                  {featured.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sm text-professional-grey">
                    <User className="w-4 h-4" />
                    {featured.author}
                  </span>
                  <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Articles Grid - Varied Layout */}
      <section className="pb-16">
        <div className="container-width">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Latest Articles</h2>
            <div className="h-px flex-1 bg-gradient-to-l from-primary/40 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {remaining.map((article, index) => {
              const cat = getCategory(article.slug);
              const isLarge = index === 0 || index === 3;

              return (
                <Link
                  key={article.slug}
                  to={`/blog/${article.slug}`}
                  className={`group ${isLarge ? 'md:col-span-2' : ''}`}
                >
                  <div className={`relative rounded-2xl overflow-hidden bg-white border border-slate-100 hover:border-primary/20 shadow-md hover:shadow-xl transition-all duration-400 ${isLarge ? 'grid md:grid-cols-[1.2fr_1fr] gap-0' : 'flex flex-col'}`}>
                    <div className={`relative overflow-hidden ${isLarge ? 'h-64 md:h-80' : 'h-56'}`}>
                      <img
                        src={article.image}
                        alt={article.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${cat.color} backdrop-blur-sm`}>
                          <Tag className="w-3 h-3" />
                          {cat.label}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white rounded-full p-2 shadow-lg">
                          <ArrowRight className="w-4 h-4 text-primary" />
                        </div>
                      </div>
                    </div>
                    <div className={`p-6 ${isLarge ? 'md:p-8 flex flex-col justify-center' : ''}`}>
                      <div className="flex items-center gap-3 text-sm text-professional-grey mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {article.date}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-slate-300" />
                        <span className="flex items-center gap-1">
                          <User className="w-3.5 h-3.5" />
                          {article.author}
                        </span>
                      </div>
                      <h3 className={`font-bold text-dark-grey mb-3 group-hover:text-primary transition-colors leading-snug ${isLarge ? 'text-xl md:text-2xl' : 'text-lg'}`}>
                        {article.title}
                      </h3>
                      <p className={`text-professional-grey leading-relaxed ${isLarge ? 'line-clamp-3' : 'line-clamp-2 text-sm'}`}>
                        {article.excerpt}
                      </p>
                      <div className="mt-4 inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
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

export default Blog;
