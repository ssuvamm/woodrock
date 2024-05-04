const CoreValuesAndConduct = () => {
  return (
    <div className=" py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-indigo-400">
            Our Core Values and Code of Conduct
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-white">
                Core Values
              </h3>
              <ul className="mb-6 list-inside list-disc space-y-4">
                <li className="flex items-center text-lg text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-6 w-6 text-indigo-600"
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
                  Customer-Centric Excellence
                </li>
                <li className="flex items-center text-lg text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-6 w-6 text-indigo-600"
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
                  Integrity and Transparency
                </li>
                {/* Add more core values from the PDF */}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-2xl font-bold text-white">
                Code of Conduct
              </h3>
              <ul className="mb-6 list-inside list-disc space-y-4">
                <li className="flex items-center text-lg text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-6 w-6 text-indigo-600"
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
                  Professionalism, Confidentiality, and Communication
                </li>
                <li className="flex items-center text-lg text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-6 w-6 text-indigo-600"
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
                  Adhere to Dress Code
                </li>
                {/* Add more code of conduct points from the PDF */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValuesAndConduct;
