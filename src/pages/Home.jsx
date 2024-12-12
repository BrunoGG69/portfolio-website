import { motion } from "motion/react";
import {
  AboutMeMain,
  ContactMeMain,
  FooterMain,
  HeroMain,
  ProjectsMain,
  TechStacksMain,
} from "../sections";
import { Nav } from "../components";

const Home = () => {
  return (
      <main className="relative overflow-hidden bg-black">

        {/* Background */}
        <motion.div
            className="absolute inset-0 -z-20 bg-black"
            initial={{ backgroundPosition: "0% 0%" }}
            animate={{ backgroundPosition: "100% 100%" }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity }}
        />

        <Nav />
        <div className="flex flex-col font-jetbrains bg-black text-white">
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
              className="bg-black bg-opacity-60"
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
          <section className=" bg-black text-white">
            <ProjectsMain />
          </section>

          {/* Contact Me Section */}
          <section className="padding bg-black bg-opacity-60">
            <ContactMeMain />
          </section>

          {/* Footer Section */}
          <motion.section
              className="border-none bg-black text-white"
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
