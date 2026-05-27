import { Instagram, Facebook, Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bellbuzz-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/b694884d-cbdd-4988-b55a-8a3df70f14d9/1763837894082-sketch-1762541767593.png"
                alt="Bell Buzz Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="text-2xl font-bold">
                Bell<span className="text-bellbuzz-red">Buzz</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              India's trusted influencer marketing agency helping brands connect with the right voices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/" className="hover:text-bellbuzz-red transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-bellbuzz-red transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-bellbuzz-red transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link to="/influencers" className="hover:text-bellbuzz-red transition-colors">
                  For Influencers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-bellbuzz-red transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-bellbuzz-red transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-bellbuzz-red transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-bellbuzz-red" />
                <a href="mailto:bellbuzz55@gmail.com" className="hover:text-bellbuzz-red transition-colors">
                  bellbuzz55@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-bellbuzz-red" />
                <a href="tel:+918788249538" className="hover:text-bellbuzz-red transition-colors">
                  +91 8788249538
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-bellbuzz-red" />
                <span>Latur, Maharashtra, India</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <p className="text-gray-400 text-sm mb-4">
              Connect with us on social media for the latest updates.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/bellbuzz.io?igsh=bXJ2cTN5b2Nya2I1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-bellbuzz-red flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/17Y6qwbTSB/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-bellbuzz-red flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/bell-buzz-founder-45208338b/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-bellbuzz-red flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/Bellbuzz5?t=cBG62vonIBAjIrrik9REFg&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-bellbuzz-red flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Bell Buzz. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-400 text-sm">
            <Link to="/privacy" className="hover:text-bellbuzz-red transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-bellbuzz-red transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;