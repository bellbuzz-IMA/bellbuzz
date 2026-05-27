import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Home, Package } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center pt-32 pb-20 px-4 bg-gradient-to-br from-white via-red-50/30 to-white">
        <div className="container max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-2 border-gray-100 shadow-xl overflow-hidden">
              <div className="h-2 bg-bellbuzz-red w-full" />
              <CardContent className="p-8 md:p-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 10 }}
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
                >
                  <CheckCircle2 className="w-12 h-12 text-green-600" />
                </motion.div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-bellbuzz-black mb-6">
                  Thank You for <span className="text-bellbuzz-red">Connecting!</span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  We've received your message and our team is already on it. 
                  Expect to hear from us within <span className="font-semibold text-bellbuzz-black">24 hours</span>. 
                  We can't wait to help you amplify your brand's voice!
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <Button
                    onClick={() => navigate("/")}
                    className="bg-bellbuzz-black hover:bg-gray-800 text-white py-6 text-lg group"
                  >
                    <Home className="mr-2 w-5 h-5" />
                    Back to Home
                  </Button>
                  <Button
                    onClick={() => navigate("/packages")}
                    variant="outline"
                    className="border-bellbuzz-red text-bellbuzz-red hover:bg-red-50 py-6 text-lg group"
                  >
                    <Package className="mr-2 w-5 h-5" />
                    View Packages
                    <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                
                <div className="mt-12 pt-8 border-t border-gray-100">
                  <p className="text-gray-500 text-sm">
                    In the meantime, why not follow our journey on social media?
                  </p>
                  <div className="flex justify-center gap-6 mt-4">
                    {/* Social icons could go here if needed, but keeping it focused for now */}
                    <span className="text-bellbuzz-red font-medium cursor-pointer hover:underline">Instagram</span>
                    <span className="text-bellbuzz-red font-medium cursor-pointer hover:underline">LinkedIn</span>
                    <span className="text-bellbuzz-red font-medium cursor-pointer hover:underline">Twitter</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;
