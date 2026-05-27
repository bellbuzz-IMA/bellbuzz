import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-bellbuzz-black mb-4">
            Privacy <span className="text-bellbuzz-red">Policy</span>
          </h1>
          <p className="text-gray-500 mb-12">Last updated: June 2025</p>
          
          <div className="prose prose-red max-w-none text-gray-600 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-bellbuzz-black mb-4">1. Information We Collect</h2>
              <p>
                At Bell Buzz, we collect information to provide better services to all our users. The types of personal information we collect include:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Personal Identifiers:</strong> Name, email address, phone number, and social media handles.</li>
                <li><strong>Professional Information:</strong> Company name, job title, and business website.</li>
                <li><strong>Usage Data:</strong> Information about how you use our website, including your IP address, browser type, and pages visited.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-bellbuzz-black mb-4">2. How We Use Your Information</h2>
              <p>
                We use the collected information for various purposes, including:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>To facilitate influencer marketing campaigns and collaborations.</li>
                <li>To communicate with you about our services, updates, and promotional offers.</li>
                <li>To improve our website's functionality and user experience.</li>
                <li>To comply with legal obligations and protect our rights.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-bellbuzz-black mb-4">3. Data Sharing and Disclosure</h2>
              <p>
                We do not sell your personal information. We may share your data with:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Service Providers:</strong> Third-party vendors who help us operate our business.</li>
                <li><strong>Business Partners:</strong> Influencers or brands as part of campaign executions.</li>
                <li><strong>Legal Authorities:</strong> When required by law or to respond to legal processes.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-bellbuzz-black mb-4">4. Cookies and Tracking</h2>
              <p>
                Our website uses cookies to enhance your browsing experience. Cookies help us understand user behavior and improve our services. You can manage cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-bellbuzz-black mb-4">5. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-bellbuzz-black mb-4">6. Your Rights</h2>
              <p>
                Depending on your location, you may have rights regarding your personal data, including the right to access, correct, or delete the information we hold about you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-bellbuzz-black mb-4">7. Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-bellbuzz-black mb-4">8. Contact Information</h2>
              <p>
                For any questions or concerns regarding this Privacy Policy, please reach out to us:
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

export default PrivacyPolicy;
