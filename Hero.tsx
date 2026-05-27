import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Package } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const openWhatsApp = () => {
    window.open("https://wa.me/message/C7HVDKSIQVHUM1", "_blank");
  };

  return (
    <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-white via-red-50/30 to-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full">
              <TrendingUp className="w-4 h-4 text-bellbuzz-red" />
              <span className="text-sm font-medium text-bellbuzz-red">
                India's Trusted Influencer Marketing Agency
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-bellbuzz-black leading-tight">
              Amplify Your Brand with
              <span className="text-bellbuzz-red"> Influencer Power</span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Connect with the right influencers and transform your brand's reach. 
              We create authentic partnerships that drive real results and engagement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => navigate("/contact")}
                size="lg"
                className="bg-bellbuzz-red hover:bg-bellbuzz-red-dark text-white text-lg px-8 py-6 group"
              >
                Start Your Campaign
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => navigate("/packages")}
                size="lg"
                variant="outline"
                className="border-2 border-bellbuzz-red text-bellbuzz-red hover:bg-bellbuzz-red hover:text-white text-lg px-8 py-6"
              >
                View Packages
                <Package className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="pt-4">
              <Button
                onClick={openWhatsApp}
                size="lg"
                variant="ghost"
                className="text-bellbuzz-red hover:bg-red-50 text-lg px-8 py-6 w-full sm:w-auto"
              >
                Or Chat on WhatsApp
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl font-bold text-bellbuzz-red">500+</div>
                <div className="text-sm text-gray-600">Influencers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-bellbuzz-red">200+</div>
                <div className="text-sm text-gray-600">Campaigns</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-bellbuzz-red">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-float">
              <img
                src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/files/chat-generated-images/project-2v0ndahjdqviivkyyhlot/a89aaaa1-5a1f-47b2-bf0e-d090bb598d0a.png"
                alt="Influencer marketing collaboration with content creators"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-bellbuzz-red/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-bellbuzz-red/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;