import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="min-h-[80vh] pt-[12%] text-center text-5xl font-bold text-red-500">
      <p>
        Error <br />
        Page Not Found!
      </p>
      <p className="pb-10">Go back to Home</p>
      <button className="rounded-xl border-2 border-red-500 bg-red-500 px-5 py-2 text-white transition duration-300 hover:bg-transparent hover:text-red-500 ">
        <Link to="/">Home</Link>
      </button>
    </div>
  );
};

export default Error;
