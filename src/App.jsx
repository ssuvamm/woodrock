import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Navbar from "./components/navbar";
import ScrollToTop from "react-scroll-to-top";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/careers" element={<Careers />}></Route>
      </Routes>
      <Footer />
      <ScrollToTop
        smooth
        top={720}
        viewBox="0 0 384 512"
        svgPath="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
        height="40"
        width="40"
        className="flex rounded-lg bg-indigo-600 hover:bg-indigo-700"
      />
    </>
  );
}

export default App;
