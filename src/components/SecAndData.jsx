const SecAndData = () => {
  return (
    <div className="mx-auto max-w-4xl ">
      <h2 className="mb-8 text-center text-3xl font-bold text-indigo-800">
        Security & Data Protection
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-4 text-xl font-semibold text-indigo-800">
            Data Handling Procedures
          </h3>
          <p className="mb-4 ">
            Employee must be responsible in handling of data throughout its
            lifecycle within the organization.
          </p>
          <h3 className="mb-4 text-xl font-semibold text-indigo-800">
            Password Protection
          </h3>
          <p className="mb-4 ">
            Safeguard your systems and data by ensuring that accounts are
            protected with strong and secure passwords.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-xl font-semibold text-indigo-800">
            Software Usage Policy
          </h3>
          <p className="mb-4 ">
            Employees are prohibited from installing restricted software to
            prevent security and compatibility issues.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecAndData;
