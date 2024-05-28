import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

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
              <h3 className="mb-3 text-2xl font-bold ">
                From Humble Beginnings to Industry Leaders
              </h3>
              <p className="mb-3 text-lg leading-relaxed">
                Established in 2014, Woodrock began as a small startup with a
                mission to revolutionize Business Process Outsourcing (BPO). It
                has since grown into an industry leader, driven by excellence
                and innovative solutions.
              </p>
              <p className="mb-3 text-lg leading-relaxed ">
                Over the years, Woodrock has exceeded expectations, expanded
                globally, and formed lasting partnerships across various
                industries. Our growth reflects our dedication to customer
                satisfaction, innovation, and operational excellence.
              </p>
            </div>
            <div>
              <LazyLoadImage
                src="/img/growthstory.jpg"
                alt="Growth Story"
                effect="opacity"
              />
            </div>
          </div>
          <div className="mt-1">
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
