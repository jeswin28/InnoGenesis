import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2">
              <Rocket className="h-8 w-8" />
              <span className="text-2xl font-bold">INNOGENESIS</span>
            </div>
            <p className="mt-4">
              Transforming ideas into successful digital products through MVP development
              and strategic social branding.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/inside-company" className="hover:text-primary transition-colors">
                  Inside Company
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>MVP Development</li>
              <li>Social Branding</li>
              <li>Student Training</li>
              <li>Consulting</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>contact@innogenesis.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>123 Innovation Street, Tech City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary/20 text-center">
          <p>&copy; {new Date().getFullYear()} INNOGENESIS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;