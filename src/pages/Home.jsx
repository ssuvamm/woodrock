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

const Home = () => {
  return (
    <m.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      key="home"
      id="home"
      className="pt-20"
    >
      <Hero />

      <Achievements />
      <GrowthStories />
      <GrowthTimeline />
      <Benefits data={benefitOne} />
      <SectionTitle pretitle="Leadership" title="Our Team">
        <LeadershipDetails />
      </SectionTitle>
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle
        pretitle="FAQ"
        title="Frequently Asked Questions"
      ></SectionTitle>
      <Faq />
      <Cta />
    </m.div>
  );
};

export default Home;
