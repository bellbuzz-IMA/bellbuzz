import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting Bell Buzz. We'll get back to you soon!",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-white via-red-50/30 to-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-bellbuzz-black mb-4">
            Get In <span className="text-bellbuzz-red">Touch</span>
          </h2>
          <p className="text-lg text-gray-600">
            Ready to amplify your brand? Let's create an impactful influencer marketing campaign together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-2 border-gray-100">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your campaign goals..."
                    rows={5}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-bellbuzz-red hover:bg-bellbuzz-red-dark text-white py-6 text-lg"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-2 border-gray-100 hover:border-bellbuzz-red/20 transition-colors">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-bellbuzz-red" />
                </div>
                <div>
                  <h3 className="font-bold text-bellbuzz-black mb-1">Email Us</h3>
                  <a
                    href="mailto:bellbuzz55@gmail.com"
                    className="text-gray-600 hover:text-bellbuzz-red transition-colors"
                  >
                    bellbuzz55@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-bellbuzz-red/20 transition-colors">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-bellbuzz-red" />
                </div>
                <div>
                  <h3 className="font-bold text-bellbuzz-black mb-1">Call or WhatsApp</h3>
                  <a
                    href="tel:+918788249538"
                    className="text-gray-600 hover:text-bellbuzz-red transition-colors block"
                  >
                    +91 8788249538
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-bellbuzz-red/20 transition-colors">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-bellbuzz-red" />
                </div>
                <div>
                  <h3 className="font-bold text-bellbuzz-black mb-1">Visit Us</h3>
                  <p className="text-gray-600">
                    Latur, Maharashtra<br />
                    India
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp CTA */}
            <Card className="border-2 border-bellbuzz-red bg-gradient-to-br from-bellbuzz-red to-bellbuzz-red-dark">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-white text-xl mb-2">
                  Need Quick Help?
                </h3>
                <p className="text-white/90 mb-4">
                  Chat with us instantly on WhatsApp
                </p>
                <Button
                  onClick={openWhatsApp}
                  className="w-full bg-white text-bellbuzz-red hover:bg-gray-100"
                >
                  Open WhatsApp Chat
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;