import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  HeroMain,
  TechStacksMain,
  ProjectsMain,
  ContactMeMain,
  AboutMeMain,
  FooterMain,
} from "./sections";
import { Nav } from "./components";

const App = () => {
  const [isMobile, setIsMobile] = useState(true);

  // Detect if the screen is mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize); // Listen for resize
    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  // Initialize Particles.js only on non-mobile devices
  useEffect(() => {
    if (!isMobile && window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 50, // Number of particles
            density: { enable: true, value_area: 800 },
          },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: true },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: { enable: true, speed: 2, direction: "none", out_mode: "out" },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
          },
        },
        retina_detect: true,
      });
    }
    return () => {
      // Destroy particles if the window is resized to mobile
      const canvas = document.querySelector("#particles-js canvas");
      if (canvas) canvas.remove();
    };
  }, [isMobile]);

  return (
    <main className="relative overflow-hidden">
      {/* Particles.js Container */}
      {!isMobile && (
        <div id="particles-js" className="absolute inset-0 -z-10"></div>
      )}

      {/* Gradient Background */}
      <motion.div
        className="absolute inset-0 -z-20 bg-[#15151b]"
        initial={{ backgroundPosition: "0% 0%" }}
        animate={{ backgroundPosition: "100% 100%" }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity }}
      />

      <Nav />
      <div className="flex flex-col font-jetbrains">
        {/* Hero Section */}
        <motion.section
          className="xl:padding-1 wide:padding-r padding-b"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <HeroMain />
        </motion.section>

        {/* About Me Section */}
        <motion.section
          className="padding bg-black bg-opacity-60"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <AboutMeMain />
        </motion.section>

        {/* Tech Stacks Section */}
        <motion.section
          className="padding"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          <TechStacksMain />
        </motion.section>

        {/* Projects Section */}
        <section className="padding">
          <ProjectsMain />
        </section>

        {/* Contact Me Section */}
        <section className="padding bg-black bg-opacity-60">
          <ContactMeMain />
        </section>

        {/* Footer Section */}
        <motion.section
          className="border-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FooterMain />
        </motion.section>
      </div>
    </main>
  );
};

export default App;
