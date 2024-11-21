import { useEffect } from "react";
import { motion } from "motion/react"; // Import Framer Motion
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
  useEffect(() => {
    // Initialize particles.js with the new configuration
    window.particlesJS("particles-js", {
      particles: {
        number: { value: 35, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
        opacity: { value: 0.5 },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: { enable: true, speed: 6, out_mode: "out" },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 1 } },
          repulse: { distance: 200 },
        },
      },
      retina_detect: true,
    });
  }, []);

  return (
    <main className="relative overflow-hidden">
      <div
        id="particles-js"
        className="absolute inset-0 bg-[#15151b] -z-10"
      ></div>
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
          className="padding"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
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
        <motion.section
          className="padding"
          initial={{ opacity: 0, x: 500 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ProjectsMain />
        </motion.section>

        {/* Contact Me Section */}
        <section
          className="padding "
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
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
