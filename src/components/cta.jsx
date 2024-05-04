import Container from "./container";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <Container>
      <div className="mx-auto flex w-full max-w-4xl flex-wrap items-center justify-between gap-5 rounded-xl bg-indigo-600 px-7 py-7 text-white lg:flex-nowrap lg:px-12 lg:py-12">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Ready to check out our services?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl"></p>
        </div>
        <div className="w-full flex-shrink-0 text-center lg:w-auto">
          <Link
            to="/contact"
            rel="noopener"
            className="mx-auto inline-block rounded-md bg-white px-7 py-3 text-center text-lg font-medium text-indigo-600 lg:px-10 lg:py-5 "
          >
            Contact Us NOW
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Cta;
