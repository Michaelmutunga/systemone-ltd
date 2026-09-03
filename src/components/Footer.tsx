import { Mail, Phone, MapPin } from 'lucide-react';
import systemOneLogo from '@/assets/system-one-logo.webp';
import PrefetchLink from '@/components/PrefetchLink';

const Footer = () => {
  return (
    <footer className="bg-dark-grey text-white">
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <PrefetchLink to="/" className="flex items-center space-x-3">
              <img src={systemOneLogo} alt="System ONE Ltd Logo" className="h-12 w-auto" />
              <div>
                <h3 className="text-lg font-bold text-white">System One Ltd</h3>
                <p className="text-sm text-white/80">Technology Solutions</p>
              </div>
            </PrefetchLink>
            <p className="text-gray-300 text-sm">
              Leading technology solutions provider in Kenya, delivering innovative IT services and enterprise solutions.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:info@systemoneltd.com" className="text-gray-300 hover:text-primary transition-colors" aria-label="Email System One">
                <Mail size={20} />
              </a>
              <a href="tel:+254716003953" className="text-gray-300 hover:text-primary transition-colors" aria-label="Call System One">
                <Phone size={20} />
              </a>
              <a href="/contact" className="text-gray-300 hover:text-primary transition-colors" aria-label="Visit contact page">
                <MapPin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <PrefetchLink to="/about" className="text-gray-300 hover:text-primary transition-colors">
                  About Us
                </PrefetchLink>
              </li>
              <li>
                <PrefetchLink to="/services" className="text-gray-300 hover:text-primary transition-colors">
                  Products & Services
                </PrefetchLink>
              </li>
              <li>
                <PrefetchLink to="/library-radar" className="text-gray-300 hover:text-primary transition-colors">
                  Library Radar
                </PrefetchLink>
              </li>
              <li>
                <PrefetchLink to="/campus-cura" className="text-gray-300 hover:text-primary transition-colors">
                  CampusCURA ERP
                </PrefetchLink>
              </li>
              <li>
                <PrefetchLink to="/hardware-products" className="text-gray-300 hover:text-primary transition-colors">
                  Hardware Products
                </PrefetchLink>
              </li>
              <li>
                <PrefetchLink to="/why-choose-us" className="text-gray-300 hover:text-primary transition-colors">
                  Why Choose Us
                </PrefetchLink>
              </li>
              <li>
                <PrefetchLink to="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  Contact
                </PrefetchLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">RFID Solutions</h3>
            <ul className="space-y-2">
              <li>
                <PrefetchLink to="/rfid-solutions/library-management" className="text-gray-300 hover:text-primary transition-colors">
                  Library Management
                </PrefetchLink>
              </li>
              <li>
                <PrefetchLink to="/rfid-solutions/asset-tracking" className="text-gray-300 hover:text-primary transition-colors">
                  Asset Tracking
                </PrefetchLink>
              </li>
              <li>
                <PrefetchLink to="/rfid-solutions/inventory-management" className="text-gray-300 hover:text-primary transition-colors">
                  Inventory Management
                </PrefetchLink>
              </li>
              <li>
                <PrefetchLink to="/rfid-solutions/security-gates" className="text-gray-300 hover:text-primary transition-colors">
                  Security Gates
                </PrefetchLink>
              </li>
              <li>
                <PrefetchLink to="/rfid-solutions/tags-and-readers" className="text-gray-300 hover:text-primary transition-colors">
                  Tags & Readers
                </PrefetchLink>
              </li>
              <li>
                <PrefetchLink to="/rfid-solutions/attendance-and-identification" className="text-gray-300 hover:text-primary transition-colors">
                  Attendance & ID Systems
                </PrefetchLink>
              </li>
              <li>
                <PrefetchLink to="/rfid-solutions/access-control" className="text-gray-300 hover:text-primary transition-colors">
                  Access Control
                </PrefetchLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary" />
                <span className="text-gray-300 text-sm">info@systemoneltd.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary" />
                <span className="text-gray-300 text-sm">+254716003953</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-primary mt-1" />
                <span className="text-gray-300 text-sm">
                   Greatwall Building<br />
                  Beijing Road, Nairobi, Kenya
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            Copyright 2024 System One Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
