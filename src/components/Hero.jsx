import Container from "./container";
import { Link } from "react-router-dom";
import CoreValues from "./CoreValues";
import Carousel from "./Carousel";
import "react-lazy-load-image-component/src/effects/opacity.css";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap md:flex-nowrap">
        <div className="flex w-full items-center justify-center md:w-1/2">
          <div className="mb-8 max-w-2xl">
            <div className="  bg-[url('/Untitled.png')] pl-3 text-white md:bg-cover">
              <h1 className=" text-4xl font-bold leading-snug tracking-tight  md:text-4xl md:leading-tight lg:text-6xl lg:leading-tight">
                WOODROCK GROUP
              </h1>
              <h2 className="py-5 text-xl leading-normal  md:text-xl lg:text-3xl">
                Anticipating Your Needs <br /> Exceeding Your Expectations
              </h2>
            </div>
            <p className="py-5 text-xl leading-normal  md:text-xl lg:text-2xl">
              We are singularly dedicated to your success. As a client, you can
              expect top notch professionalism and an unwavering commitment to
              your satisfaction.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
              <Link
                to="/contact"
                className="rounded-md bg-indigo-600 px-8 py-4 text-center text-lg font-medium text-white md:px-10 md:py-5"
              >
                Contact us NOW
              </Link>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center md:w-1/2">
          <div className="heroImage">
            <img
              src="/img/hero.jpg"
              className="h-full w-full object-cover md:h-auto md:max-w-[250px] lg:max-w-[750px]"
              alt="Hero Illustration"
            />
          </div>
        </div>
      </Container>
      <CoreValues />

      <Container className="min-w-full">
        <div className="flex flex-col justify-center">
          <div className="text-center text-xl ">
            Trusted by <span className="text-indigo-600">25+</span> customers
            nationwide
          </div>
        </div>
      </Container>
      <div className="min-w-full px-0">
        <Carousel />
      </div>
    </>
  );
};

export default Hero;
