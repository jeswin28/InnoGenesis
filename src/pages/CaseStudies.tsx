import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Star, TrendingUp, Users } from 'lucide-react';

const CaseStudies = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="parallax min-h-[60vh] flex items-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2070")'
        }}
      >
        <div className="parallax-overlay" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">Our Success Stories</h1>
            <p className="text-xl mt-6 max-w-2xl text-white/90">
              Discover how we've helped startups and brands achieve their goals through MVP
              development and strategic social branding.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MVP Success Stories */}
      <section className="section bg-white relative z-10">
        <div className="container">
          <h2 className="heading text-center mb-12">MVP Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                id: 'connecting-dreams',
                title: 'Connecting Dreams',
                description: 'Bridging international education gaps with innovative mobile app',
                metrics: [
                  { label: 'Active Users', value: '50,000+' },
                  { label: 'Universities', value: '200+' },
                  { label: 'User Growth', value: '300%' },
                ],
                image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800',
              },
              {
                id: 'verse-healthcare',
                title: 'Verse Health Care',
                description: 'Revolutionizing medical tourism with seamless patient care coordination',
                metrics: [
                  { label: 'Patient Bookings', value: '5,000+' },
                  { label: 'Hospital Network', value: '50+' },
                  { label: 'Revenue Growth', value: '200%' },
                ],
                image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=800',
              },
            ].map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
              >
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold">{study.title}</h3>
                  <p className="text-gray-600 mt-2">{study.description}</p>
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    {study.metrics.map((metric, i) => (
                      <div key={i}>
                        <p className="text-sm text-gray-500">{metric.label}</p>
                        <p className="text-lg font-bold text-primary">{metric.value}</p>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to={`/case-studies/${study.id}`}
                    className="mt-6 flex items-center text-primary font-semibold hover:text-secondary"
                  >
                    View Case Study <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Branding Success Stories */}
      <section 
        className="parallax py-32"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=2070")'
        }}
      >
        <div className="parallax-overlay" />
        <div className="container relative z-10">
          <h2 className="heading text-center mb-12 text-white">Social Branding Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                id: 'urban-bites',
                title: 'Urban Bites',
                description: 'Transforming a local restaurant chain into a digital-first brand',
                metrics: [
                  { label: 'Social Growth', value: '2400%' },
                  { label: 'Engagement', value: '300%' },
                  { label: 'Revenue', value: '180%' },
                ],
                image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800',
              },
              {
                id: 'eco-fashion',
                title: 'EcoVogue Fashion',
                description: 'Building a sustainable fashion brand through digital storytelling',
                metrics: [
                  { label: 'Community', value: '100K+' },
                  { label: 'Conversion', value: '25%' },
                  { label: 'Growth', value: '40%' },
                ],
                image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=800',
              },
            ].map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-white/20"
              >
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                  <p className="text-white/80 mt-2">{study.description}</p>
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    {study.metrics.map((metric, i) => (
                      <div key={i}>
                        <p className="text-sm text-white/60">{metric.label}</p>
                        <p className="text-lg font-bold text-white">{metric.value}</p>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to={`/case-studies/${study.id}`}
                    className="mt-6 flex items-center text-white font-semibold hover:text-white/80"
                  >
                    View Case Study <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white relative z-10">
        <div className="container">
          <h2 className="heading text-center mb-12">Client Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Priya Sharma',
                role: 'Founder, Connecting Dreams',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300',
                quote: "INNOGENESIS helped us create a platform that truly bridges the gap between Indian students and international education opportunities. Their expertise in Flutter and Firebase was invaluable.",
              },
              {
                name: 'Dr. Sarah Chen',
                role: 'CEO, Verse Health Care',
                image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300',
                quote: "The team at INNOGENESIS transformed our vision into reality. Their MVP approach helped us validate our medical tourism platform quickly and scale effectively across multiple countries.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 italic">{testimonial.quote}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="parallax py-32"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=2070")'
        }}
      >
        <div className="parallax-overlay" />
        <div className="container text-center parallax-content">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Success Story?</h2>
          <p className="text-xl mb-8">
            Let's create your MVP or transform your brand presence together.
          </p>
          <div className="space-x-4">
            <Link to="/contact" className="btn-primary bg-white text-primary">
              Get Your MVP Built
            </Link>
            <Link to="/contact" className="btn-secondary border-2 border-white">
              Boost Your Brand
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;