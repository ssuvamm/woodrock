import { motion as m } from "framer-motion";
import "react-lazy-load-image-component/src/effects/opacity.css";

const LegalDisclaimer = () => {
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
            Legal Disclaimer and Notice
          </h1>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <section className="space-y-6 text-lg leading-relaxed">
              <h2 className="text-xl font-bold">Disclaimer of Warranties</h2>
              <p>
                The information provided on this website is for general
                informational purposes only. While we strive to keep the
                information up to date and correct, we make no representations
                or warranties of any kind, express or implied, about the
                completeness, accuracy, reliability, suitability, or
                availability with respect to the website or the information,
                products, services, or related graphics contained on the website
                for any purpose. Any reliance you place on such information is
                therefore strictly at your own risk.
              </p>

              <h2 className="text-xl font-bold">Limitation of Liability</h2>
              <p>
                In no event will we be liable for any loss or damage including
                without limitation, indirect or consequential loss or damage, or
                any loss or damage whatsoever arising from loss of data or
                profits arising out of, or in connection with, the use of this
                website.
              </p>
            </section>

            <section className="space-y-6 text-lg leading-relaxed">
              <h2 className="text-xl font-bold">External Links</h2>
              <p>
                Through this website, you may be able to link to other websites
                that are not under the control of our company. We have no
                control over the nature, content, and availability of those
                sites. The inclusion of any links does not necessarily imply a
                recommendation or endorse the views expressed within them.
              </p>

              <h2 className="text-xl font-bold">Intellectual Property</h2>
              <p>
                All content included on this website, such as text, graphics,
                logos, images, audio clips, video clips, and software, is the
                property of our company or its content suppliers and is
                protected by international copyright laws. The compilation of
                all content on this site is the exclusive property of our
                company and protected by international copyright laws. All
                software used on this site is the property of our company or its
                software suppliers and protected by international copyright
                laws.
              </p>

              <h2 className="text-xl font-bold">Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in
                accordance with the laws of [Your Country/State] and you
                irrevocably submit to the exclusive jurisdiction of the courts
                in that location.
              </p>
            </section>
          </div>
        </div>
      </div>
    </m.div>
  );
};

export default LegalDisclaimer;
