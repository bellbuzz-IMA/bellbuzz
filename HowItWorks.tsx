import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Search, Rocket, BarChart } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <MessageSquare className="w-10 h-10" />,
      step: "01",
      title: "Tell Us Your Goals",
      description: "Share your brand vision, target audience, and campaign objectives with our team.",
    },
    {
      icon: <Search className="w-10 h-10" />,
      step: "02",
      title: "We Find Perfect Matches",
      description: "Our experts identify and vet influencers who align with your brand values.",
    },
    {
      icon: <Rocket className="w-10 h-10" />,
      step: "03",
      title: "Launch Campaign",
      description: "We manage everything from content creation to posting and engagement.",
    },
    {
      icon: <BarChart className="w-10 h-10" />,
      step: "04",
      title: "Track & Optimize",
      description: "Monitor real-time performance and get detailed analytics reports.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-bellbuzz-black mb-4">
            How It <span className="text-bellbuzz-red">Works</span>
          </h2>
          <p className="text-lg text-gray-600">
            Our proven 4-step process makes influencer marketing simple and effective.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full border-2 border-gray-100 hover:border-bellbuzz-red/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  {/* Step Number */}
                  <div className="text-6xl font-bold text-bellbuzz-red/10 mb-4">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-bellbuzz-red mb-4">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-bellbuzz-black mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>

              {/* Connector Arrow (Desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-bellbuzz-red/30"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;