import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "/img/benefit-one.png";
import benefitTwoImg from "/img/benefit-two.png";

const benefitOne = {
  title: "Our expertise",
  desc: "Woodrock's domestic footprint allows us to bring a diverse range of skills to the table while maintaining the personalized service that sets us apart. Our global perspective and local touch enable us to navigate the complexities of the BPO realm successfully.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Understand your customers",
      desc: "Our approach to customer experience enhancement involves a meticulous understanding of client needs, coupled with the implementation of cutting-edge technologies and streamlined processes.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Improvement",
      desc: "We foster a culture of continuous improvement that encourages our teams to think creatively and propose novel solutions to complex challenges.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Drive customer retention",
      desc: "Woodrock has achieved an impressive 80% client retention rate, a testament to our exceptional service quality and customer-centric approach.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
