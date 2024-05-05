const Careers = () => {
  return (
    <>
      <div>
        <div className=" m-auto min-h-[100vh] pt-[8%] text-white">
          <div className=" flex flex-col items-center justify-center  p-4">
            <h1 className="text-3xl font-bold text-indigo-200 md:text-5xl">
              Careers
            </h1>
            <div className="mx-auto max-w-4xl py-16">
              <h2 className="mb-8 text-center text-3xl font-bold text-indigo-200 md:text-5xl">
                Life at Woodrock
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <img
                    src=""
                    alt="Life at Woodrock"
                    className="mb-4 rounded-lg"
                  />
                  <p className="mb-4">
                    At Woodrock, we believe in creating an environment that
                    fosters growth, collaboration, and work-life balance. Our
                    modern workplace is designed to boost employee engagement
                    and improve work satisfaction, ensuring that every member of
                    our team feels valued and supported.
                  </p>
                </div>
                <div>
                  <p className="mb-4">
                    We prioritize teamwork and encourage open communication,
                    fostering an inclusive and collaborative culture where
                    diverse perspectives are welcomed and valued. Our
                    team-building activities and social events create a strong
                    sense of community, allowing our employees to forge lasting
                    connections and build a supportive network.
                  </p>
                  <img
                    src=""
                    alt="Team Collaboration"
                    className="mb-4 rounded-lg"
                  />
                </div>
              </div>

              <h3 className="mb-4 mt-8 text-xl font-semibold text-indigo-200">
                Benefits and Perks
              </h3>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <ul className="list-disc pl-4">
                    <li>Competitive compensation packages</li>
                    <li>Comprehensive health insurance coverage</li>
                    <li>Retirement savings plans</li>
                    <li>Paid time off and vacation days</li>
                  </ul>
                </div>
                <div>
                  <img src="" alt="Employee Benefits" className="rounded-lg" />
                </div>
              </div>

              <h3 className="mb-4 mt-8 text-xl font-semibold text-indigo-200">
                Expectations and Growth
              </h3>
              <p className="mb-4">
                At Woodrock, we expect our employees to embody a "will-do"
                attitude and embrace new challenges with enthusiasm. We foster a
                culture of continuous learning and professional development,
                providing opportunities for upskilling and career advancement
                within the organization.
              </p>
              <p className="mb-4">
                Our leadership team is committed to delivering quality results
                and earning the trust of our clients. We value transparency and
                bias for action, ensuring that our employees are equipped with
                the tools and resources they need to succeed in their roles.
              </p>
            </div>
            <h2 className="mb-8 text-center text-3xl font-bold text-indigo-200 md:text-5xl">
              Opening positions
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
