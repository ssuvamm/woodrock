import { motion as m } from "framer-motion";
import CodeOfConduct from "../components/CodeOfConduct";
import SecAndData from "../components/SecAndData";
const About = () => {
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
          <h1 className="mb-8 text-center text-4xl font-bold text-indigo-200">
            About Woodrock: <br />
            <span className="text-white ">
              Pioneering IT Solutions for Your Success
            </span>
          </h1>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <p className="mb-6 text-lg leading-relaxed text-white">
                <span className="font-bold text-indigo-200">
                  Established in 2014,
                </span>{" "}
                Woodrock stands as a pioneering Business Process Outsourcing
                (BPO) firm dedicated to delivering cutting-edge IT solutions.
                With a firm commitment to excellence, we have been at the
                forefront of revolutionizing businesses through innovative
                technology.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-white">
                At Woodrock, our mission is to be the trusted partner that
                empowers businesses to thrive in the digital era. We are
                dedicated to delivering innovative, reliable, and scalable
                business process outsourcing solutions that enhance our clients'
                efficiency and competitiveness.
              </p>
            </div>
            <div>
              <img
                src="/assets/images/about-illustration.svg"
                alt="About Illustration"
                className="mx-auto"
              />
            </div>
          </div>
          <div className="mt-8">
            <p className="mb-6 text-lg leading-relaxed text-white">
              <span className="font-bold text-indigo-200">
                Driven by a commitment to excellence,
              </span>{" "}
              we leverage cutting-edge technology, a global perspective, and a
              customer-centric approach to exceed expectations. Our success is
              intertwined with the success of our clients, and we strive to
              create lasting value through collaboration, integrity, and
              continuous improvement.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-white">
              At the heart of our mission is a focus on building enduring
              relationships. We prioritize transparency, professionalism, and
              the highest standards of service to foster trust with our clients,
              employees, and stakeholders. As a responsible corporate citizen,
              we embrace diversity, invest in our people, and contribute to the
              communities we serve.
            </p>
            <p className="text-lg leading-relaxed text-white">
              Woodrock is not just a service provider; we are a strategically
              dedicated to helping businesses navigate and thrive in an
              ever-evolving business landscape.{" "}
              <span className="font-bold text-indigo-200">
                Our vision is to be the catalyst for your growth, enabling you
                to achieve your goals and aspirations.
              </span>{" "}
              Together, let's shape a future where success knows no bounds.
            </p>
          </div>
        </div>
        <CodeOfConduct />
        <SecAndData />
      </div>
    </m.div>
  );
};

export default About;
