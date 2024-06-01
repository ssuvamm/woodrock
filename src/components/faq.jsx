import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="mx-auto w-full max-w-2xl rounded-2xl p-2">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="dark:bg-trueGray-800 flex w-full items-center justify-between rounded-lg bg-sky-200 px-4 py-4 text-left text-lg text-gray-800 hover:bg-sky-400 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-2 pt-4  ">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "What services does Woodrock offer?",
    answer:
      "Woodrock offers a comprehensive range of Business Process Outsourcing (BPO) services, including customized call center and customer support, market research services, and application development. We provide 24/7 support throughout the year, leveraging extensive domain knowledge, robust dialing systems, and workforce management tools to deliver top-notch service and achieve exceptional service level agreements (SLAs).",
  },
  {
    question: "How does Woodrock ensure data security?",
    answer:
      "Data security is of paramount importance at Woodrock. We have implemented stringent security measures and follow industry best practices to protect client information and ensure data confidentiality. Our facilities are equipped with state-of-the-art technology, and our data centers are designed to maintain the highest levels of security and reliability.",
  },
  {
    question: "What makes Woodrock's approach to customer service unique?",
    answer:
      "At Woodrock, we prioritize customer satisfaction and strive to create exceptional experiences at every touchpoint. Our approach is rooted in our commitment to transparency, professionalism, and a customer-centric mindset. We focus on achieving higher first-call resolution rates (FCR) and providing multilingual support to address the diverse needs of our clients' customers.",
  },
  {
    question: "How does Woodrock ensure quality and continuous improvement?",
    answer:
      "Woodrock has a robust quality assurance (QA) program in place to monitor and evaluate customer interactions, adherence to protocols, and the overall customer experience. We also encourage continuous learning and professional development for our employees, ensuring they stay up-to-date with industry trends and best practices. Regular feedback loops and training sessions empower our teams to consistently meet and exceed quality benchmarks.",
  },
  {
    question: "How does Woodrock  ensure quality in outsourcing services?",
    answer:
      "Quality is at the core of everything we do at Woodrock . We have stringent quality assurance processes in place to ensure accuracy, efficiency, and compliance with industry standards. Our team is dedicated to delivering excellence in every aspect of our services.",
  },
  {
    question:
      "Can I customize outsourcing solutions to fit my business requirements?",
    answer:
      "Absolutely! We understand that every business is unique. That's why we offer customizable outsourcing solutions tailored to your specific needs and objectives. Our team will work closely with you to ensure we meet your expectations.",
  },
  {
    question: "How can outsourcing with woodrock benefit my business?",
    answer:
      "Outsourcing with woodrock can help your business reduce costs, improve efficiency, access specialized expertise, and focus on core competencies. It also allows for scalability and flexibility to meet changing business needs.",
  },
  {
    question: "How can I contact Woddrock for further inquiries?",
    answer:
      "You can reach out to our team through our website's contact form or by calling us directly at +91 9831098538. We're here to assist you and answer any questions you may have about our outsourcing services.",
  },
];

export default Faq;
