import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Users, Target, TrendingUp } from 'lucide-react';

const caseStudies = {
  'connecting-dreams': {
    title: 'Connecting Dreams',
    subtitle: 'Bridging international education gaps with innovative mobile app',
    challenge: 'Creating a comprehensive platform to connect Indian students with international universities while providing community support and detailed information access',
    solution: 'Developed a Flutter-based mobile application with Firebase backend, featuring university exploration, course details, and community engagement features',
    results: [
      'Over 50,000 active users across India',
      'Partnerships with 200+ universities',
      '300% user growth in first 6 months',
      'Successfully facilitated 1000+ student admissions',
      'Created 50+ active student communities'
    ],
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800',
    metrics: [
      { label: 'Active Users', value: '50,000+' },
      { label: 'Universities', value: '200+' },
      { label: 'Student Communities', value: '50+' }
    ]
  },
  'verse-healthcare': {
    title: 'Verse Health Care',
    subtitle: 'Revolutionizing medical tourism with seamless patient care coordination',
    challenge: 'Building a comprehensive platform to connect international patients with quality healthcare providers while streamlining the entire medical tourism journey',
    solution: 'Developed a full-stack solution using React Native and Node.js, featuring hospital discovery, treatment planning, and end-to-end patient care coordination',
    results: [
      'Successfully processed 5,000+ patient bookings',
      'Partnered with 50+ premium hospitals',
      'Achieved 200% year-over-year revenue growth',
      'Expanded operations to 5 countries',
      'Maintained 95% patient satisfaction rate',
      'Reduced booking process time by 60%'
    ],
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=800',
    metrics: [
      { label: 'Patient Bookings', value: '5,000+' },
      { label: 'Hospital Network', value: '50+' },
      { label: 'Revenue Growth', value: '200%' }
    ]
  },
  'urban-bites': {
    title: 'Urban Bites',
    subtitle: 'Transforming a local restaurant chain into a digital-first brand',
    challenge: 'Helping a traditional restaurant chain adapt to the digital age and build a strong social media presence to attract younger customers',
    solution: 'Implemented a comprehensive social media strategy across Instagram, TikTok, and Facebook, focusing on food photography, behind-the-scenes content, and influencer partnerships',
    results: [
      'Grew Instagram following from 2K to 50K in 6 months',
      'Achieved 300% increase in engagement rate',
      'Generated 1M+ organic impressions monthly',
      'Successfully launched viral TikTok campaign',
      'Increased dine-in customers by 150%',
      'Boosted online orders by 200%'
    ],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800',
    metrics: [
      { label: 'Social Growth', value: '2400%' },
      { label: 'Engagement Rate', value: '300%' },
      { label: 'Revenue Impact', value: '180%' }
    ]
  },
  'eco-fashion': {
    title: 'EcoVogue Fashion',
    subtitle: 'Building a sustainable fashion brand through digital storytelling',
    challenge: 'Launching a new sustainable fashion brand in a competitive market while educating consumers about eco-friendly fashion choices',
    solution: 'Created a multi-platform content strategy focusing on sustainability education, transparent manufacturing processes, and community building',
    results: [
      'Built an engaged community of 100K+ followers',
      'Achieved 25% conversion rate from social media',
      'Featured in major fashion publications',
      'Generated 500K+ in sales through social channels',
      'Created successful ambassador program',
      'Maintained 40% monthly growth rate'
    ],
    image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=800',
    metrics: [
      { label: 'Community Size', value: '100K+' },
      { label: 'Conversion Rate', value: '25%' },
      { label: 'Monthly Growth', value: '40%' }
    ]
  }
};

const CaseStudyDetail = () => {
  const { id } = useParams();
  const study = caseStudies[id as keyof typeof caseStudies];

  if (!study) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold">Case Study Not Found</h1>
        <Link to="/case-studies" className="text-primary hover:text-secondary mt-4 inline-block">
          ← Back to Case Studies
        </Link>
      </div>
    );
  }

  return (
    <div>
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container">
          <Link to="/case-studies" className="inline-flex items-center text-white hover:text-accent-light mb-8">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Case Studies
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">{study.title}</h1>
            <p className="text-xl mt-6">{study.subtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img
                src={study.image}
                alt={study.title}
                className="rounded-lg shadow-lg w-full"
              />
              <div className="grid grid-cols-3 gap-4 mt-8">
                {study.metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-primary">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Target className="h-6 w-6 mr-2 text-primary" />
                    The Challenge
                  </h2>
                  <p className="text-gray-600">{study.challenge}</p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Users className="h-6 w-6 mr-2 text-primary" />
                    Our Solution
                  </h2>
                  <p className="text-gray-600">{study.solution}</p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <TrendingUp className="h-6 w-6 mr-2 text-primary" />
                    Results
                  </h2>
                  <ul className="space-y-3">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-2" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-accent-light">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Success Story?</h2>
          <p className="text-xl mb-8">Let's transform your idea into a successful digital product.</p>
          <Link to="/contact" className="btn-primary">
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;