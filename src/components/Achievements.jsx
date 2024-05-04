const Achievements = () => {
  return (
    <div>
      <div className="bg-[#4A5568] py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-8 text-center text-4xl font-bold text-[#F7F7F7]">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Our Achievements
              </span>
            </h1>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-2xl font-bold text-[#F7F7F7]">
                  Milestones on the Path to Excellence
                </h3>
                <p className="mb-6 text-lg leading-relaxed text-[#E8F0FE]">
                  At Woodrock, we take immense pride in our achievements, which
                  serve as a testament to our unwavering commitment to
                  excellence and customer satisfaction. Each milestone we've
                  reached is a reflection of our team's hard work, dedication,
                  and innovative spirit.
                </p>
                <p className="mb-6 text-lg leading-relaxed text-[#E8F0FE]">
                  From our humble beginnings in 2014 to our current position as
                  an industry leader, our journey has been marked by a
                  relentless pursuit of growth and continuous improvement. We
                  have consistently exceeded expectations, expanding our global
                  footprint and forging lasting partnerships with businesses
                  across diverse industries.
                </p>
              </div>
              <div className="relative">
                <img
                  src="/assets/images/achievements-illustration.svg"
                  alt="Achievements Illustration"
                  className="mx-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-indigo-600">
                  <p className="text-4xl font-bold text-[#E8F0FE]">80%</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="mb-4 text-2xl font-bold text-[#E8F0FE]">
                Key Achievements
              </h3>
              <ul className="mb-6 list-inside list-disc space-y-4">
                <li className="flex items-center text-lg text-[#E8F0FE]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-6 w-6 text-[#E2E8F0]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Achieved an impressive 80% client retention rate, a testament
                  to our exceptional service quality and customer-centric
                  approach.
                </li>
                <li className="flex items-center text-lg text-[#E8F0FE]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-6 w-6 text-[#E2E8F0]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Maintained a commendable 20% employee attrition rate,
                  reflecting our commitment to fostering a positive and
                  supportive work environment.
                </li>
                <li className="flex items-center text-lg text-[#E8F0FE]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-6 w-6 text-[#E2E8F0]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Expanded our workforce to over 800 employees and supported 12+
                  lines of business as of 2023, with ambitious plans to reach
                  2,500+ employees and 25+ lines of business by the end of 2024.
                </li>
                {/* Add any additional achievements as needed */}
              </ul>
              <p className="text-lg leading-relaxed text-[#E8F0FE]">
                At Woodrock, our achievements are not just numbers; they
                represent the trust our clients have placed in us and the
                dedication of our team. We remain committed to setting new
                benchmarks in the industry, delivering innovative solutions, and
                exceeding expectations at every turn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
