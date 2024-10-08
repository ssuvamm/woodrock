import { motion as m } from "framer-motion";
import OpenPositions from "../components/OpenPositions";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
const Careers = () => {
  return (
    <>
      <m.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        style={{ fontFamily: "Montserrat,sans-serif" }}
        className="pt-[30%] md:pt-[8%]"
      >
        <div className=" m-auto min-h-[100vh]  ">
          <div className=" flex flex-col items-center justify-center  p-4">
            <h1 className="text-3xl font-bold text-indigo-800 md:text-5xl">
              Careers
            </h1>
            <LazyLoadImage
              src="/img/career-1.jpg"
              alt="headline Image"
              effect="opacity"
              className="my-4 h-full w-full object-cover md:h-auto md:max-h-[900px] md:w-auto md:max-w-[700px] md:rounded-md lg:max-h-[917px] lg:max-w-[900px]"
            />
            <div className="mx-auto max-w-4xl py-16">
              <h2 className="mb-8 text-center text-3xl font-bold text-indigo-800 md:text-5xl">
                Life at Woodrock
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <LazyLoadImage
                    src="/img/life at woodrock.avif"
                    alt="headline Image"
                    effect="opacity"
                  />

                  <p className="mb-4">
                    At Woodrock, we believe in creating an environment that
                    fosters growth, collaboration, and work-life balance. Our
                    modern workplace is designed to boost employee engagement
                    and improve work satisfaction, ensuring that every member of
                    our team feels valued and supported.
                  </p>
                </div>
                <div>
                  <p className="mb-4">
                    We prioritize teamwork and encourage open communication,
                    fostering an inclusive and collaborative culture where
                    diverse perspectives are welcomed and valued. Our
                    team-building activities and social events create a strong
                    sense of community, allowing our employees to forge lasting
                    connections and build a supportive network.
                  </p>
                  <LazyLoadImage
                    src="/img/team collab.png"
                    alt="Team Collaboration"
                    effect="opacity"
                    className="mb-4 rounded-lg"
                  />
                </div>
              </div>

              <h3 className="mb-4 mt-8 text-xl font-semibold text-indigo-800">
                Benefits and Perks
              </h3>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <ul className="list-disc pl-4">
                    <li>Competitive compensation packages</li>
                    <li>Comprehensive health insurance coverage</li>
                    <li>Retirement savings plans</li>
                    <li>Paid time off and vacation days</li>
                  </ul>
                  <h3 className="mb-4 mt-8 text-xl font-semibold text-indigo-800">
                    Expectations and Growth
                  </h3>
                  <p className="mb-4">
                    At Woodrock, we expect our employees to embody a
                    &quote;will-do&quot; attitude and embrace new challenges
                    with enthusiasm. We foster a culture of continuous learning
                    and professional development, providing opportunities for
                    upskilling and career advancement within the organization.
                  </p>
                </div>
                <div>
                  <LazyLoadImage
                    src="/img/employee benefits.jpg"
                    alt="Benefits"
                    effect="opacity"
                    className="mb-4 rounded-lg"
                  />
                </div>
              </div>

              <p className="mb-4">
                Our leadership team is committed to delivering quality results
                and earning the trust of our clients. We value transparency and
                bias for action, ensuring that our employees are equipped with
                the tools and resources they need to succeed in their roles.
              </p>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-indigo-800 md:text-5xl">
            Open positions
          </h2>
          <div>
            <OpenPositions />
          </div>
        </div>
      </m.div>
    </>
  );
};

export default Careers;
