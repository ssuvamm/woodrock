import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Navbar from "./components/navbar";
import ScrollToTop from "react-scroll-to-top";
import Footer from "./components/footer";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/careers" element={<Careers />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />

      <ScrollToTop
        smooth
        top={720}
        component={
          <svg
            className=""
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m16 17-4-4-4 4m8-6-4-4-4 4"
            />
          </svg>
        }
        className=" animate-bounce rounded-lg bg-white text-[#1ab4d8] hover:animate-none hover:bg-gray-200"
      />
    </>
  );
}

export default App;
