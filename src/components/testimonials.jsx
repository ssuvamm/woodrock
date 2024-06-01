import Container from "./container";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="transition duration-300 ease-in-out hover:scale-110 lg:col-span-2 xl:col-auto">
          <LazyLoadImage
            src="/testimonial/testimonial1.png"
            alt="testimonial 1"
            effect="opacity"
          />
        </div>
        <div className="transition duration-300 ease-in-out hover:scale-110">
          <LazyLoadImage
            src="/testimonial/testimonial2.png"
            alt="testimonial 2"
            effect="opacity"
          />
        </div>
        <div className=" transition duration-300 ease-in-out hover:scale-110">
          <LazyLoadImage
            src="/testimonial/testimonial3.png"
            alt="testimonial 3"
            effect="opacity"
          />
        </div>
      </div>
    </Container>
  );
};

export default Testimonials;
