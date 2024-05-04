import { useState } from "react";
import { motion as m } from "framer-motion";

const Contact = () => {
  const [formValues, setFormValues] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    // Send form values to backend
    alert("Thank you for your message, we will get back to you shortly.");
    setFormValues({});
  };
  return (
    <>
      <div className="pt-[7%] text-2xl "></div>
      <m.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className="flex flex-wrap gap-5 p-5 md:flex-nowrap"
      >
        <div className="w-full rounded-lg bg-[#2D3748] p-6 shadow-md md:w-1/2">
          <h1 className="text-2xl font-bold text-white">Contact Us</h1>
          <p className="mt-2 text-white">
            Feel free to contact us and we will get back to you as soon as we
            can.
          </p>
          <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formValues.name || ""}
              onChange={handleChange}
              className="rounded-md border border-gray-300 bg-[#1A1A1A] p-2 text-white"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formValues.email || ""}
              onChange={handleChange}
              className="rounded-md border border-gray-300 bg-[#1A1A1A] p-2 text-white"
            />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="5"
              placeholder="Message"
              value={formValues.message || ""}
              onChange={handleChange}
              className="rounded-md border border-gray-300 bg-[#1A1A1A] p-2 text-white"
            ></textarea>
            <button
              type="submit"
              className="rounded-md bg-blue-500 py-2 font-semibold text-white hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="w-full rounded-lg bg-[#2D3748] p-6 shadow-md md:w-1/2">
          <h2 className="text-xl font-bold text-white">Contact Info</h2>
          <h3 className="mt-4 text-lg font-semibold text-white">Addresses</h3>
          <div className="mt-4 space-y-6">
            <div className="rounded-lg bg-[#1A1A1A] p-4 text-white">
              <h3 className="text-lg font-semibold">Corporate Office</h3>
              <p>18 Rabindra Sarani, Poddar Court,</p>
              <p>Gate no – 4, 8th Floor, Kolkata – 700001</p>
            </div>
            <div className="rounded-lg bg-[#1A1A1A] p-4 text-white">
              <h3 className="text-lg font-semibold">Branch Office - 1</h3>
              <p>8th floor -DN Block-12 , Sector V,</p>
              <p>Bidhannagar, West Bengal 700091</p>
            </div>
            <div className="rounded-lg bg-[#1A1A1A] p-4 text-white">
              <h3 className="text-lg font-semibold">Branch Office - 2</h3>
              <p>5th floor -DN Block-12 , Sector V,</p>
              <p>Bidhannagar, West Bengal 700091</p>
            </div>
            <div className="rounded-lg bg-[#1A1A1A] p-4 text-white">
              <h3 className="text-lg font-semibold">Branch Office - 3</h3>
              <p>8th Floor, opposite Bank of Baroda,</p>
              <p>Vibhuti Khand, Gomti Nagar,Lucknow,</p>
              <p>Uttar Pradesh 226010</p>
            </div>
          </div>
        </div>
      </m.div>
    </>
  );
};

export default Contact;
