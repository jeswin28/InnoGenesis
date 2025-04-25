import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="parallax min-h-[60vh] flex items-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070")'
        }}
      >
        <div className="parallax-overlay" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">Who Are We</h1>
            <p className="text-xl mt-6 max-w-2xl text-white/90">
              INNOGENESIS is a team of passionate innovators dedicated to helping startups and brands
              succeed in the digital world through MVP development and strategic social branding.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section bg-white relative z-10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading">Our Story & Mission</h2>
            <p className="mt-6 text-lg text-gray-600">
              Founded in 2023, INNOGENESIS emerged from a simple observation: too many great ideas
              never make it to market due to lengthy development cycles and unclear market validation.
              Our mission is to change that by providing rapid MVP development and effective social
              branding strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section 
        className="parallax py-32"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2070")'
        }}
      >
        <div className="parallax-overlay" />
        <div className="container relative z-10">
          <h2 className="heading text-center mb-12 text-white">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO & Founder',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300',
                description: 'Tech entrepreneur with 10+ years of startup experience',
              },
              {
                name: 'Michael Chen',
                role: 'CTO',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300',
                description: 'Full-stack developer and MVP specialist',
              },
              {
                name: 'Emily Rodriguez',
                role: 'Head of Brand Strategy',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300',
                description: 'Social media expert and brand consultant',
              },
              {
                name: 'Sarah Johnson',
                role: 'CEO & Founder',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300',
                description: 'Tech entrepreneur with 10+ years of startup experience',
              },
              {
                name: 'Michael Chen',
                role: 'CTO',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300',
                description: 'Full-stack developer and MVP specialist',
              },
              {
                name: 'Emily Rodriguez',
                role: 'Head of Brand Strategy',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300',
                description: 'Social media expert and brand consultant',
              },
               {
                name: 'Sarah Johnson',
                role: 'CEO & Founder',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300',
                description: 'Tech entrepreneur with 10+ years of startup experience',
              },
              {
                name: 'Michael Chen',
                role: 'CTO',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300',
                description: 'Full-stack developer and MVP specialist',
              },
              {
                name: 'Emily Rodriguez',
                role: 'Head of Brand Strategy',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300',
                description: 'Social media expert and brand consultant',
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-white/20"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-white/80 font-medium">{member.role}</p>
                  <p className="mt-2 text-white/70">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* College Partnership Section */}
      <section className="section bg-white relative z-10">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading">Our College Partnership Program</h2>
              <p className="mt-6 text-lg text-gray-600">
                We believe in nurturing the next generation of tech talent. Through our partnership
                program, students gain hands-on experience working on real projects while earning
                valuable certifications.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { icon: <Users className="h-6 w-6" />, text: 'Real-world project experience' },
                  { icon: <Award className="h-6 w-6" />, text: 'Industry-recognized certificates' },
                  { icon: <BookOpen className="h-6 w-6" />, text: 'Mentorship from experts' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 text-primary">
                    {item.icon}
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
              <button className="btn-primary mt-8">Join Our Network</button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
                alt="College Partnership"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;