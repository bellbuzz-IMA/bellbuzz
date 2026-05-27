import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Star, 
  Send, 
  MessageSquare, 
  Share2, 
  TrendingUp,
  Instagram,
  Youtube,
  Trophy
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { sendEmail } from "@/integrations/core";

const InfluencerContact = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    platform: "",
    handle: "",
    followers: "",
    message: "",
    agreedToTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreedToTerms) {
      toast({
        title: "Agreement Required",
        description: "Please read and agree to the Terms of Service and Privacy Policy to proceed.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await sendEmail({
        to: "bellbuzz.io@gmail.com",
        subject: `New Influencer Application from ${formData.name}`,
        body_html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
            <h2 style="color: #9333EA;">New Influencer Application</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone || "Not provided"}</p>
            <p><strong>Primary Platform:</strong> ${formData.platform}</p>
            <p><strong>Username/Handle:</strong> ${formData.handle}</p>
            <p><strong>Follower Count:</strong> ${formData.followers}</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
            <p><strong>Message (Why join Bell Buzz?):</strong></p>
            <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 5px;">${formData.message}</p>
          </div>
        `,
        from_name: "Bell Buzz Creator Network",
        from_local_part: "bellbuzz55",
        reply_to: "bellbuzz55@gmail.com",
      });

      toast({
        title: "Application Received!",
        description: "Our talent scouts will review your profile and reach out soon. Stay creative!",
      });
      setIsSubmitting(false);
      navigate("/thank-you");
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Submission failed",
        description: "Please try again later or contact us directly via WhatsApp.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/message/C7HVDKSIQVHUM1", "_blank");
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-white via-purple-50/30 to-white">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6 font-medium">
            <Star className="w-4 h-4 fill-purple-700" />
            <span>Join Our Creator Network</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-bellbuzz-black mb-6">
            Grow Your <span className="text-purple-600">Influence</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Partner with Bell Buzz to connect with top brands, monetize your content, 
            and take your influencer career to the next level. Let's build your brand together.
          </p>
        </div>
      </section>

      {/* Influencer Form Content */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-bellbuzz-black mb-4">
                  Apply to Collaborate
                </h2>
                <p className="text-gray-600">
                  Tell us a bit about yourself and your social media presence.
                </p>
              </div>

              <Card className="border-2 border-purple-100 shadow-xl shadow-purple-50/50">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold text-gray-700">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Alex Rivera"
                          className="focus-visible:ring-purple-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="alex@creator.com"
                          className="focus-visible:ring-purple-500"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="focus-visible:ring-purple-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="platform" className="text-sm font-semibold text-gray-700">
                          Primary Platform *
                        </label>
                        <select
                          id="platform"
                          name="platform"
                          required
                          value={formData.platform}
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select Platform</option>
                          <option value="instagram">Instagram</option>
                          <option value="youtube">YouTube</option>
                          <option value="tiktok">TikTok</option>
                          <option value="twitter">Twitter / X</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="handle" className="text-sm font-semibold text-gray-700">
                          Username/Handle *
                        </label>
                        <Input
                          id="handle"
                          name="handle"
                          type="text"
                          required
                          value={formData.handle}
                          onChange={handleChange}
                          placeholder="@yourhandle"
                          className="focus-visible:ring-purple-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="followers" className="text-sm font-semibold text-gray-700">
                          Follower Count *
                        </label>
                        <Input
                          id="followers"
                          name="followers"
                          type="text"
                          required
                          value={formData.followers}
                          onChange={handleChange}
                          placeholder="e.g. 50k+"
                          className="focus-visible:ring-purple-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-semibold text-gray-700">
                        Why do you want to join Bell Buzz? *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your content niche and what makes your audience special..."
                        rows={4}
                        className="focus-visible:ring-purple-500"
                      />
                    </div>

                    <div className="flex items-start space-x-3 py-2">
                      <Checkbox 
                        id="terms" 
                        checked={formData.agreedToTerms}
                        onCheckedChange={(checked) => 
                          setFormData(prev => ({ ...prev, agreedToTerms: checked === true }))
                        }
                        className="mt-1 border-purple-200 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                      />
                      <Label 
                        htmlFor="terms" 
                        className="text-sm text-gray-600 leading-relaxed cursor-pointer select-none"
                      >
                        I have read and agree to the{" "}
                        <a href="/terms" target="_blank" className="text-purple-600 font-semibold hover:underline">Terms of Service</a>
                        {" "}and{" "}
                        <a href="/privacy" target="_blank" className="text-purple-600 font-semibold hover:underline">Privacy Policy</a>
                        {" "}*
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6 text-lg font-bold rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      {isSubmitting ? "Submitting..." : "Join the Network"}
                      <Send className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Benefits & Contact */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-bellbuzz-black mb-8">
                Why Creators Love Us
              </h3>
              
              <div className="space-y-8 mb-12">
                {[
                  {
                    icon: <Trophy className="w-6 h-6 text-purple-600" />,
                    title: "Premium Brand Deals",
                    desc: "Get access to exclusive campaigns with global and national brands."
                  },
                  {
                    icon: <TrendingUp className="w-6 h-6 text-purple-600" />,
                    title: "Growth Support",
                    desc: "Insights and strategy to help you scale your audience and engagement."
                  },
                  {
                    icon: <Share2 className="w-6 h-6 text-purple-600" />,
                    title: "Easy Collaboration",
                    desc: "We handle the contracts and negotiations so you can focus on creating."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-bellbuzz-black">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-bellbuzz-black rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full -mr-16 -mt-16" />
                <h3 className="text-2xl font-bold mb-4 relative z-10">Need Quick Help?</h3>
                <p className="text-gray-400 mb-6 relative z-10">
                  Got questions about our network? Chat with our talent team directly on WhatsApp.
                </p>
                <Button 
                  onClick={openWhatsApp}
                  className="bg-white text-bellbuzz-black hover:bg-gray-100 font-bold px-8 py-6 rounded-xl relative z-10"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InfluencerContact;
