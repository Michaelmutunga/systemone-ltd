import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark-grey text-white">
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">S1</span>
              </div>
              <span className="text-xl font-bold">System One Ltd</span>
            </div>
            <p className="text-gray-300 text-sm">
              Leading technology solutions provider in Kenya, delivering innovative IT services and enterprise solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors">
                  Products & Services
                </Link>
              </li>
              <li>
                <Link to="/why-choose-us" className="text-gray-300 hover:text-primary transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>ERP Systems</li>
              <li>IT Consultancy</li>
              <li>Software Development</li>
              <li>Networking Solutions</li>
              <li>Hardware Solutions</li>
              <li>Support Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary" />
                <span className="text-gray-300 text-sm">info@systemone.co.ke</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary" />
                <span className="text-gray-300 text-sm">+254 700 123 456</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-primary mt-1" />
                <span className="text-gray-300 text-sm">
                  Nairobi, Kenya<br />
                  CBD Business Center
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 System One Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;