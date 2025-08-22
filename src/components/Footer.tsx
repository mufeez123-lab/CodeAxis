import React from 'react';
import { Code2, Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
        <img
              src="/images/codeaxis.png"
              alt="DevConsult Pro Logo"
              className="h-20 w-20 object-contain"
            />
              
            </div>
            <p className="text-gray-300 leading-relaxed">
              Transforming businesses through innovative software solutions and strategic 
              technology consulting. Your success is our mission.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/mufeez-692840211?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BWBq77WqZQh2FmjhwCmq47g%3D%3D" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
             
              <a href="https://github.com/mufeez123-lab/" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'About Us', 'Projects'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => scrollToSection(`#${item.toLowerCase().replace(' ', '')}`)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Custom Software Development</li>
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>Cloud Solutions</li>
              <li>Technical Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <div>Mangalore, Karnataka, India</div>
                  <div> 574199</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-blue-400" />
                <a href="tel:+1-555-0123" className="text-gray-300 hover:text-white transition-colors">
                  +91 6362514656
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-blue-400" />
                <a href="mailto:contact@devconsultpro.com" className="text-gray-300 hover:text-white transition-colors">
                  mufizmalar@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">Get In Touch</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-400"
              />
              <input
                type="text"
                placeholder="Subject"
                className="md:col-span-2 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-400"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="md:col-span-2 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-400 resize-none"
              ></textarea>
              <button
                type="submit"
                className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-center md:text-left">
            © 2025 DevConsult Pro. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <button 
              onClick={scrollToTop}
              className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1"
            >
              <ArrowUp className="h-4 w-4" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;