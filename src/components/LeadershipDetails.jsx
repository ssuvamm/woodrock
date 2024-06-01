import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
const LeadershipDetails = () => {
  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl md:max-w-4xl lg:max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-indigo-600">
            Visionary Leadership, Driving Success
          </h2>
          <p className="mb-6 text-lg leading-relaxed ">
            At Woodrock, our success is driven by a team of visionary leaders
            who possess a profound understanding of the BPO industry and a
            passion for innovation. Their strategic guidance and unwavering
            commitment to excellence have propelled us to the forefront of the
            industry.
          </p>
          <div className="grid grid-cols-1 gap-8 md:flex md:justify-center md:gap-12">
            <div>
              <div className="flex  justify-center rounded-full">
                <img
                  src="/leaders/Navneet Agrwal.webp"
                  alt="Navneet Agarwal"
                  className="h-32 w-32"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold ">Navneet Agarwal</h3>
              <p className="mb-4  ">COO of Woodrock Group</p>
              <a href="mailto:navneet@woodrockgroup.in">
                <p className="">navneet@woodrockgroup.in</p>
              </a>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold ">Yogesh Mishra</h3>
              <p className="mb-4 ">CTO of Woodrock Group</p>
              <a href="mailto:yogesh@woodrockgroup.in">
                <p className="">yogesh@woodrockgroup.in</p>
              </a>
            </div>
            <div>
              <div className="flex  justify-center rounded-full">
                <img
                  src="/leaders/Pragya Mishra.webp"
                  alt="Pragya Mishra"
                  className="h-32 w-32"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold ">Pragya Mishra</h3>
              <p className="mb-4 ">CMO of Woodrock Group</p>
              <a href="mailto:pragyamishra@woodrockgroup.in">
                <p className="">pragyamishra@woodrockgroup.in</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipDetails;
