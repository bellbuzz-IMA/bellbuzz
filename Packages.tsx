import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Star, Zap, Crown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Packages = () => {
  const navigate = useNavigate();

  const packages = [
    {
      name: "Starter",
      icon: <Star className="w-8 h-8" />,
      price: "₹25,000",
      period: "/campaign",
      description: "Perfect for small businesses testing influencer marketing",
      features: [
        "1-2 Micro Influencers (10K-50K followers)",
        "2-3 Instagram Posts/Reels",
        "Campaign Strategy & Planning",
        "Content Review & Approval",
        "Basic Performance Report",
        "Campaign Duration: 1 Week",
      ],
      popular: false,
      color: "from-gray-50 to-white",
      borderColor: "border-gray-200",
    },
    {
      name: "Growth",
      icon: <Zap className="w-8 h-8" />,
      price: "₹75,000",
      period: "/campaign",
      description: "Ideal for brands looking to scale their reach",
      features: [
        "3-5 Influencers (Mix of Micro & Mid-tier)",
        "8-10 Instagram Posts/Reels",
        "Multi-Platform Strategy",
        "Dedicated Campaign Manager",
        "Detailed Analytics & Insights",
        "Content Creation Support",
        "Campaign Duration: 2 Weeks",
        "Influencer Relationship Management",
      ],
      popular: true,
      color: "from-red-50 to-white",
      borderColor: "border-bellbuzz-red",
    },
    {
      name: "Premium",
      icon: <Crown className="w-8 h-8" />,
      price: "₹1,50,000",
      period: "/campaign",
      description: "Complete solution for maximum brand impact",
      features: [
        "6-10 Influencers (Including Macro Influencers)",
        "15-20 Instagram Posts/Reels/Stories",
        "Multi-Platform Campaign (Instagram, YouTube)",
        "Premium Content Production",
        "Comprehensive Analytics Dashboard",
        "Brand Strategy Consultation",
        "Campaign Duration: 1 Month",
        "Post-Campaign Optimization Report",
        "Priority Support & Account Manager",
      ],
      popular: false,
      color: "from-amber-50 to-white",
      borderColor: "border-amber-300",
    },
  ];

  const addons = [
    {
      title: "Video Content Creation",
      description: "Professional video production and editing",
      price: "₹15,000+",
    },
    {
      title: "Multi-City Campaign",
      description: "Expand reach across multiple Indian cities",
      price: "₹25,000+",
    },
    {
      title: "Celebrity Influencer",
      description: "Partnership with top-tier celebrities",
      price: "Custom",
    },
    {
      title: "Giveaway Management",
      description: "Complete giveaway planning and execution",
      price: "₹10,000+",
    },
  ];

  const handleGetStarted = (packageName: string) => {
    navigate("/contact");
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-br from-white via-red-50/30 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-bellbuzz-black mb-6">
            Influencer Marketing <span className="text-bellbuzz-red">Packages</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect package for your brand. All packages include strategy, 
            execution, and performance tracking. Custom solutions available.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 ${pkg.borderColor} ${
                  pkg.popular ? "scale-105 shadow-xl" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-bellbuzz-red text-white px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}
                <CardContent className={`p-8 bg-gradient-to-br ${pkg.color}`}>
                  {/* Icon & Name */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-bellbuzz-red">{pkg.icon}</div>
                    <h3 className="text-2xl font-bold text-bellbuzz-black">
                      {pkg.name}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-bellbuzz-black">
                      {pkg.price}
                    </span>
                    <span className="text-gray-600 ml-2">{pkg.period}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6">{pkg.description}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-bellbuzz-red flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    onClick={() => handleGetStarted(pkg.name)}
                    className={`w-full ${
                      pkg.popular
                        ? "bg-bellbuzz-red hover:bg-bellbuzz-red-dark text-white"
                        : "bg-bellbuzz-black hover:bg-gray-800 text-white"
                    }`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Add-ons Section */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-bellbuzz-black mb-4">
                Additional <span className="text-bellbuzz-red">Services</span>
              </h2>
              <p className="text-lg text-gray-600">
                Enhance your campaign with these premium add-ons
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {addons.map((addon, index) => (
                <Card
                  key={index}
                  className="border-2 border-gray-100 hover:border-bellbuzz-red/20 hover:shadow-lg transition-all"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-bellbuzz-black">
                        {addon.title}
                      </h3>
                      <span className="text-bellbuzz-red font-bold">
                        {addon.price}
                      </span>
                    </div>
                    <p className="text-gray-600">{addon.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Package CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-bellbuzz-red to-bellbuzz-red-dark">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Need a Custom Package?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Every brand is unique. Let's create a tailored influencer marketing 
              solution that perfectly fits your goals and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate("/contact")}
                size="lg"
                className="bg-white text-bellbuzz-red hover:bg-gray-100"
              >
                Request Custom Quote
              </Button>
              <Button
                onClick={() => window.open("https://wa.me/message/C7HVDKSIQVHUM1", "_blank")}
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-bellbuzz-red transition-colors"
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-bellbuzz-black text-center mb-12">
            Frequently Asked <span className="text-bellbuzz-red">Questions</span>
          </h2>
          <div className="space-y-6">
            <Card className="border-2 border-gray-100">
              <CardContent className="p-6">
                <h3 className="font-bold text-bellbuzz-black mb-2">
                  How do you select influencers for my brand?
                </h3>
                <p className="text-gray-600">
                  We carefully vet influencers based on your target audience, brand values, 
                  engagement rates, and content quality to ensure authentic partnerships.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100">
              <CardContent className="p-6">
                <h3 className="font-bold text-bellbuzz-black mb-2">
                  What's included in performance tracking?
                </h3>
                <p className="text-gray-600">
                  We track reach, engagement, impressions, clicks, conversions, and ROI. 
                  You'll receive detailed reports with actionable insights.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100">
              <CardContent className="p-6">
                <h3 className="font-bold text-bellbuzz-black mb-2">
                  Can I choose specific influencers?
                </h3>
                <p className="text-gray-600">
                  Absolutely! We welcome your input and can work with specific influencers 
                  you have in mind, subject to availability and alignment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100">
              <CardContent className="p-6">
                <h3 className="font-bold text-bellbuzz-black mb-2">
                  What payment terms do you offer?
                </h3>
                <p className="text-gray-600">
                  We typically require 50% upfront and 50% upon campaign completion. 
                  Custom payment plans available for long-term partnerships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Packages;