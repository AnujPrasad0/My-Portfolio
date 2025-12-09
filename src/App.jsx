import Lenis from "lenis";
import { useEffect } from "react";
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
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smooth: true });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="max-w-400 w-full poppins-thin m-auto text-[#323232] overflow-x-hidden">
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
