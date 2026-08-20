import { Suspense, lazy, useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import { SITE } from '@/lib/site';
const Map = lazy(() => import('@/components/Map'));
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE.name,
    url: `${SITE.url}/contact`,
    email: SITE.email,
    telephone: SITE.phoneDisplay,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.streetAddress,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    openingHours: SITE.hours,
    hasMap: SITE.googleMapsUrl,
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email via Supabase edge function
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours."
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <Layout>
      <Seo
        title="Contact System One Ltd | Request a Demo"
        description="Contact System One Ltd by phone, email, or the website form to request a consultation, demo, or support."
        canonicalPath="/contact"
        schema={schema}
      />
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-dark-grey mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-professional-grey leading-relaxed">
              Ready to transform your business with innovative technology solutions? 
              Let's discuss how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding blueprint-grid">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-dark-grey mb-6">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-grey mb-2">
                      Full Name *
                    </label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Your full name" />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-grey mb-2">
                      Email Address *
                    </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="your@email.com" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-dark-grey mb-2">
                      Company Name
                    </label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleInputChange} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Your company" />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-dark-grey mb-2">
                      Service of Interest
                    </label>
                    <select id="service" name="service" value={formData.service} onChange={handleInputChange} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                      <option value="">Select a service</option>
                      <option value="erp">ERP Systems</option>
                      <option value="consulting">IT Consultancy</option>
                      <option value="development">Software Development</option>
                      <option value="networking">Networking Solutions</option>
                      <option value="hardware">Hardware Solutions</option>
                      <option value="support">Support Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-grey mb-2">
                    Message *
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={6} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none" placeholder="Tell us about your project or requirements..." />
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={20} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-dark-grey mb-6">
                  Contact Information
                </h2>
                <p className="text-professional-grey mb-8">
                  Get in touch with our team for immediate assistance or to schedule 
                  a consultation. We're here to help you succeed.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-grey mb-1">Email Us</h3>
                    <p className="text-professional-grey">info@systemoneltd.com</p>
                    <p className="text-professional-grey">support@systemoneltd.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-grey mb-1">Call Us</h3>
                    <p className="text-professional-grey">+254 716 003 953</p>
                    <p className="text-professional-grey">+254 734 025 131</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-grey mb-1">Visit Us</h3>
                    <p className="text-professional-grey">
                      Greatwall Apartments<br />
                      Beijing Road<br />
                      Nairobi, Kenya
                    </p>
                    <a
                      href={SITE.googleMapsUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex mt-3 text-primary font-medium hover:underline"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-grey mb-1">Office Hours</h3>
                    <p className="text-professional-grey">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Emergency Support Only
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency Support */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <h3 className="font-semibold text-dark-grey mb-2">
                  24/7 Emergency Support
                </h3>
                <p className="text-professional-grey text-sm mb-3">
                  For critical system issues and emergencies, our support team 
                  is available around the clock.
                </p>
                <div className="flex items-center space-x-2">
                  <Phone size={16} className="text-primary" />
                  <span className="font-medium text-primary">+254 718 375 717</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="section-padding mesh-gradient-subtle">
        <div className="container-width">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-dark-grey mb-4">
              Find Our Office
            </h2>
            <p className="text-xl text-professional-grey">
              Located at the edge of Nairobi
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8">
            <Suspense
              fallback={
                <div className="h-96 rounded-xl bg-secondary/10 animate-pulse" aria-busy="true" aria-label="Loading map" />
              }
            >
              <Map />
            </Suspense>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Contact;
