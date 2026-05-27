import { useState } from "react";
import { Menu, X, Briefcase, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 mr-8 shrink-0" title="Home">
            <img
              src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/b694884d-cbdd-4988-b55a-8a3df70f14d9/1763837894082-sketch-1762541767593.png"
              alt="Bell Buzz Logo - Influencer Marketing Agency"
              className="h-12 w-12 object-contain"
            />
            <span className="text-2xl font-bold text-bellbuzz-black tracking-tight">
              Bell<span className="text-bellbuzz-red">Buzz</span>
            </span>
          </Link>

          {/* Mobile Menu Button - Always visible for a simplified header */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-bellbuzz-black p-2 hover:bg-gray-100 rounded-md transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Quick Links Strip - New simplified navigation below the logo */}
      <div className="bg-gray-50/80 border-t border-gray-100 py-2">
        <div className="container mx-auto px-4 flex items-center gap-6 overflow-x-auto no-scrollbar whitespace-nowrap text-sm font-medium text-gray-600">
          <Link to="/about" className="hover:text-bellbuzz-red transition-colors">
            About
          </Link>
          <Link to="/packages" className="hover:text-bellbuzz-red transition-colors">
            Packages
          </Link>
          <Link to="/contact" className="hover:text-bellbuzz-red transition-colors">
            Contact
          </Link>
          
          <div className="h-4 w-[1px] bg-gray-300 mx-2 shrink-0" />
          
          <button
            onClick={() => navigate("/influencers")}
            className="text-purple-600 hover:text-purple-700 font-semibold flex items-center gap-1"
          >
            <Star className="w-3 h-3" />
            Influencers
          </button>
          <button
            onClick={() => navigate("/packages")}
            className="text-bellbuzz-red hover:text-bellbuzz-red-dark font-semibold flex items-center gap-1"
          >
            <Briefcase className="w-3 h-3" />
            Brands
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="bg-bellbuzz-red hover:bg-bellbuzz-red-dark text-white px-3 py-1 rounded-full text-xs transition-colors shrink-0"
          >
            Get Started
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mt-2 pb-6 flex flex-col gap-4 animate-fade-in">
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="text-left text-gray-700 hover:text-bellbuzz-red transition-colors font-semibold py-2 border-b border-gray-50"
            >
              About
            </Link>
            <Link
              to="/packages"
              onClick={() => setIsMenuOpen(false)}
              className="text-left text-gray-700 hover:text-bellbuzz-red transition-colors font-semibold py-2 border-b border-gray-50"
            >
              Packages
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-left text-gray-700 hover:text-bellbuzz-red transition-colors font-semibold py-2 border-b border-gray-50"
            >
              Contact
            </Link>
            <div className="flex flex-col gap-3 pt-2">
              <Button
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate("/influencers");
                }}
                variant="outline"
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white w-full justify-start"
              >
                <Star className="w-4 h-4 mr-2" />
                For Influencers
              </Button>
              <Button
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate("/packages");
                }}
                variant="outline"
                className="border-2 border-bellbuzz-red text-bellbuzz-red hover:bg-bellbuzz-red hover:text-white w-full justify-start"
              >
                <Briefcase className="w-4 h-4 mr-2" />
                For Brands
              </Button>
              <Button
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate("/contact");
                }}
                className="bg-bellbuzz-red hover:bg-bellbuzz-red-dark text-white w-full justify-start"
              >
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
