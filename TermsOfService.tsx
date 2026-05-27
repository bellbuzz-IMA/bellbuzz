import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-bellbuzz-black mb-4">
            Terms of <span className="text-bellbuzz-red">Service</span>
          </h1>
          <p className="text-gray-500 mb-12">Last updated: June 2025</p>
          
          <div className="prose prose-red max-w-none text-gray-600 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-bellbuzz-black mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Bell Buzz website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-bellbuzz-black mb-4">2. Description of Services</h2>
              <p>
                Bell Buzz is an influencer marketing agency based in India. We provide services including but not limited to influencer discovery, campaign management, and content strategy for brands and influencers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-bellbuzz-black mb-4">3. User Obligations</h2>
              <p>
                You agree to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Provide accurate and complete information when contacting us or using our services.</li>
                <li>Not use our services for any illegal or unauthorized purpose.</li>
                <li>Respect the intellectual property rights of Bell Buzz and our partners.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-bellbuzz-black mb-4">4. Intellectual Property</h2>
              <p>
                All content on this website, including text, logos, and graphics, is the property of Bell Buzz and is protected by intellectual property laws. You may not use our branding or content without express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-bellbuzz-black mb-4">5. Payment and Fees</h2>
              <p>
                Payment terms for our services will be outlined in specific service agreements or contracts. All fees are non-refundable unless otherwise stated in writing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-bellbuzz-black mb-4">6. Limitation of Liability</h2>
              <p>
                Bell Buzz shall not be liable for any indirect, incidental, or consequential damages arising out of your use of our services or website. We do not guarantee specific results from marketing campaigns.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-bellbuzz-black mb-4">7. Termination</h2>
              <p>
                We reserve the right to terminate or suspend your access to our services at our sole discretion, without notice, for conduct that we believe violates these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-bellbuzz-black mb-4">8. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Maharashtra.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-bellbuzz-black mb-4">9. Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-6 p-8 bg-red-50 rounded-2xl border border-red-100">
                <p className="font-bold text-bellbuzz-black text-lg mb-2">Bell Buzz</p>
                <p className="flex items-center gap-2 mb-1">
                  <span className="font-semibold">Email:</span> bellbuzz55@gmail.com
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">Location:</span> Latur, Maharashtra, India
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
