import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, Brain, Trophy, ArrowRightCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section with Parallax */}
      <section 
        className="parallax min-h-screen flex items-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072")'
        }}
      >
        <div className="parallax-overlay" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl md:text-7xl font-bold leading-tight text-white">
              Transform Your Ideas into Successful Digital Products
            </h1>
            <p className="text-xl mt-6 text-white/90">
              Specialized in MVP development and social branding to help startups validate ideas
              and build a strong digital presence.
            </p>
            <div className="mt-10 space-x-4">
              <Link to="/contact" className="btn-primary bg-white text-primary">
                Get Your MVP Built
              </Link>
              <Link to="/contact" className="btn-secondary border-2">
                Boost Your Brand
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why INNOGENESIS Section */}
      <section className="section bg-white relative z-10">
        <div className="container">
          <h2 className="heading text-center">Why Choose INNOGENESIS?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <Brain className="h-12 w-12 text-primary" />,
                title: 'MVP Development',
                description: 'Build, test, and validate your ideas with minimal investment.',
              },
              {
                icon: <Users className="h-12 w-12 text-primary" />,
                title: 'Social Branding',
                description: 'Establish a strong digital presence for your startup.',
              },
              {
                icon: <Trophy className="h-12 w-12 text-primary" />,
                title: 'Training Program',
                description: 'Collaborate with colleges for real-world project experience.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
              >
                {item.icon}
                <h3 className="text-xl font-bold mt-4">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section with Parallax */}
      <section 
        className="parallax py-32"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2070")'
        }}
      >
        <div className="parallax-overlay" />
        <div className="container parallax-content">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">How We Work</h2>
          <div className="space-y-16">
            {/* MVP Development Process */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8 text-white">MVP Development Process</h3>
              <div className="relative">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-white/20 transform -translate-y-1/2 hidden md:block"></div>
                <div className="grid md:grid-cols-4 gap-8">
                  {[
                    {
                      step: 1,
                      title: 'Idea Validation',
                      description: 'Research and validate your concept',
                    },
                    {
                      step: 2,
                      title: 'Prototype Development',
                      description: 'Build a working prototype',
                    },
                    {
                      step: 3,
                      title: 'Market Feedback',
                      description: 'Gather user feedback',
                    },
                    {
                      step: 4,
                      title: 'Iteration',
                      description: 'Refine based on insights',
                    },
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="relative"
                    >
                      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg relative z-10 border border-white/20">
                        <div className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto">
                          {step.step}
                        </div>
                        <h4 className="text-lg font-bold text-center mb-2 text-white">{step.title}</h4>
                        <p className="text-white/80 text-center">{step.description}</p>
                      </div>
                      {index < 3 && (
                        <ArrowRightCircle className="absolute top-1/2 -right-4 text-white h-8 w-8 transform -translate-y-1/2 hidden md:block z-20" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Branding Section */}
      <section className="section bg-white relative z-10">
        <div className="container">
          <h2 className="heading text-center mb-12">Social Branding Excellence</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold">Build Your Brand Presence</h3>
              <p className="text-gray-600">
                We help you create a compelling brand story and establish a strong presence across all social media platforms.
              </p>
              <ul className="space-y-4">
                {[
                  'Strategic Content Planning',
                  'Engagement Optimization',
                  'Community Building',
                  'Analytics & Growth',
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=1000"
                alt="Social Branding"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA with Parallax */}
      <section 
        className="parallax py-32"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=2070")'
        }}
      >
        <div className="parallax-overlay" />
        <div className="container text-center parallax-content">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">
            Let's transform your idea into a successful digital product.
          </p>
          <div className="space-x-4">
            <Link to="/contact" className="btn-primary bg-white text-primary">
              Get Started Now
            </Link>
            <Link to="/contact" className="btn-secondary border-2 border-white">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;