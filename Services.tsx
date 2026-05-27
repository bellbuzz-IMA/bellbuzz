import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, TrendingUp, Video, Instagram, Share2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Influencer Discovery",
      description: "Find the perfect influencers who align with your brand values and target audience.",
      image: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/files/chat-generated-images/project-2v0ndahjdqviivkyyhlot/76b75719-c7a0-42cc-a05c-e157c6a46fdd.png",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Campaign Management",
      description: "End-to-end campaign execution from strategy to delivery and performance tracking.",
      image: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/files/chat-generated-images/project-2v0ndahjdqviivkyyhlot/29746d2a-0796-413c-9a21-f849336eb2a7.png",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Performance Analytics",
      description: "Detailed insights and ROI tracking to measure your campaign's success and impact.",
      image: "https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/files/chat-generated-images/project-2v0ndahjdqviivkyyhlot/29746d2a-0796-413c-9a21-f849336eb2a7.png",
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Content Creation",
      description: "Collaborate with influencers to create authentic, engaging content that resonates.",
    },
    {
      icon: <Instagram className="w-8 h-8" />,
      title: "Social Media Strategy",
      description: "Comprehensive strategies across Instagram, YouTube, and other platforms.",
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Brand Partnerships",
      description: "Build long-term relationships between your brand and top influencers.",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-bellbuzz-black mb-4">
            Our <span className="text-bellbuzz-red">Services</span>
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive influencer marketing solutions tailored to grow your brand and drive meaningful engagement.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-bellbuzz-red/20"
            >
              <CardContent className="p-6">
                {service.image && (
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img
                      src={service.image}
                      alt={`${service.title} service illustration`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="mb-4 text-bellbuzz-red group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-bellbuzz-black mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-bellbuzz-black mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Explore our tailored packages designed for brands of all sizes
            </p>
            <Button
              onClick={() => navigate("/packages")}
              size="lg"
              className="bg-bellbuzz-red hover:bg-bellbuzz-red-dark text-white text-lg px-10 py-6 group"
            >
              View Our Packages
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;