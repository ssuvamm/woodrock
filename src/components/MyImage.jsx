import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const MyImage = ({ image }) => (
  <div>
    <LazyLoadImage
      src="/img/hero.jpg"
      alt="Hero Illustration"
      effect="opacity"
    />
    <span>{image.caption}</span>
  </div>
);

export default MyImage;
