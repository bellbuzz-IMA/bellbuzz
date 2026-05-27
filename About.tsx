import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award, TrendingUp, Heart, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Authenticity First",
      description: "We believe in genuine connections between brands and influencers that create real impact.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Results Driven",
      description: "Every campaign is designed with measurable goals and transparent performance tracking.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client Success",
      description: "Your growth is our priority. We're committed to delivering campaigns that exceed expectations.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description: "We stay ahead of trends to bring you cutting-edge influencer marketing strategies.",
    },
  ];

  const stats = [
    { number: "500+", label: "Influencer Partners" },
    { number: "200+", label: "Successful Campaigns" },
    { number: "100+", label: "Happy Clients" },
    { number: "98%", label: "Success Rate" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-white via-red-50/30 to-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-bellbuzz-black mb-6">
              About <span className="text-bellbuzz-red">Bell Buzz</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We're not just another marketing agency. We're your strategic partner in navigating 
              the dynamic world of influencer marketing, connecting brands with authentic voices 
              that create lasting impact.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold text-bellbuzz-black mb-6">
                Our <span className="text-bellbuzz-red">Mission</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At Bell Buzz, we're on a mission to revolutionize how brands connect with their audiences. 
                We believe in the power of authentic storytelling and genuine partnerships that drive 
                meaningful engagement and measurable results.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Based in Latur, Maharashtra, we've built a network of trusted influencers across India, 
                helping brands of all sizes amplify their message and achieve their marketing goals through 
                strategic influencer collaborations.
              </p>
              <Button
                onClick={() => navigate("/packages")}
                style={{
                  backgroundColor: "#FF3333",
                  color: "white",
                  padding: "12px 32px",
                  fontSize: "16px",
                  fontWeight: 500,
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer"
                }}
              >
                View Our Packages
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration and strategy planning"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-50/50 to-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-bellbuzz-black mb-4">
              Our <span className="text-bellbuzz-red">Impact</span>
            </h2>
            <p className="text-lg text-gray-600">
              Numbers that reflect our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-2 border-gray-100">
                <CardContent className="p-8">
                  <div className="text-5xl font-bold text-bellbuzz-red mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-bellbuzz-black mb-4">
              Our <span className="text-bellbuzz-red">Values</span>
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100"
              >
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-bellbuzz-red mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-bellbuzz-black mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-bellbuzz-red to-bellbuzz-red-dark">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Amplify Your Brand?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's create an influencer marketing campaign that drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate("/contact")}
                size="lg"
                className="bg-white text-bellbuzz-red hover:bg-gray-100"
              >
                Get In Touch
              </Button>
              <Button
                onClick={() => navigate("/packages")}
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  border: "2px solid white",
                  padding: "12px 32px",
                  fontSize: "16px",
                  fontWeight: 500,
                  borderRadius: "8px",
                  cursor: "pointer"
                }}
              >
                View Packages
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;