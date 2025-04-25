import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, BookOpen, Coffee } from 'lucide-react';

const InsideCompany = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="parallax min-h-[60vh] flex items-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2070")'
        }}
      >
        <div className="parallax-overlay" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">Inside INNOGENESIS</h1>
            <p className="text-xl mt-6 max-w-2xl text-white/90">
              Discover our work culture, development methodologies, and how we're shaping the future
              of digital innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="section bg-white relative z-10">
        <div className="container">
          <h2 className="heading text-center mb-12">How We Work</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
                alt="Team Collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Development Methodology</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: <Code className="h-6 w-6" />,
                    title: 'Agile Development',
                    description: 'Two-week sprints with regular client feedback and iterations.',
                  },
                  {
                    icon: <Users className="h-6 w-6" />,
                    title: 'Cross-functional Teams',
                    description: 'Developers, designers, and strategists working together.',
                  },
                  {
                    icon: <Coffee className="h-6 w-6" />,
                    title: 'Daily Stand-ups',
                    description: 'Regular communication to ensure project alignment.',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="text-primary">{item.icon}</div>
                    <div>
                      <h4 className="font-bold">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights & Blog Section */}
      <section 
        className="parallax py-32"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2070")'
        }}
      >
        <div className="parallax-overlay" />
        <div className="container relative z-10">
          <h2 className="heading text-center mb-12 text-white">Latest Insights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'The Art of MVP Development',
                category: 'Development',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800',
                date: 'March 15, 2024',
              },
              {
                title: 'Social Branding Strategies',
                category: 'Marketing',
                image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?auto=format&fit=crop&w=800',
                date: 'March 10, 2024',
              },
              {
                title: 'Student Success Stories',
                category: 'Education',
                image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800',
                date: 'March 5, 2024',
              },
            ].map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-white/20"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-white/80 font-medium">{post.category}</div>
                  <h3 className="text-xl font-bold mt-2 text-white">{post.title}</h3>
                  <p className="text-white/60 text-sm mt-2">{post.date}</p>
                  <button className="mt-4 text-white font-medium hover:text-white/80">
                    Read More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* College Collaborations Section */}
      <section className="section bg-white relative z-10">
        <div className="container">
          <h2 className="heading text-center mb-12">College Collaborations</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Training Impact</h3>
              <div className="space-y-6">
                {[
                  { label: 'Students Trained', value: '500+' },
                  { label: 'Partner Universities', value: '10' },
                  { label: 'Success Rate', value: '95%' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex justify-between items-center border-b pb-4"
                  >
                    <span className="text-gray-600">{stat.label}</span>
                    <span className="text-2xl font-bold text-primary">{stat.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800"
                alt="College Collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
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
          <h2 className="text-4xl font-bold">Join Our Growing Team</h2>
          <p className="mt-4 text-xl">
            We're always looking for talented individuals to join our mission.
          </p>
          <div className="mt-8">
            <button className="btn-primary bg-white text-primary">View Opportunities</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsideCompany;