import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Zap, Heart, Award, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WhyChooseUs = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Verified Influencers",
      description: "Work with authentic, vetted influencers with genuine engagement and reach.",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Fast Turnaround",
      description: "Launch campaigns quickly with our streamlined process and dedicated team.",
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Authentic Partnerships",
      description: "Build real connections between your brand and influencers for lasting impact.",
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Proven Results",
      description: "98% success rate with measurable ROI and brand growth across campaigns.",
    },
  ];

  return (
    <section id="why-us" className="py-20 px-4 bg-gradient-to-br from-red-50/50 to-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-bellbuzz-black mb-4">
            Why Choose <span className="text-bellbuzz-red">Bell Buzz</span>
          </h2>
          <p className="text-lg text-gray-600">
            We're not just another agency. We're your partner in creating impactful influencer campaigns that deliver real results.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-bellbuzz-red/20 bg-white"
            >
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 text-bellbuzz-red mb-6 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-bellbuzz-black mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">Trusted by brands across India</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-bellbuzz-red">500+</div>
              <div className="text-sm text-gray-600 mt-1">Influencer Network</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-bellbuzz-red">50M+</div>
              <div className="text-sm text-gray-600 mt-1">Total Reach</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-bellbuzz-red">100+</div>
              <div className="text-sm text-gray-600 mt-1">Happy Clients</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <Button
              onClick={() => navigate("/packages")}
              size="lg"
              className="bg-bellbuzz-red hover:bg-bellbuzz-red-dark text-white text-lg px-10 py-6 group"
            >
              Explore Our Packages
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;