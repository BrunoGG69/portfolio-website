import { motion } from "motion/react";
import {
  HeroMain,
  TechStacksMain,
  ProjectsMain,
  ContactMeMain,
  AboutMeMain,
  FooterMain,
} from "../sections";
import { Nav, ParticlesBackground } from "../components";
import useMobileDetection from "../hooks/useMobileDetection";

const Home = () => {
  const isMobile = useMobileDetection(); // Use the hook for mobile detection

  return (
    <main className="relative overflow-hidden">
      {/* Particles.js Background */}
      <ParticlesBackground isMobile={isMobile} />

      {/* Background */}
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

export default Home;
