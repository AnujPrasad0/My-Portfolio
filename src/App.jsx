import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import { ToastContainer } from "react-toastify";
import Qualification from "./components/Qualification";

const App = () => {
  const isMobile = window.innerWidth < 768;

  return (
    <div className="max-w-400 poppins-thin text-[#323232]">
      <Navbar isMobile={isMobile} />
      <Hero isMobile={isMobile} />
      <About />
      <Skills isMobile={isMobile} />
      <Qualification />
      <Projects isMobile={isMobile} />
      <Contact />
      <Footer />
      <ToastContainer />
      <Cursor />
    </div>
  );
};

export default App;
