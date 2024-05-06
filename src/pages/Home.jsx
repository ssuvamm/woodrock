import Hero from "../components/Hero";
import SectionTitle from "../components/sectionTitle";
import Benefits from "../components/benefits";
import { benefitOne } from "../components/data";
import Video from "../components/video";
import Testimonials from "../components/testimonials";
import Faq from "../components/faq";
import Cta from "../components/cta";
import GrowthStories from "../components/growthStories";
import LeadershipDetails from "../components/LeadershipDetails";
import GrowthTimeline from "../components/growthTimeline";
import Achievements from "../components/Achievements";
import { motion as m } from "framer-motion";
// import Sidebar from "../components/Sidebar";
import { CgMouse } from "react-icons/cg";

const Home = () => {
  return (
    <m.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 80 }}
      exit={{ opacity: 0, y: -100 }}
      key="home"
      id="home"
      className="pt-20"
    >
      <Hero />
      <div id="achievements">
        <Achievements />
      </div>
      <div id="growth">
        <GrowthStories />
        <GrowthTimeline />
      </div>
      <div id="expertise">
        <Benefits data={benefitOne} />
      </div>
      <div id="leadership">
        <SectionTitle pretitle="Leadership" title="Our Team">
          <LeadershipDetails />
        </SectionTitle>
      </div>
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video />
      <div id="testimonials">
        <SectionTitle
          pretitle="Testimonials"
          title="Here's what our customers said"
        >
          Testimonails is a great way to increase the brand trust and awareness.
          Use this section to highlight your popular customers.
        </SectionTitle>
      </div>
      <Testimonials />
      <div id="faq">
        <SectionTitle
          pretitle="FAQ"
          title="Frequently Asked Questions"
        ></SectionTitle>
      </div>
      <Faq />
      <Cta />
      <Sidebar />
    </m.div>
  );
};

export default Home;

const Sidebar = () => {
  const onClickMenu = (id) => {
    const offset = 80;
    const element = document.getElementById(id);

    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      if (window.pageYOffset !== offsetPosition) {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      <div className="hidden lg:flex">
        <div className="fixed bottom-0 left-0 top-0 flex items-center  justify-center p-5 hover:hidden">
          <CgMouse className="h-10 w-10" />
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
          </span>
        </div>
        <div className="fixed left-4 top-1/2 flex -translate-y-1/2 flex-col gap-8 rounded-3xl bg-gray-800 p-5 text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
          <p
            className="w-full hover:cursor-pointer hover:text-sky-500"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Home
          </p>

          <p
            className="w-full hover:cursor-pointer hover:text-sky-500"
            onClick={() => onClickMenu("achievements")}
          >
            Achievements
          </p>

          <p
            onClick={() => onClickMenu("growth")}
            className="w-full hover:cursor-pointer hover:text-sky-500"
          >
            Growth Story
          </p>
          <p
            className="w-full hover:cursor-pointer hover:text-sky-500"
            onClick={() => onClickMenu("expertise")}
          >
            Expertise
          </p>
          <p
            onClick={() => onClickMenu("leadership")}
            className="w-full hover:cursor-pointer hover:text-sky-500"
          >
            Leadership
          </p>
          <p
            onClick={() => onClickMenu("testimonials")}
            className="w-full hover:cursor-pointer hover:text-sky-500"
          >
            Testimonials
          </p>
          <p
            onClick={() => onClickMenu("faq")}
            className="w-full hover:cursor-pointer hover:text-sky-500"
          >
            FAQ
          </p>
        </div>
      </div>
    </>
  );
};
