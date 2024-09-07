import { motion as m } from "framer-motion";
import "react-lazy-load-image-component/src/effects/opacity.css";

const Privacy = () => {
  return (
    <m.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      className="pt-[30%] md:pt-[8%]"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-center text-4xl font-bold">
            Privacy Policy
          </h1>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <section className="space-y-6 text-lg leading-relaxed">
              <h2 className="text-xl font-bold">Introduction</h2>
              <p>
                We value your privacy and are committed to protecting your
                personal information. This Privacy Policy outlines our practices
                regarding the collection, use, and disclosure of your
                information when you use our website.
              </p>

              <h2 className="text-xl font-bold">Information We Collect</h2>
              <p>
                <strong>Personal Information:</strong> When you sign up for our
                services, contact us, or make a purchase, we may collect
                personal information such as your name, email address, phone
                number, and payment details.
              </p>
              <p>
                <strong>Usage Data:</strong> We automatically collect
                information about your interaction with our website, such as
                your IP address, browser type, pages visited, and the date and
                time of your visit.
              </p>
              <p>
                <strong>Cookies and Tracking Technologies:</strong> We use
                cookies and similar technologies to enhance your experience on
                our website, analyze site usage, and provide targeted
                advertisements. You can manage your cookie preferences through
                your browser settings.
              </p>

              <h2 className="text-xl font-bold">How We Use Your Information</h2>
              <p>
                <strong>To Provide Services:</strong> We use your personal
                information to process transactions, provide customer support,
                and deliver the services you request.
              </p>
              <p>
                <strong>To Improve Our Website:</strong> Usage data helps us
                understand how our website is being used, allowing us to enhance
                and optimize our content and functionality.
              </p>
              <p>
                <strong>Marketing and Communication:</strong> With your consent,
                we may use your contact information to send you promotional
                materials, updates, and newsletters. You can opt-out of these
                communications at any time.
              </p>
            </section>

            <section className="space-y-6 text-lg leading-relaxed">
              <h2 className="text-xl font-bold">
                Information Sharing and Disclosure
              </h2>
              <p>
                <strong>Third-Party Service Providers:</strong> We may share
                your information with trusted third-party service providers who
                assist us in operating our website, conducting our business, or
                servicing you, as long as those parties agree to keep this
                information confidential.
              </p>
              <p>
                <strong>Legal Requirements:</strong> We may disclose your
                information if required by law or in response to valid requests
                by public authorities.
              </p>
              <p>
                <strong>Business Transfers:</strong> In the event of a merger,
                acquisition, or sale of all or a portion of our assets, your
                personal information may be transferred to the new owner.
              </p>

              <h2 className="text-xl font-bold">Data Security</h2>
              <p>
                We implement a variety of security measures to protect your
                personal information. However, no method of transmission over
                the internet or electronic storage is 100% secure, and we cannot
                guarantee absolute security.
              </p>

              <h2 className="text-xl font-bold">Your Rights</h2>
              <p>
                You have the right to access, update, or delete your personal
                information. You can also object to the processing of your data
                or request that we restrict the processing of your personal
                information. To exercise these rights, please contact us using
                the information provided below.
              </p>

              <h2 className="text-xl font-bold">
                Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated revision date. We
                encourage you to review this policy periodically to stay
                informed about how we are protecting your information.
              </p>
            </section>
          </div>
        </div>
      </div>
    </m.div>
  );
};

export default Privacy;
