import React from "react";

const GrowthStories = () => {
  return (
    <div className=" py-8">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-indigo-600">
            Our Growth Story
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold ">
                From Humble Beginnings to Industry Leaders
              </h3>
              <p className="mb-6 text-lg leading-relaxed ">
                Established in 2014, Woodrock embarked on a mission to
                revolutionize the Business Process Outsourcing (BPO) landscape.
                What began as a small startup has blossomed into an industry
                leader, driven by a relentless pursuit of excellence and a
                commitment to delivering cutting-edge solutions.
              </p>
              <p className="mb-6 text-lg leading-relaxed ">
                Over the years, Woodrock has consistently exceeded expectations,
                expanding its global footprint and forging lasting partnerships
                with businesses across diverse industries. Our growth trajectory
                is a testament to our unwavering dedication to customer
                satisfaction, innovation, and operational excellence.
              </p>
            </div>
            <div>
              <img
                src="/assets/images/growth-illustration.svg"
                alt="Growth Illustration"
                className="mx-auto"
              />
            </div>
          </div>
          <div className="mt-8">
            <p className="mb-6 text-lg leading-relaxed ">
              As we look towards the future, Woodrock remains steadfast in its
              mission to empower businesses with reliable, scalable, and
              innovative BPO solutions. With a talented workforce,
              state-of-the-art technology, and a customer-centric approach, we
              are poised to continue our upward trajectory, setting new
              benchmarks in the industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthStories;
