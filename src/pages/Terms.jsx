import { motion as m } from "framer-motion";
import "react-lazy-load-image-component/src/effects/opacity.css";
const Terms = () => {
  return (
    <m.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      className=" pt-[30%] md:pt-[8%]"
      style={{ fontFamily: "Inter,sans-serif" }}
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-center text-4xl font-bold ">
            Terms and Conditions
          </h1>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <p className="mb-6 text-lg leading-relaxed ">
              Acceptance of Terms By accessing and using this website, you
              accept and agree to be bound by the terms and provisions of this
              agreement. If you do not agree to these terms, you should not use
              this website.
            </p>
            <p>
              Changes to Terms We reserve the right to modify these terms at any
              time. Any changes will be posted on this page, and your continued
              use of the site after such changes have been posted will
              constitute your acceptance of the new terms.
            </p>
          </div>
          <p>
             Use of the Site You agree to use this website only for lawful
            purposes and in a manner that does not infringe the rights of,
            restrict, or inhibit anyone else&apos;s use and enjoyment of the
            site. Prohibited behavior includes.
          </p>
        </div>
      </div>
    </m.div>
  );
};

export default Terms;
