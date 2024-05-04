import Container from "./container";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap md:flex-nowrap">
        <div className="flex w-full items-center justify-center md:w-1/2">
          <div className="mb-8 max-w-2xl">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 md:text-4xl md:leading-tight lg:text-6xl lg:leading-tight">
              WOODROCK is a trusted and reliable partner.
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 md:text-xl lg:text-2xl">
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
          <div className="">
            <img
              src="placeholder.png"
              width="300"
              height="300"
              className={
                "h-full w-full object-cover md:h-auto md:max-h-[300px] md:w-auto md:max-w-[300px] md:rounded-md lg:max-h-[617px] lg:max-w-[616px]"
              }
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container className="min-w-full">
        <div className="flex flex-col justify-center">
          <div className="text-center text-xl text-gray-700">
            Trusted by <span className="text-indigo-600">25+</span> customers
            nationwide
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-5  sm:flex-nowrap sm:justify-around">
            <div className="flex items-center space-x-5 pt-2  text-white">
              <img className="h-[60px]" src="/Logo/swiggy.svg" alt="" />
              <p>Swiggy</p>
            </div>
            <div className="flex items-center text-gray-400 ">
              <img className="" src="/Logo/timesnow.svg" alt="" />
            </div>
            <div className="flex items-center text-gray-400 ">
              <img src="/Logo/lic.png" alt="" />
            </div>
            <div className="flex items-center text-gray-400 ">
              <img className="h-[60px]" src="/Logo/abp.png" alt="" />
            </div>
            <div className="flex items-center text-gray-400 ">
              <img className="h-[60px]" src="/Logo/zomato.svg" alt="" />
            </div>
            <div className="flex items-center text-gray-400 ">
              <img
                className="h-[60px]"
                src="/Logo/Shopperstop.svg"
                alt="shopperstop"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;
