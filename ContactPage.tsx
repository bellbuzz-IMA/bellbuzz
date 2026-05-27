import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send, Clock, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { sendEmail } from "@/integrations/core";

const ContactPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
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
        subject: `New Contact Form Message from ${formData.name}`,
        body_html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
            <h2 style="color: #E11D48;">New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone || "Not provided"}</p>
            <p><strong>Company:</strong> ${formData.company || "Not provided"}</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 5px;">${formData.message}</p>
          </div>
        `,
        from_name: "Bell Buzz Website",
        from_local_part: "bellbuzz55",
        reply_to: "bellbuzz55@gmail.com",
      });

      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours. Check your email for confirmation.",
      });
      setIsSubmitting(false);
      navigate("/thank-you");
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact us directly via WhatsApp.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
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
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-br from-white via-red-50/30 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-bellbuzz-black mb-6">
            Get In <span className="text-bellbuzz-red">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a question or ready to start your influencer marketing campaign? 
            We'd love to hear from you. Reach out and let's create something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-bellbuzz-black mb-6">
                Send Us a Message
              </h2>
              <Card className="border-2 border-gray-100">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
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
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
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
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your campaign goals and how we can help..."
                        rows={6}
                        className="w-full"
                      />
                    </div>

                    <div className="flex items-start space-x-3 py-2">
                      <Checkbox 
                        id="terms" 
                        checked={formData.agreedToTerms}
                        onCheckedChange={(checked) => 
                          setFormData(prev => ({ ...prev, agreedToTerms: checked === true }))
                        }
                        className="mt-1 border-gray-300 data-[state=checked]:bg-bellbuzz-red data-[state=checked]:border-bellbuzz-red"
                      />
                      <Label 
                        htmlFor="terms" 
                        className="text-sm text-gray-600 leading-relaxed cursor-pointer select-none"
                      >
                        I have read and agree to the{" "}
                        <a href="/terms" target="_blank" className="text-bellbuzz-red font-semibold hover:underline">Terms of Service</a>
                        {" "}and{" "}
                        <a href="/privacy" target="_blank" className="text-bellbuzz-red font-semibold hover:underline">Privacy Policy</a>
                        {" "}*
                      </Label>
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
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-bellbuzz-black mb-6">
                Contact Information
              </h2>
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
                      <p className="text-sm text-gray-500 mt-1">
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-gray-100 hover:border-bellbuzz-red/20 transition-colors">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-bellbuzz-red" />
                    </div>
                    <div>
                      <h3 className="font-bold text-bellbuzz-black mb-1">Call Us</h3>
                      <a
                        href="tel:+918788249538"
                        className="text-gray-600 hover:text-bellbuzz-red transition-colors block"
                      >
                        +91 8788249538
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        Mon-Sat, 10:00 AM - 7:00 PM IST
                      </p>
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

                <Card className="border-2 border-gray-100 hover:border-bellbuzz-red/20 transition-colors">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-bellbuzz-red" />
                    </div>
                    <div>
                      <h3 className="font-bold text-bellbuzz-black mb-1">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Saturday<br />
                        10:00 AM - 7:00 PM IST
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* WhatsApp CTA */}
                <Card className="border-2 border-bellbuzz-red bg-gradient-to-br from-bellbuzz-red to-bellbuzz-red-dark">
                  <CardContent className="p-6 text-center">
                    <MessageSquare className="w-12 h-12 text-white mx-auto mb-3" />
                    <h3 className="font-bold text-white text-xl mb-2">
                      Need Instant Help?
                    </h3>
                    <p className="text-white/90 mb-4">
                      Chat with us directly on WhatsApp for quick responses
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;